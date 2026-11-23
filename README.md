# Arnon Hacohen — portfolio

A CRT / arcade-themed personal portfolio. Static site, no framework: **Vite + vanilla TypeScript**, one accent color (phosphor green), English / Hebrew with full RTL, and all copy living in a single JSON file.

Content is rendered into the HTML **at build time**, so the page is fully readable by crawlers and paints with JavaScript disabled. The browser re-uses the same renderer only for the EN↔HE switch.

---

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Other commands:

```bash
npm run build      # typecheck (strict) + production build into dist/
npm run preview    # serve the built dist/ at http://localhost:4173
npm run typecheck  # tsc --noEmit only
npm run art        # regenerate favicon / avatar / og.png / touch icon (needs Chrome, see below)
npm run deploy     # build + push dist/ to the gh-pages branch (alternative to the Action)
```

Node 20.19+ or 22.12+ (Vite 8). Developed on Node 24.

---

## Editing your content

**Everything you say lives in [`src/content.json`](src/content.json).** You never need to touch layout code to change text, projects, skills or links.

- Every translatable string is an object: `{ "en": "...", "he": "..." }`. Edit both, or edit one and leave the other — the toggle just shows whichever language is active.
- Plain strings (tech names, years, handles, URLs) are shared across languages.
- `meta.url` is set to `https://arnon001.com/`. It drives the canonical link and the absolute Open Graph image URL (`https://arnon001.com/images/og.png`).
- `meta.ogImage` is relative to `meta.url` (keep it that way so the OG URL resolves correctly if you later move the site to a subpath).

### Add a project

Append to `projects.items`:

```json
{
  "id": "my-game",
  "index": "03",
  "title": { "en": "My Game", "he": "המשחק שלי" },
  "tagline": { "en": "One line under the screenshot", "he": "שורה אחת מתחת לצילום" },
  "status": { "en": "Shipped", "he": "שוחרר" },
  "year": "2026",
  "summary": { "en": "…", "he": "…" },
  "detail": { "en": "…", "he": "…" },
  "tech": ["TypeScript", "Node.js"],
  "media": {
    "src": "images/my-game.svg",
    "alt": { "en": "…", "he": "…" },
    "width": 1024,
    "height": 768
  },
  "links": [
    { "label": { "en": "Source code", "he": "קוד מקור" }, "url": "https://github.com/…", "kind": "source" }
  ]
}
```

- `media.src` is **relative to the site root** (`images/…`), which keeps it working at `/`, `/portfolio/`, or any GitHub Pages subpath. Drop files in `public/images/`. SVG, PNG, WebP and GIF all work; images are lazy-loaded with fixed dimensions (no layout shift).
- A link with `"pending": true` or an empty `url` renders as a disabled **"coming soon"** chip — that's how Flight Arcade's source link behaves until you paste the real URL in.
- `kind` picks the icon: `story` (external), `source` (code), `live` (arrow).
- Cards alternate media left / right automatically.

### Skills, personal, contact

- `skills.groups[].items` — add/remove chips freely; the panel count updates itself.
- `personal.items[].icon` — `ball`, `plane` or `gamepad`.
- `contact.email` and `contact.links` — the copy button, mailto form and JSON-LD all read from here.
- `contact.form.*` — labels, placeholders and status messages for the form.

> The skill lists were pre-filled from what you mentioned plus your usual stack (Linux/Nginx/MySQL/Mongo, Phaser, AS3). Trim anything you don't want to claim.
> The LinkedIn profile URL in `contact.links` was inferred from your article slug — **verify it** and replace with your exact profile URL.

After editing: `npm run build` (or just save while `npm run dev` is running).

---

## The contact form

No backend. Submitting composes a `mailto:arnon@arnon001.com` with the subject and body pre-filled and opens the visitor's mail app; the form shows a live status line. Nothing is stored or sent anywhere else.

To use a real form backend later (e.g. Formspree), point the form at it in `src/render.ts` (`<form …>`) and replace the `submitForm()` mailto branch in `src/main.ts` with a `fetch` POST. Validation and status messaging already exist.

---

## Deploy

### GitHub Pages (`main` → `gh-pages`)

The repository uses two branches:

- `main` — editable source, content and configuration.
- `gh-pages` — generated production output from `dist/`; do not edit it manually.

