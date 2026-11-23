import type { Content, Lang, L, Project, ProjectLink } from './types.ts';

export const LANGS: readonly Lang[] = ['en', 'he'];

export function t(value: L, lang: Lang): string {
  return value[lang];
}

export function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const PATHS: Record<string, string> = {
  mail: '<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M3 6.5 12 13l9-6.5"/>',
  github:
    '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.6c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.7 5.4 3 5.4 3a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.4c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  linkedin:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 10.5V17M7.5 7.2v.1M11.5 17v-3.8a2.2 2.2 0 0 1 4.4 0V17M11.5 10.5V17"/>',
  arrow: '<path d="M4 12h15M13 6l6 6-6 6"/>',
  external: '<path d="M14 4h6v6M20 4 11 13M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="1.5"/><path d="M15 5.5A1.5 1.5 0 0 0 13.5 4h-8A1.5 1.5 0 0 0 4 5.5v8A1.5 1.5 0 0 0 5.5 15"/>',
  check: '<path d="m4.5 12.5 5 5 10-11"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  monitor: '<rect x="2.5" y="4" width="19" height="13" rx="1.5"/><path d="M8 21h8M12 17v4M5.5 8.5h13M5.5 11.5h9"/>',
  ball: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M5.6 5.6c3.6 2 8.4 2 12.8 0M5.6 18.4c3.6-2 8.4-2 12.8 0"/>',
  plane: '<path d="M10.5 13.5 3 11l1.5-2 6.5 1 4.6-4.6a2 2 0 0 1 2.8 2.8L13.8 13l1 6.5-2 1.5-2.3-7.5Z"/>',
  gamepad:
    '<path d="M7.5 8h9a4.5 4.5 0 0 1 4.4 5.4l-.7 3.4A2.6 2.6 0 0 1 15.8 18l-1.3-1.5h-5L8.2 18a2.6 2.6 0 0 1-4.4-1.2l-.7-3.4A4.5 4.5 0 0 1 7.5 8Z"/><path d="M8 11.5v3M6.5 13h3M15.5 12h.1M17.5 14h.1"/>',
  up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  code: '<path d="m8 6-6 6 6 6M16 6l6 6-6 6"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>',
};

export function icon(name: keyof typeof PATHS | string, className = ''): string {
  const body = PATHS[name] ?? '';
  const cls = className ? ` class="${className}"` : '';
  return `<svg${cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
}

const LOGO = `<svg class="logo" viewBox="0 0 5 7" shape-rendering="crispEdges" aria-hidden="true" focusable="false"><g fill="currentColor"><rect x="1" y="0" width="3" height="1"/><rect x="0" y="1" width="1" height="6"/><rect x="4" y="1" width="1" height="6"/><rect x="1" y="3" width="3" height="1"/></g></svg>`;

function sectionHead(id: string, index: string, heading: string, kicker: string, label: string): string {
  return `<header class="sec-head reveal">
      <p class="sec-index hud-label"><span class="sec-slash" aria-hidden="true">//</span><span class="sr-only">${esc(label)} </span>${esc(index)}</p>
      <div class="sec-title-row">
        <h2 id="${id}-title">${esc(heading)}</h2>
        <span class="sec-rule" aria-hidden="true"></span>
      </div>
      <p class="sec-kicker">${esc(kicker)}</p>
    </header>`;
}

function projectLink(link: ProjectLink, lang: Lang, soon: string): string {
  const label = esc(t(link.label, lang));
  if (link.pending === true || link.url === '') {
    return `<span class="cart-link is-pending" aria-disabled="true">${icon(link.kind === 'source' ? 'code' : 'external')}<span>${label}</span><em class="soon">${esc(soon)}</em></span>`;
  }
  const glyph = link.kind === 'story' ? 'external' : link.kind === 'source' ? 'code' : 'arrow';
  return `<a class="cart-link" href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">${icon(glyph)}<span>${label}</span>${icon('arrow', 'cart-link-arrow')}</a>`;
}

