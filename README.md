# murtazanaiyar.com — Portfolio

Portfolio site for Murtaza Naiyar, GenAI Engineer. Built with Next.js 15 and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Deploy & domain

- **Deploy:** Push to GitHub and connect the repo in [Vercel](https://vercel.com). Vercel builds on every push to `main`. Set env `NEXT_PUBLIC_SITE_URL=https://murtazanaiyar.com` (and optionally `OPENAI_API_KEY` for chat).
- **Domain:** In Vercel, add your domain (e.g. murtazanaiyar.com) and follow the DNS instructions (A record or CNAME). DNS can take a few minutes to propagate.

## Chat bot

The floating chat uses the Next.js **`/api/chat`** route. To change what the bot knows, edit **`src/lib/portfolio-context.ts`**. Optional: set `OPENAI_API_KEY` in `.env.local` for richer answers.

## Content to update

- **Links & site copy:** Edit **`src/lib/site-data.ts`** for name, email, resume URL, social links, “Available for” line, and home-page tagline/skills/highlights. Footer, Contact, and Home use this.
- **Experience, Projects, Skills:** Edit **`src/lib/portfolio-content.ts`** for roles, companies, projects (with real `link` and `repo` when ready), and skill groups. One file for all three pages.
- **Resume:** Add your PDF as **`public/resume.pdf`** (or set `resumeUrl` in `site-data.ts` to an external URL).
- **About photo:** Add **`public/photo.jpg`** (e.g. 400×400) for your headshot; the About page shows it or falls back to initials.
- **About page bio:** Edit the paragraph content in **`src/app/about/page.tsx`** for your real bio.
- **Production URL:** Set `NEXT_PUBLIC_SITE_URL=https://murtazanaiyar.com` in Vercel (or your host) so sitemap, robots, and Open Graph use the correct base URL.

See **PORTFOLIO_PLAN.md** for the original plan.
