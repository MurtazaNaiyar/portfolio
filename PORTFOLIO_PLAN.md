# Portfolio Website Plan — murtazanaiyar.com

## Overview
- **Domain:** murtazanaiyar.com (already purchased)
- **Role:** AI Engineer, 10 years experience
- **Goal:** Professional portfolio with homepage + additional sections/tabs

---

## 1. Site Structure & Tabs

| Tab/Page | Purpose | Content Ideas |
|----------|---------|---------------|
| **Home** | First impression, who you are | Hero (name, title, one-liner), short bio, key skills, CTA to projects/contact |
| **About** | Deeper story & expertise | Full bio, experience timeline, education, certifications, what you care about (AI, ML, products) |
| **Experience** | Career & roles | Companies, roles, dates, highlights; optional timeline or list view |
| **Projects** | Proof of work | 4–8 standout projects (AI/ML apps, demos, open source) with links, tech stack, outcomes |
| **Skills** | Technical clarity | AI/LLMs, ML frameworks, languages, tools, platforms in a scannable layout |
| **Blog** (optional) | Thought leadership | Articles, notes, or “Building in public” — can add later |
| **Contact** | Reach you | Email, LinkedIn, GitHub, optional contact form or Calendly |

**Suggested nav order:** Home → About → Experience → Projects → Skills → Contact

---

## 2. Tech Stack (Recommended)

- **Framework:** Next.js (React) — good SEO, easy deployment, great for portfolios
- **Styling:** Tailwind CSS — fast, consistent, easy to make it look polished
- **Hosting:** Vercel — free tier, automatic HTTPS, custom domain (murtazanaiyar.com) in a few clicks
- **Content:** Can start with hardcoded content, later move to MDX or CMS if you add a blog

**Alternatives:** Astro (lighter, content-focused) or plain React + Vite if you prefer.

---

## 3. Hosting & Domain (murtazanaiyar.com)

1. **Build** the site (we’ll do this in the repo).
2. **Deploy** to Vercel (connect GitHub repo → auto-deploy on push).
3. **Domain:** In your domain registrar (where you bought murtazanaiyar.com):
   - Add **A record** `76.76.21.21` (Vercel’s IP) for root, **or**
   - Add **CNAME** `cname.vercel-dns.com` for `www` if you use www
4. In **Vercel project → Settings → Domains**, add `murtazanaiyar.com` (and optionally `www.murtazanaiyar.com`). Vercel will guide DNS if needed.

Result: `https://murtazanaiyar.com` (and optionally `https://www.murtazanaiyar.com`) will serve your portfolio.

---

## 4. Implementation Phases

### Phase 1 — Foundation
- [ ] Initialize Next.js + Tailwind project
- [ ] Layout: header (logo + nav), footer, basic typography & colors
- [ ] Routing for: Home, About, Experience, Projects, Skills, Contact

### Phase 2 — Homepage
- [ ] Hero: name, “AI Engineer,” short tagline
- [ ] Bio snippet (2–3 sentences)
- [ ] Key skills (icons or pills)
- [ ] CTA buttons (e.g. View Projects, Contact)

### Phase 3 — Content Pages
- [ ] **About:** Full bio, timeline or narrative, optional photo
- [ ] **Experience:** List or timeline of roles with bullets
- [ ] **Projects:** Cards with title, description, tech, links (demo/GitHub)
- [ ] **Skills:** Grouped by category (AI/LLMs, ML, Languages, Tools)
- [ ] **Contact:** Links + optional form or “Mail me” button

### Phase 4 — Polish & Launch
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] SEO: meta tags, title, description, Open Graph
- [ ] Connect domain (murtazanaiyar.com) on Vercel
- [ ] Test all links and forms

---

## 5. Content You’ll Need (We Can Use Placeholders First)

- **Bio (short & long)** — 2–3 sentences for home, paragraph for About
- **Photo** — optional, for About/Hero
- **Experience:** Company names, roles, dates, 2–4 bullets per role
- **Projects:** Name, 1–2 sentence description, tech stack, live link + repo (if any)
- **Links:** LinkedIn, GitHub, Twitter/X, email
- **Resume:** Optional “Download resume” link (PDF)

We can start with placeholder text and replace with your real content as we go.

---

## 6. Next Step

**Recommended:** Start with **Phase 1** — create the Next.js app, add layout (header/footer), and set up routes for all tabs. Then we’ll fill Home and other pages in order.

If you confirm, next actions will be:
1. Initialize the project (Next.js + Tailwind).
2. Create the layout and navigation.
3. Build the Home page with hero + bio + CTAs.

Reply with **“Let’s implement”** or **“Start with Phase 1”** and we’ll begin. If you want to change tabs (e.g. merge About + Experience, add Blog now), say how you’d like the structure adjusted.