function projectCard(p: Project, lang: Lang, soon: string, flipped: boolean): string {
  const titleId = `project-${p.id}-title`;
  return `<article class="cartridge reveal${flipped ? ' is-flipped' : ''}" id="project-${esc(p.id)}" aria-labelledby="${titleId}">
        <div class="cart-media">
          <figure class="screen">
            <div class="screen-bar">
              <span class="hud-label screen-name">${esc(p.id)}.exe</span>
              <span class="screen-leds" aria-hidden="true"><i></i><i></i><i></i></span>
            </div>
            <div class="screen-view">
              <img src="${esc(p.media.src)}" alt="${esc(t(p.media.alt, lang))}" width="${p.media.width}" height="${p.media.height}" loading="lazy" decoding="async">
              <span class="screen-glass" aria-hidden="true"></span>
            </div>
            <figcaption class="screen-caption">${esc(t(p.tagline, lang))}</figcaption>
          </figure>
        </div>
        <div class="cart-body">
          <div class="cart-meta">
            <span class="cart-index hud-label">${esc(p.index)}</span>
            <span class="chip chip-status${p.id === 'ekoloko' ? ' is-live' : ''}"><i aria-hidden="true"></i>${esc(t(p.status, lang))}</span>
            <span class="cart-year">${esc(p.year)}</span>
          </div>
          <h3 id="${titleId}">${esc(t(p.title, lang))}</h3>
          <p class="cart-summary">${esc(t(p.summary, lang))}</p>
          <p class="cart-detail">${esc(t(p.detail, lang))}</p>
          <ul class="tech" aria-label="Tech stack">
            ${p.tech.map((tech) => `<li>${esc(tech)}</li>`).join('\n            ')}
          </ul>
          <div class="cart-links">
            ${p.links.map((link) => projectLink(link, lang, soon)).join('\n            ')}
          </div>
        </div>
      </article>`;
}

function header(c: Content, lang: Lang): string {
  const contact = c.nav.find((n) => n.id === 'contact');
  return `<header class="hud" id="top">
    <div class="hud-progress" aria-hidden="true"><i id="progress-bar"></i></div>
    <div class="hud-inner">
      <a class="brand" href="#hero" aria-label="Arnon Hacohen — ${lang === 'he' ? 'ראש הדף' : 'home'}">
        <span class="brand-mark">${LOGO}</span>
        <span class="brand-text">ARNON<span class="brand-slash" aria-hidden="true">//</span>HACOHEN</span>
      </a>
      <nav class="nav" id="nav" aria-label="${lang === 'he' ? 'ניווט ראשי' : 'Primary'}">
        <ul>
          ${c.nav.map((n) => `<li><a href="#${esc(n.id)}" data-nav="${esc(n.id)}">${esc(t(n.label, lang))}</a></li>`).join('\n          ')}
        </ul>
      </nav>
      <div class="hud-tools">
        <button class="icon-btn" id="crt-toggle" type="button" aria-pressed="true" title="${esc(t(c.ui.crtLabel, lang))}" aria-label="${esc(t(c.ui.crtLabel, lang))}">${icon('monitor')}</button>
        <button class="lang-btn" id="lang-toggle" type="button" lang="${lang === 'en' ? 'he' : 'en'}" title="${esc(t(c.ui.languageLabel, lang))}">${esc(t(c.ui.language, lang))}</button>
        <a class="btn btn-small hud-cta" href="#contact">${esc(contact ? t(contact.label, lang) : '')}${icon('arrow')}</a>
        <button class="icon-btn menu-btn" id="menu-toggle" type="button" aria-expanded="false" aria-controls="nav" aria-label="${esc(t(c.ui.menuOpen, lang))}">${icon('menu')}</button>
      </div>
    </div>
  </header>`;
}

function hero(c: Content, lang: Lang): string {
  const h = c.hero;
  const name = lang === 'he' ? h.nameHe : h.name;
  return `<section class="hero" id="hero" aria-labelledby="hero-title">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow hud-label"><span class="led" aria-hidden="true"></span>${esc(t(h.eyebrow, lang))}</p>
          <h1 class="hero-name" id="hero-title">${esc(name)}</h1>
          <p class="hero-pitch">${esc(t(h.pitch, lang))}<span class="caret" aria-hidden="true"></span></p>
          <p class="hero-lede">${esc(t(h.lede, lang))}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#projects"><span class="btn-play" aria-hidden="true">▶</span>${esc(t(h.primaryCta, lang))}</a>
            <a class="btn btn-ghost" href="#contact">${esc(t(h.secondaryCta, lang))}${icon('arrow')}</a>
          </div>
        </div>
        <aside class="player-card" aria-label="${esc(t(h.card.title, lang))}">
          <div class="card-top">
            <span class="hud-label">${esc(t(h.card.title, lang))}</span>
            <span class="card-handle">@${esc(h.card.handle)}</span>
          </div>
          <div class="card-avatar">
            <img src="images/avatar.svg" alt="" width="160" height="160" decoding="async">
            <span class="card-level hud-label" aria-hidden="true">LV.19</span>
          </div>
          <p class="card-class">${esc(t(h.card.class, lang))}</p>
          <ul class="stats">
            ${h.card.stats
              .map(
                (s) => `<li>
              <span class="stat-label">${esc(t(s.label, lang))}</span>
              <span class="stat-bar" role="img" aria-label="${esc(t(s.label, lang))}: ${esc(s.value)}"><i style="--fill:${Math.max(0, Math.min(100, s.fill))}%"></i></span>
              <span class="stat-value">${esc(s.value)}</span>
            </li>`,
              )
              .join('\n            ')}
          </ul>
          <p class="card-status"><span class="pulse" aria-hidden="true"></span>${esc(t(h.card.status, lang))}</p>
        </aside>
      </div>
      <a class="scroll-hint" href="#about"><span class="hud-label">${esc(t(c.ui.scrollHint, lang))}</span><span class="scroll-arrow" aria-hidden="true">↓</span></a>
    </section>`;
}

