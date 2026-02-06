# murtazanaiyar.com — Portfolio

Portfolio site for Murtaza Naiyar, GenAI Engineer. Built with Next.js 15 and Tailwind CSS. Deploy via Vercel (see DEPLOY-VERCEL-STEPS.md).

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

## Deploy to Vercel (with murtazanaiyar.com)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo.
3. Deploy (default settings are fine).
4. In Vercel: **Settings → Domains** → Add `murtazanaiyar.com`.
5. At your domain registrar, add the DNS records Vercel shows (usually A record `76.76.21.21` for root, or CNAME for `www`).

## Chat bot (Python backend)

The floating chat can use a **Python API** so all bot logic stays in Python. Optional.

1. Run the Python API: `cd python-api && pip install -r requirements.txt && uvicorn main:app --reload --port 8000`
2. In the project root, create `.env.local` with `NEXT_PUBLIC_CHAT_API_URL=http://localhost:8000`
3. Restart Next.js dev server. The chat will call the Python backend.

Without this, the chat still works via the Next.js `/api/chat` route. See `python-api/README.md` for details.

**Updating what the chat knows:** Edit **`src/lib/portfolio-context.ts`** only. The Next.js chat uses it directly. If you use the Python API, set `PORTFOLIO_CONTEXT_URL` to your site URL so Python fetches this same context from `GET /api/portfolio-context`.

## Content to update

- **Links & site copy:** Edit **`src/lib/site-data.ts`** for name, email, resume URL, LinkedIn/GitHub, and “Available for” line. Footer and Contact use this.
- **Resume:** Add your PDF as **`public/resume.pdf`** (or set `resumeUrl` in `site-data.ts` to an external URL).
- **About photo:** Add **`public/photo.jpg`** (e.g. 400×400) for your headshot; the About page shows it or falls back to initials.
- **About / Experience / Projects:** Replace placeholder text with your real bio, roles, and projects. Projects: add real `link` and `repo` URLs.
- **Production URL:** Set `NEXT_PUBLIC_SITE_URL=https://murtazanaiyar.com` in Vercel (or your host) so sitemap, robots, and Open Graph use the correct base URL.

See `PORTFOLIO_PLAN.md` for the full plan and `CRITIQUE.md` for improvement notes.
