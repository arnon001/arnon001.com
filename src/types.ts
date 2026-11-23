export type Lang = 'en' | 'he';

export interface L {
  en: string;
  he: string;
}

export interface Meta {
  title: L;
  description: L;
  url: string;
  ogImage: string;
  ogImageAlt: L;
  themeColor: string;
  twitter: string;
}

export interface Ui {
  skip: L;
  language: L;
  languageLabel: L;
  menuOpen: L;
  menuClose: L;
  crtOn: L;
  crtOff: L;
  crtLabel: L;
  comingSoon: L;
  scrollHint: L;
  copyEmail: L;
  copied: L;
  copyFailed: L;
  backToTop: L;
  cheat: L;
  sectionLabel: L;
}

export interface NavLink {
  id: string;
  label: L;
}

export interface Stat {
  label: L;
  value: string;
  fill: number;
}

export interface HeroCard {
  title: L;
  handle: string;
  class: L;
  stats: Stat[];
  status: L;
}

export interface Hero {
  eyebrow: L;
  name: string;
  nameHe: string;
  pitch: L;
  lede: L;
  primaryCta: L;
  secondaryCta: L;
  card: HeroCard;
}

export interface Fact {
  label: L;
  value: L;
}

export interface TerminalLine {
  cmd: string;
  out: L;
}

export interface Terminal {
  title: string;
  lines: TerminalLine[];
}

export interface About {
  index: string;
  heading: L;
  kicker: L;
  paragraphs: L[];
  facts: Fact[];
  terminal: Terminal;
}

export type LinkKind = 'story' | 'source' | 'live';

export interface ProjectLink {
  label: L;
  url: string;
  kind: LinkKind;
  pending?: boolean;
}

export interface Media {
  src: string;
  alt: L;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  index: string;
  title: L;
  tagline: L;
  status: L;
  year: string;
  summary: L;
  detail: L;
  tech: string[];
  media: Media;
  links: ProjectLink[];
}

export interface ProjectsSection {
  index: string;
  heading: L;
  kicker: L;
  items: Project[];
}

export interface SkillGroup {
  id: string;
  label: L;
  items: string[];
}

export interface SkillsSection {
  index: string;
  heading: L;
  kicker: L;
  note: L;
  groups: SkillGroup[];
}

export type PersonalIcon = 'ball' | 'plane' | 'gamepad';

export interface PersonalItem {
  icon: PersonalIcon;
  title: L;
  text: L;
}

export interface PersonalSection {
  index: string;
  heading: L;
  kicker: L;
  items: PersonalItem[];
}

export type ContactIcon = 'github' | 'linkedin';

export interface ContactLink {
  icon: ContactIcon;
  label: string;
  value: string;
  url: string;
}

export interface ContactForm {
  title: L;
  hint: L;
  name: L;
  namePlaceholder: L;
  email: L;
  emailPlaceholder: L;
  message: L;
  messagePlaceholder: L;
  submit: L;
  subject: L;
  sending: L;
  sent: L;
  invalid: L;
}

export interface ContactSection {
  index: string;
  heading: L;
  kicker: L;
  text: L;
  email: string;
  links: ContactLink[];
  form: ContactForm;
}

export interface Footer {
  built: L;
  copyright: L;
  hint: L;
}

export interface Content {
  meta: Meta;
  ui: Ui;
  nav: NavLink[];
  hero: Hero;
  about: About;
  projects: ProjectsSection;
  skills: SkillsSection;
  personal: PersonalSection;
  contact: ContactSection;
  footer: Footer;
}