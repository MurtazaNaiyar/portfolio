# Portfolio website — critical review

A direct, constructive critique of what could be improved.

---

## 1. Content & credibility

- **Placeholder content everywhere**  
  Experience uses “Company Name”, “Previous Company”, “Earlier Role”. Projects have `link: "#"` and `repo: "#"`. For a 10-year GenAI engineer it undermines credibility. Replace with real companies, roles, and at least one real project link (demo or repo).

- **No proof of work**  
  No screenshots, case studies, or metrics (e.g. “reduced latency by X”, “shipped to N users”). One or two concrete outcomes per project or role would help a lot.

- **Footer links are generic**  
  Footer points to `https://github.com` and `https://linkedin.com` instead of your profiles. Easy to miss; fix before going live.

- **No resume / CV**  
  Many recruiters and hiring managers expect a “Download resume” or “View CV”. Adding a PDF link (e.g. on Contact or in the header) would close that gap.

---

## 2. UX & conversion

- **No clear primary action**  
  Hero has “View Projects” and “Get in Touch” with similar weight. Decide the main goal (e.g. “hire me” vs “see my work”) and make one CTA visually primary.

- **Contact is links-only**  
  No form or Calendly. Some visitors prefer “Send a message” or “Book a call” without leaving the site or opening email.

- **Projects feel unfinished**  
  Placeholder “◇” and gradient strips instead of real thumbnails or screenshots make projects look like templates. Even one real image or diagram per project would help.

- **Chat bot has no escape hatch**  
  If the Python API is down or slow, users only see a generic error. A short “Chat unavailable — email me at …” or fallback message would improve trust.

---

## 3. Technical & SEO

- **No per-page or dynamic Open Graph**  
  Layout has one shared `openGraph`; project and experience pages don’t set their own `og:title` / `og:description` / `og:image`. Sharing a project link will show the same generic preview as the homepage.

- **No sitemap or robots.txt**  
  For a live domain, add `sitemap.xml` and a minimal `robots.txt` so search engines can discover and index all pages.

- **No canonical URLs**  
  If the site is served with and without `www`, or from multiple domains, canonicals would avoid duplicate-content issues.

- **Missing JSON-LD**  
  A `Person` (or `ProfilePage`) schema would help search results and rich snippets (name, job title, sameAs links).

---

## 4. Accessibility & performance

- **Reduced motion not respected**  
  Animations (float, fade-in-up, hover scale) run regardless of `prefers-reduced-motion: reduce`. Respecting that preference is better for accessibility.

- **Focus and keyboard**  
  Focus styles exist in CSS; worth checking that the chat panel and all interactive elements are reachable and visible when tabbing (e.g. no trap inside the chat without a way to close it via keyboard).

- **No skip link**  
  “Skip to main content” is helpful for keyboard and screen-reader users, especially with a sticky header.

- **Image content**  
  Project “images” are decorative (gradient + icon). When you add real images, use proper `alt` text and consider loading strategy (e.g. `priority` for above-the-fold, lazy for the rest).

---

## 5. Design & polish

- **No photo of you**  
  About (and optionally the hero) would feel more personal with a professional headshot. Not mandatory but common for senior/lead profiles.

- **Inconsistent link targets**  
  Footer “Get in touch” goes to `/contact`; hero “Get in Touch” too. Good. Footer social links use generic URLs; they should match Contact page (your real LinkedIn/GitHub).

- **Single theme only**  
  Dark theme only. A light theme or system preference (e.g. `prefers-color-scheme`) would suit more users and contexts.

- **Chat widget placement**  
  Fixed bottom-right can overlap content on small screens or when the keyboard is open on mobile. Consider a smaller tap target or position that avoids key UI.

---

## 6. Missing or underused

- **Testimonials / recommendations**  
  Even one short quote from a colleague or manager would add social proof.

- **Blog or writing**  
  You mentioned optional blog in the plan. For a GenAI engineer, a few posts or “Notes” would reinforce expertise and help SEO.

- **Clear “hire me” or “work with me”**  
  If the goal is consulting or full-time, a short section or line (“Available for …”) sets expectations.

- **Error and loading states**  
  No custom 404 or error page; no loading/skeleton for slow navigations. Adding a simple 404 and `loading.tsx` where useful would polish the experience.

---

## Summary (priority order)

| Priority | What to fix |
|----------|-------------|
| **High** | Replace all placeholder experience and project content; fix footer and contact links to real profiles. |
| **High** | Add at least one real project (with link or repo) and a resume/CV link. |
| **Medium** | Per-page meta/OG, sitemap, JSON-LD; respect `prefers-reduced-motion`. |
| **Medium** | Optional: contact form or Calendly; real project images; About photo. |
| **Lower** | Light theme, skip link, custom 404, blog. |

The structure, tech stack, and chat integration are solid. The main gap is **real content and proof**; the rest is incremental polish.