function about(c: Content, lang: Lang): string {
  const a = c.about;
  const term = a.terminal;
  return `<section class="section" id="about" aria-labelledby="about-title">
      ${sectionHead('about', a.index, t(a.heading, lang), t(a.kicker, lang), t(c.ui.sectionLabel, lang))}
      <div class="about-grid">
        <div class="about-body">
          ${a.paragraphs.map((p) => `<p class="reveal">${esc(t(p, lang))}</p>`).join('\n          ')}
        </div>
        <div class="about-side">
          <dl class="facts reveal">
            ${a.facts
              .map(
                (f) => `<div class="fact">
              <dt>${esc(t(f.label, lang))}</dt>
              <dd>${esc(t(f.value, lang))}</dd>
            </div>`,
              )
              .join('\n            ')}
          </dl>
          <div class="terminal reveal" aria-hidden="true">
            <div class="term-bar"><span class="term-leds"><i></i><i></i><i></i></span><span class="term-title">${esc(term.title)}</span></div>
            <pre class="term-body"><code>${term.lines
              .map((line) => `<span class="term-cmd">$ ${esc(line.cmd)}</span>\n<span class="term-out">${esc(t(line.out, lang))}</span>`)
              .join('\n')}
<span class="term-cmd">$ <span class="term-caret"></span></span></code></pre>
          </div>
        </div>
      </div>
    </section>`;
}

function projects(c: Content, lang: Lang): string {
  const s = c.projects;
  return `<section class="section" id="projects" aria-labelledby="projects-title">
      ${sectionHead('projects', s.index, t(s.heading, lang), t(s.kicker, lang), t(c.ui.sectionLabel, lang))}
      <div class="project-list">
        ${s.items.map((p, i) => projectCard(p, lang, t(c.ui.comingSoon, lang), i % 2 === 1)).join('\n        ')}
      </div>
    </section>`;
}

function skills(c: Content, lang: Lang): string {
  const s = c.skills;
  return `<section class="section" id="skills" aria-labelledby="skills-title">
      ${sectionHead('skills', s.index, t(s.heading, lang), t(s.kicker, lang), t(c.ui.sectionLabel, lang))}
      <p class="skills-note reveal">${esc(t(s.note, lang))}</p>
      <div class="skill-grid">
        ${s.groups
          .map(
            (g, i) => `<section class="skill-panel reveal" aria-labelledby="skill-${esc(g.id)}">
          <div class="panel-top">
            <h3 id="skill-${esc(g.id)}" class="hud-label">${esc(t(g.label, lang))}</h3>
            <span class="panel-count" aria-hidden="true">${String(g.items.length).padStart(2, '0')}</span>
          </div>
          <ul class="chips">
            ${g.items.map((item) => `<li class="chip" style="--i:${i}">${esc(item)}</li>`).join('\n            ')}
          </ul>
          <span class="panel-corner" aria-hidden="true"></span>
        </section>`,
          )
          .join('\n        ')}
      </div>
    </section>`;
}

function personal(c: Content, lang: Lang): string {
  const s = c.personal;
  return `<section class="section" id="personal" aria-labelledby="personal-title">
      ${sectionHead('personal', s.index, t(s.heading, lang), t(s.kicker, lang), t(c.ui.sectionLabel, lang))}
      <div class="quest-grid">
        ${s.items
          .map(
            (item) => `<article class="quest reveal">
          <span class="quest-icon">${icon(item.icon)}</span>
          <h3>${esc(t(item.title, lang))}</h3>
          <p>${esc(t(item.text, lang))}</p>
        </article>`,
          )
          .join('\n        ')}
      </div>
    </section>`;
}

