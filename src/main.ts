import content from './content.json';
import { renderPage, t } from './render.ts';
import type { Content, Lang } from './types.ts';
import './styles/main.css';

const site = content as Content;
const LANG_KEY = 'arnon.lang';
const CRT_KEY = 'arnon.crt';
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const root = document.documentElement;
const app = document.querySelector<HTMLDivElement>('#app');
const toast = document.querySelector<HTMLDivElement>('#toast');

let lang: Lang = root.getAttribute('lang') === 'he' ? 'he' : 'en';
let revealObserver: IntersectionObserver | null = null;
let spyObserver: IntersectionObserver | null = null;
let toastTimer = 0;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function readStored(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode — preference just won't persist */
  }
}

function showToast(message: string): void {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast?.classList.remove('is-visible'), 2600);
}

function paint(): void {
  if (!app) return;
  const scrollY = window.scrollY;
  app.innerHTML = renderPage(site, lang);
  root.lang = lang;
  root.dir = lang === 'he' ? 'rtl' : 'ltr';
  root.classList.remove('lang-pending');
  window.scrollTo({ top: scrollY, behavior: 'instant' as ScrollBehavior });
  observeReveals();
  observeSections();
  syncScrollState();
}

function observeReveals(): void {
  revealObserver?.disconnect();
  const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    nodes.forEach((n) => n.classList.add('is-in'));
    return;
  }
  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObserver?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  for (const n of nodes) {
    const rect = n.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) n.classList.add('is-in');
    else revealObserver.observe(n);
  }
}

function observeSections(): void {
  spyObserver?.disconnect();
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav]'));
  if (!('IntersectionObserver' in window) || links.length === 0) return;
  spyObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = entry.target.id;
        for (const link of links) {
          const active = link.dataset.nav === id;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        }
      }
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
  );
  for (const link of links) {
    const section = document.getElementById(link.dataset.nav ?? '');
    if (section) spyObserver.observe(section);
  }
  const hero = document.getElementById('hero');
  if (hero) spyObserver.observe(hero);
}

let ticking = false;
function syncScrollState(): void {
  const bar = document.querySelector<HTMLElement>('#progress-bar');
  const hud = document.querySelector<HTMLElement>('.hud');
  const fx = document.querySelector<HTMLElement>('.fx');
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  if (bar) bar.style.transform = `scaleX(${ratio})`;
  if (fx && !reduceMotion) fx.style.setProperty('--sy', String(Math.round(Math.min(window.scrollY, 2400))));
  hud?.classList.toggle('is-stuck', window.scrollY > 24);
}

function onScroll(): void {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    syncScrollState();
    ticking = false;
  });
}

function setMenu(open: boolean): void {
  const button = document.querySelector<HTMLButtonElement>('#menu-toggle');
  document.body.classList.toggle('nav-open', open);
  button?.setAttribute('aria-expanded', String(open));
  button?.setAttribute('aria-label', t(open ? site.ui.menuClose : site.ui.menuOpen, lang));
  if (button) button.innerHTML = open ? closeIcon() : menuIcon();
}

function menuIcon(): string {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
}

function closeIcon(): string {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';
}

function setCrt(on: boolean): void {
  document.body.classList.toggle('crt-off', !on);
  const button = document.querySelector<HTMLButtonElement>('#crt-toggle');
  button?.setAttribute('aria-pressed', String(on));
  button?.setAttribute('title', t(on ? site.ui.crtOn : site.ui.crtOff, lang));
  writeStored(CRT_KEY, on ? 'on' : 'off');
}

async function copyText(value: string, button: HTMLElement): Promise<void> {
  let ok = false;
  try {
    await navigator.clipboard.writeText(value);
    ok = true;
  } catch {
    const field = document.createElement('textarea');
    field.value = value;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    field.remove();
  }
  showToast(t(ok ? site.ui.copied : site.ui.copyFailed, lang));
  if (!ok) return;
  const original = button.innerHTML;
  button.classList.add('is-copied');
  button.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4.5 12.5 5 5 10-11"/></svg>';
  window.setTimeout(() => {
    button.classList.remove('is-copied');
    button.innerHTML = original;
  }, 1600);
}

