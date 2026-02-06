/**
 * Single source of truth for site-wide content and links.
 * Update here; Footer, Contact, Header, and SEO use this.
 */

export const SITE = {
  name: "Murtaza Naiyar",
  role: "GenAI Engineer",
  /** Base URL for canonical and Open Graph. Set in production to https://murtazanaiyar.com */
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://murtazanaiyar.com",
  email: "hello@murtazanaiyar.com",
  /** Resume/CV PDF. Replace with your file (e.g. in /public/resume.pdf) or external link. */
  resumeUrl: "/resume.pdf",
  /** Short line for "Available for" / hire me. */
  availableFor: "Available for consulting and full-time roles in GenAI & ML.",
} as const;

export const CONTACT_LINKS = [
  {
    href: `mailto:${SITE.email}`,
    label: "Email",
    value: SITE.email,
    desc: "Best for project and collaboration inquiries.",
    external: false,
  },
  {
    href: "https://linkedin.com/in/murtazanaiyar",
    label: "LinkedIn",
    value: "linkedin.com/in/murtazanaiyar",
    desc: "Professional profile and experience.",
    external: true,
  },
  {
    href: "https://github.com/murtazanaiyar",
    label: "GitHub",
    value: "github.com/murtazanaiyar",
    desc: "Code, open source, and side projects.",
    external: true,
  },
  {
    href: "https://x.com/MurtazaNaiyar",
    label: "Twitter",
    value: "x.com/MurtazaNaiyar",
    desc: "Twitter / X.",
    external: true,
  },
  {
    href: "https://instagram.com/MurtazaNaiyar",
    label: "Instagram",
    value: "instagram.com/MurtazaNaiyar",
    desc: "Instagram.",
    external: true,
  },
  {
    href: "https://youtube.com/@MurtazaNaiyar",
    label: "YouTube",
    value: "youtube.com/@MurtazaNaiyar",
    desc: "YouTube channel.",
    external: true,
  },
] as const;

/** For Footer compact links (same as Contact, different shape). */
export const FOOTER_LINKS = [
  { href: CONTACT_LINKS[0].href, label: "Email", desc: "Get in touch" },
  { href: CONTACT_LINKS[1].href, label: "LinkedIn", desc: "Professional profile" },
  { href: CONTACT_LINKS[2].href, label: "GitHub", desc: "Code & open source" },
  { href: CONTACT_LINKS[3].href, label: "Twitter", desc: "X" },
  { href: CONTACT_LINKS[4].href, label: "Instagram", desc: "Instagram" },
  { href: CONTACT_LINKS[5].href, label: "YouTube", desc: "YouTube" },
] as const;

/** sameAs for JSON-LD Person (order: LinkedIn, GitHub, Twitter, Instagram, YouTube). */
export const SAME_AS = [
  "https://linkedin.com/in/murtazanaiyar",
  "https://github.com/murtazanaiyar",
  "https://x.com/MurtazaNaiyar",
  "https://instagram.com/MurtazaNaiyar",
  "https://youtube.com/@MurtazaNaiyar",
] as const;