function contact(c: Content, lang: Lang): string {
  const s = c.contact;
  const f = s.form;
  return `<section class="section" id="contact" aria-labelledby="contact-title">
      ${sectionHead('contact', s.index, t(s.heading, lang), t(s.kicker, lang), t(c.ui.sectionLabel, lang))}
      <div class="contact-grid">
        <div class="contact-copy reveal">
          <p class="contact-text">${esc(t(s.text, lang))}</p>
          <div class="email-row">
            <a class="email-link" href="mailto:${esc(s.email)}">${icon('mail')}<span>${esc(s.email)}</span></a>
            <button class="icon-btn" type="button" data-copy="${esc(s.email)}" title="${esc(t(c.ui.copyEmail, lang))}" aria-label="${esc(t(c.ui.copyEmail, lang))}">${icon('copy')}</button>
          </div>
          <ul class="social">
            ${s.links
              .map(
                (link) => `<li>
              <a class="social-link" href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">
                <span class="social-icon">${icon(link.icon)}</span>
                <span class="social-text"><b>${esc(link.label)}</b><small>${esc(link.value)}</small></span>
                ${icon('external', 'social-arrow')}
              </a>
            </li>`,
              )
              .join('\n            ')}
          </ul>
        </div>
        <form class="contact-form reveal" id="contact-form" novalidate>
          <h3 class="form-title">${esc(t(f.title, lang))}</h3>
          <p class="form-hint">${esc(t(f.hint, lang))}</p>
          <div class="field">
            <label for="cf-name">${esc(t(f.name, lang))}</label>
            <input id="cf-name" name="name" type="text" required autocomplete="name" placeholder="${esc(t(f.namePlaceholder, lang))}">
          </div>
          <div class="field">
            <label for="cf-email">${esc(t(f.email, lang))}</label>
            <input id="cf-email" name="email" type="email" required autocomplete="email" placeholder="${esc(t(f.emailPlaceholder, lang))}" dir="ltr">
          </div>
          <div class="field">
            <label for="cf-message">${esc(t(f.message, lang))}</label>
            <textarea id="cf-message" name="message" rows="4" required placeholder="${esc(t(f.messagePlaceholder, lang))}"></textarea>
          </div>
          <button class="btn btn-primary form-submit" type="submit">${esc(t(f.submit, lang))}<span class="btn-play" aria-hidden="true">▶</span></button>
          <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>`;
}

function footer(c: Content, lang: Lang): string {
  return `<footer class="footer">
      <div class="footer-inner">
        <p class="footer-built">${icon('code')}<span>${esc(t(c.footer.built, lang))}</span></p>
        <div class="footer-meta">
          <span>${esc(t(c.footer.copyright, lang))}</span>
          <span class="footer-hint">${esc(t(c.footer.hint, lang))}</span>
        </div>
        <a class="to-top" href="#top">${esc(t(c.ui.backToTop, lang))}${icon('up')}</a>
      </div>
    </footer>`;
}

export function renderPage(c: Content, lang: Lang): string {
  return `<a class="skip" href="#main">${esc(t(c.ui.skip, lang))}</a>
  ${header(c, lang)}
  <main id="main">
    ${hero(c, lang)}
    ${about(c, lang)}
    ${projects(c, lang)}
    ${skills(c, lang)}
    ${personal(c, lang)}
    ${contact(c, lang)}
  </main>
  ${footer(c, lang)}`;
}

export function renderHead(c: Content, lang: Lang): string {
  const m = c.meta;
  const title = t(m.title, lang);
  const description = t(m.description, lang);
  const image = new URL(m.ogImage, m.url).href;
  const imageAlt = t(m.ogImageAlt, lang);
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Arnon Hacohen',
    alternateName: 'ארנון הכהן',
    url: m.url,
    image,
    email: `mailto:${c.contact.email}`,
    jobTitle: 'Self-taught Full Stack Developer',
    address: { '@type': 'PostalAddress', addressCountry: 'IL' },
    sameAs: c.contact.links.map((l) => l.url),
    knowsAbout: c.skills.groups.flatMap((g) => g.items),
  };
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    `<meta name="author" content="Arnon Hacohen">`,
    `<meta name="theme-color" content="${esc(m.themeColor)}">`,
    `<link rel="canonical" href="${esc(m.url)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Arnon Hacohen">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${esc(m.url)}">`,
    `<meta property="og:image" content="${esc(image)}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${esc(imageAlt)}">`,
    `<meta property="og:locale" content="${lang === 'he' ? 'he_IL' : 'en_US'}">`,
    `<meta property="og:locale:alternate" content="${lang === 'he' ? 'en_US' : 'he_IL'}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${esc(image)}">`,
    `<meta name="twitter:image:alt" content="${esc(imageAlt)}">`,
    m.twitter ? `<meta name="twitter:creator" content="${esc(m.twitter)}">` : '',
    `<script type="application/ld+json">${JSON.stringify(person).replace(/</g, '\\u003c')}</script>`,
  ];
  return tags.filter(Boolean).join('\n    ');
}