function submitForm(form: HTMLFormElement): void {
  const status = form.querySelector<HTMLParagraphElement>('#form-status');
  const name = form.querySelector<HTMLInputElement>('#cf-name');
  const email = form.querySelector<HTMLInputElement>('#cf-email');
  const message = form.querySelector<HTMLTextAreaElement>('#cf-message');
  if (!status || !name || !email || !message) return;

  const fields = [name, email, message];
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim());
  const valid = [name.value.trim() !== '', emailOk, message.value.trim() !== ''];
  fields.forEach((field, i) => field.classList.toggle('is-invalid', valid[i] !== true));

  if (valid.some((v) => !v)) {
    status.textContent = t(site.contact.form.invalid, lang);
    status.dataset.state = 'error';
    const firstBad = fields[valid.findIndex((v) => !v)];
    firstBad?.focus();
    return;
  }

  const f = site.contact.form;
  const subject = `${t(f.subject, lang)} — ${name.value.trim()}`;
  const body = `${message.value.trim()}\n\n— ${name.value.trim()}\n${email.value.trim()}`;
  const href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = t(f.sending, lang);
  status.dataset.state = 'pending';
  window.location.href = href;
  window.setTimeout(() => {
    status.textContent = t(f.sent, lang);
    status.dataset.state = 'ok';
  }, 1200);
}

function switchLang(): void {
  lang = lang === 'en' ? 'he' : 'en';
  writeStored(LANG_KEY, lang);
  setMenu(false);
  paint();
  document.querySelector<HTMLButtonElement>('#lang-toggle')?.focus();
}

let konamiIndex = 0;
function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    setMenu(false);
    return;
  }
  const expected = KONAMI[konamiIndex];
  if (expected !== undefined && event.key.toLowerCase() === expected.toLowerCase()) {
    konamiIndex += 1;
    if (konamiIndex === KONAMI.length) {
      konamiIndex = 0;
      document.body.classList.toggle('crt-overdrive');
      showToast(t(site.ui.cheat, lang));
    }
  } else {
    konamiIndex = event.key === KONAMI[0] ? 1 : 0;
  }
}

function onClick(event: MouseEvent): void {
  const target = event.target as HTMLElement | null;
  if (!target) return;

  const langButton = target.closest<HTMLButtonElement>('#lang-toggle');
  if (langButton) {
    event.preventDefault();
    switchLang();
    return;
  }

  const crtButton = target.closest<HTMLButtonElement>('#crt-toggle');
  if (crtButton) {
    setCrt(document.body.classList.contains('crt-off'));
    return;
  }

  const menuButton = target.closest<HTMLButtonElement>('#menu-toggle');
  if (menuButton) {
    setMenu(!document.body.classList.contains('nav-open'));
    return;
  }

  const copyButton = target.closest<HTMLElement>('[data-copy]');
  if (copyButton) {
    event.preventDefault();
    void copyText(copyButton.dataset.copy ?? '', copyButton);
    return;
  }

  const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
  if (anchor) {
    setMenu(false);
    return;
  }

  if (document.body.classList.contains('nav-open') && !target.closest('.hud')) setMenu(false);
}

function onSubmit(event: SubmitEvent): void {
  const form = event.target as HTMLFormElement | null;
  if (form?.id !== 'contact-form') return;
  event.preventDefault();
  submitForm(form);
}

function onInput(event: Event): void {
  const field = event.target as HTMLInputElement | HTMLTextAreaElement | null;
  if (field?.classList.contains('is-invalid')) field.classList.remove('is-invalid');
}

function init(): void {
  const stored = readStored(LANG_KEY);
  if (stored === 'en' || stored === 'he') lang = stored;
  else if (navigator.language.toLowerCase().startsWith('he')) lang = 'he';

  paint();
  setCrt(readStored(CRT_KEY) !== 'off');

  document.addEventListener('click', onClick);
  document.addEventListener('submit', onSubmit);
  document.addEventListener('input', onInput);
  document.addEventListener('keydown', onKeydown);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) setMenu(false);
    syncScrollState();
  });
}

init();