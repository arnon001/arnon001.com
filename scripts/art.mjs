/**
 * Generates the site's static art:
 *   public/favicon.svg          pixel "A" mark
 *   public/images/avatar.svg    16-bit pixel portrait
 *   public/images/og.png        1200x630 social share card (rasterised from scripts/og.html)
 *   public/images/icon-180.png  apple-touch-icon
 *
 * Run: npm run art   (needs Chrome/Edge/Chromium installed, or set CHROME_PATH)
 * The SVGs are committed, so a normal `npm run build` never needs a browser.
 */
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const imagesDir = join(publicDir, 'images');
mkdirSync(imagesDir, { recursive: true });

const PALETTE = {
  H: '#2b211c', h: '#3d2f26', S: '#e3ac86', s: '#c98f6b', E: '#14100e', M: '#a85f4a',
  D: '#131c22', d: '#1e2c35', G: '#4af626', g: '#1f7a12', W: '#2a3d45', X: '#4af626',
};

function pixelsToRects(rows, cell, ox, oy) {
  const out = [];
  rows.forEach((row, y) => {
    if (row.length !== rows[0].length) throw new Error(`pixel row ${y} has ${row.length} cells, expected ${rows[0].length}`);
    let x = 0;
    while (x < row.length) {
      const key = row[x];
      if (key === '.' || !PALETTE[key]) { x += 1; continue; }
      let run = 1;
      while (x + run < row.length && row[x + run] === key) run += 1;
      out.push(`<rect x="${ox + x * cell}" y="${oy + y * cell}" width="${run * cell}" height="${cell}" fill="${PALETTE[key]}"/>`);
      x += run;
    }
  });
  return out.join('');
}

const AVATAR = [
  '....................',
  '....................',
  '......HHHHHHHH......',
  '.....HhhhhhhhhH.....',
  '....HhhhhhhhhhhH....',
  '....HHSSSSSSSSHH....',
  '...GGHSSSSSSSSHGG...',
  '...GGHSESSSSESHGG...',
  '...GGHSSSSSSSSHGG...',
  '....gHSSSMMSSSHg....',
  '.....HHSSssSSHH.....',
  '.......SSssSS.......',
  '.....dDDGDDDGDDd....',
  '....dDDDDDDDDDDd....',
  '...dDDDDGGGGDDDDd...',
  '...dDDDDGggGDDDDd...',
  '..dDDDDDDDDDDDDDDd..',
  '..dDDDDDDGGDDDDDDd..',
  '.dDDDDDDDDDDDDDDDDd.',
  '.DDDDDDDDDDDDDDDDDD.',
];

const MARK = ['.XXX.', 'X...X', 'X...X', 'XXXXX', 'X...X', 'X...X', 'X...X'];

writeFileSync(
  join(publicDir, 'favicon.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><rect width="32" height="32" rx="7" fill="#070a0c"/><rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="none" stroke="#1f7a12" stroke-opacity="0.55"/><g shape-rendering="crispEdges">${pixelsToRects(MARK, 3, 8, 5)}</g></svg>\n`,
);

writeFileSync(
  join(imagesDir, 'avatar.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160"><defs><radialGradient id="bg" cx="0.5" cy="0.38" r="0.62"><stop offset="0" stop-color="#123018"/><stop offset="1" stop-color="#070b0e"/></radialGradient></defs><rect width="160" height="160" fill="url(#bg)"/><g shape-rendering="crispEdges">${pixelsToRects(AVATAR, 8, 0, 0)}</g><rect width="160" height="160" fill="none" stroke="#1f7a12" stroke-opacity="0.4" stroke-width="2"/></svg>\n`,
);

console.log('wrote favicon.svg + images/avatar.svg');

function findBrowser() {
  if (process.env.CHROME_PATH && existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ];
  return candidates.find((p) => existsSync(p));
}

function shoot(browser, url, out, width, height) {
  const profile = mkdtempSync(join(tmpdir(), 'portfolio-art-'));
  try {
    const result = spawnSync(
      browser,
      [
        '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
        '--no-default-browser-check', '--force-device-scale-factor=1',
        `--user-data-dir=${profile}`, '--virtual-time-budget=4000',
        `--window-size=${width},${height}`, `--screenshot=${out}`, url,
      ],
      { stdio: 'pipe', timeout: 90000 },
    );
    if (!existsSync(out) || statSync(out).size < 1000) {
      throw new Error(`screenshot failed for ${out}\n${result.stderr?.toString() ?? ''}`);
    }
    console.log(`wrote ${out.replace(root + '\\', '').replace(root + '/', '')} (${Math.round(statSync(out).size / 1024)} KB)`);
  } finally {
    rmSync(profile, { recursive: true, force: true });
  }
}

const browser = findBrowser();
if (!browser) {
  console.warn('No Chrome/Edge/Chromium found — skipped og.png and icon-180.png. Set CHROME_PATH and re-run.');
} else {
  const source = pathToFileURL(join(root, 'scripts', 'og.html')).href;
  shoot(browser, source, join(imagesDir, 'og.png'), 1200, 630);
  shoot(browser, `${source}#icon`, join(imagesDir, 'icon-180.png'), 180, 180);
}