1. Push this folder to a GitHub repo (default branch `main`).
2. Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Select the `gh-pages` branch and the `/ (root)` folder.
4. Repo **Settings → Pages → Custom domain**: enter `arnon001.com` and save. `public/CNAME` is already included in every build.
5. At your DNS provider, point the apex `arnon001.com` to GitHub Pages with the A records shown in GitHub's Pages settings. For `www.arnon001.com`, use a CNAME to `arnon001.github.io`. Remove any old conflicting records.
6. Wait for the DNS check to pass, then enable **Enforce HTTPS**.
7. Push to `main`. [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site and publishes `dist/` to `gh-pages` automatically.

The Vite `base` is `'./'`, so assets work at the domain root or under a project subpath. The canonical URL is configured for `https://arnon001.com/`.

Prefer deploying from your machine? `npm run deploy` builds and pushes `dist/` to the `gh-pages` branch.

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

Or drag the `dist/` folder onto Netlify Drop. No server config needed.

### Your own Node / Nginx box

```bash
npm run build
rsync -av --delete dist/ user@your-server:/var/www/portfolio/
```

Nginx server block:

```nginx
server {
  listen 80;
  server_name arnon001.com;
  root /var/www/portfolio;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  # hashed assets never change — cache hard
  location /assets/ {
    add_header Cache-Control "public, max-age=31536000, immutable";
  }

  location ~* \.(svg|png|webp|woff2)$ {
    add_header Cache-Control "public, max-age=604800";
  }

  gzip on;
  gzip_types text/css application/javascript image/svg+xml application/json;
}
```

It's fully static, so any Node static server (`npx serve dist`) works too.

---

## Artwork

`public/images/*.svg` (project "screenshots", avatar) and `public/favicon.svg` are hand-authored vector art — a few KB each, crisp at any size. `og.png` (1200×630) and `icon-180.png` are rasterised from [`scripts/og.html`](scripts/og.html) by [`scripts/art.mjs`](scripts/art.mjs) using a locally installed Chrome/Edge/Chromium:

```bash
npm run art                  # autodetects Chrome / Edge
CHROME_PATH=/path/to/chrome npm run art
```

The generated files are committed, so **CI and `npm run build` never need a browser**. To change the share card, edit `scripts/og.html` and re-run `npm run art`.

---

## Design & behaviour notes

- **One accent** (`#4af626`) across the whole UI; the only other hue is a muted red reserved for form-validation errors. Neutrals are cool charcoals.
- Ambient layers: pixel grid (scroll-parallax), drifting phosphor glow, film grain, CRT scanlines + a slow sweep, vignette. The **monitor button** in the header toggles the CRT filter; the **Konami code** (↑↑↓↓←→←→BA) toggles overdrive.
- Fixed HUD with scroll-progress bar, scroll-spy nav, and a primary Contact action always reachable. Anchor jumps land just below the header.
- Reveal-on-scroll via IntersectionObserver, staged hero entrance, sticky About column, hover feedback on every card/chip/link. All motion is disabled under `prefers-reduced-motion`.
- RTL: logical properties throughout; Hebrew HUD labels switch off the pixel font (it has no Hebrew glyphs) and shadows/gradients mirror.
- Square, palette-matched scrollbar; visible focus rings; skip link; semantic landmarks and labelled controls.
- SEO: build-time `<title>`, description, canonical, Open Graph + Twitter cards with a raster OG image, and `Person` JSON-LD.
- Weight: ~7 KB gzipped HTML (content included), ~8 KB CSS, ~12 KB JS, plus two async-loaded font families. Images are lazy SVGs.

## File map

```
index.html               shell + ambient layers; content injected at build
vite.config.ts           base './' + build-time content renderer plugin
src/content.json         ← all copy, EN + HE
src/types.ts             strict content model
src/render.ts            content → HTML (used by build AND the language toggle)
src/main.ts              i18n/RTL, scroll-spy, reveals, CRT, copy, mailto form, Konami
src/styles/main.css      tokens, layout, HUD, cards, RTL, reduced-motion
public/                  favicon + images (committed)
scripts/art.mjs          pixel-map → SVG, Chrome → og.png / icon-180.png
scripts/og.html          source page for the share card
.github/workflows/       GitHub Pages deploy
```