import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import { renderHead, renderPage } from './src/render.ts';
import type { Content } from './src/types.ts';

/**
 * Bakes content.json into the HTML at build time so the page is readable by
 * crawlers and paints with JS disabled. The browser re-uses renderPage() for
 * the EN/HE switch, so there is exactly one source of markup.
 */
function staticContent(): Plugin {
  return {
    name: 'static-content',
    async transformIndexHtml(html) {
      const raw = await readFile(resolve(process.cwd(), 'src/content.json'), 'utf8');
      const content = JSON.parse(raw) as Content;
      return html
        .replace('<!--seo-->', renderHead(content, 'en'))
        .replace('<!--app-->', renderPage(content, 'en'));
    },
  };
}

export default defineConfig({
  // Relative base: the same build works at /, /portfolio/ or any GH Pages path.
  base: './',
  plugins: [staticContent()],
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    assetsInlineLimit: 2048,
  },
  server: { port: 5173, open: false },
});