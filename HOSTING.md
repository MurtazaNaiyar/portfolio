# What you need to host this app

## Recommendation: Next.js chat for deployment

**For this portfolio, use the Next.js chat (no FastAPI) when you deploy.**

| | Next.js chat only | FastAPI (Python) chat |
|---|-------------------|------------------------|
| **Deployments** | One (Vercel) | Two (Vercel + Python host) |
| **Config** | Set `NEXT_PUBLIC_SITE_URL` and optional `OPENAI_API_KEY` | Plus API URL, CORS, `PORTFOLIO_CONTEXT_URL`, `NEXT_PUBLIC_CHAT_API_URL` |
| **Ops** | Single place to monitor and update | Two services, two runtimes |
| **Cost** | Vercel free tier | Vercel + Python host (free tier possible but extra setup) |
| **Chat behavior** | Same: keyword fallback + optional OpenAI | Same |

The chat is a small part of the site; keeping one deployment is simpler and enough. Use **FastAPI** only if you want all backend logic in Python for consistency, or plan to add more Python-only features (e.g. custom models, evals) behind the same API.

---

## 1. Host the website (Next.js)

**Recommended: Vercel** (free tier, works well with Next.js)

### Details you need / decisions:

| Item | What to provide / do |
|------|----------------------|
| **GitHub (or GitLab) account** | Push this repo to a GitHub repository so Vercel can import it. |
| **Vercel account** | Sign up at [vercel.com](https://vercel.com) (free). |
| **Domain** | You already have **murtazanaiyar.com**. You’ll connect it in Vercel (see below). |
| **Environment variable** | In Vercel → Project → **Settings → Environment Variables**, add: **`NEXT_PUBLIC_SITE_URL`** = `https://murtazanaiyar.com` (so sitemap, Open Graph, and canonicals use the correct URL). |
| **Optional: Chat without Python** | If you don’t run the Python API, the site uses the built-in Next.js `/api/chat` route. No extra config. |
| **Optional: Richer chat (OpenAI)** | To use GPT for chat answers, add **`OPENAI_API_KEY`** in Vercel with your OpenAI API key. |

### Steps (high level)

1. Push this project to a GitHub repo.
2. In Vercel: **New Project** → Import that repo → Deploy (defaults are fine).
3. After deploy: **Settings → Domains** → Add **murtazanaiyar.com** (and optionally **www.murtazanaiyar.com**).
4. At your **domain registrar** (where you bought murtazanaiyar.com): add the DNS records Vercel shows (usually **A** record `76.76.21.21` for root, or **CNAME** for `www`).
5. Add **`NEXT_PUBLIC_SITE_URL`** = `https://murtazanaiyar.com` in Vercel environment variables and redeploy if needed.

---

## 2. (Optional) Host the Python chat API

Only needed if you want the chat to run on Python instead of the Next.js API route.

### Option A: Same machine / VPS

If you have a VPS (DigitalOcean, Linode, etc.) or a server:

| Item | What to provide / do |
|------|----------------------|
| **Server with Python 3.10+** | e.g. Ubuntu VPS. |
| **Run the API** | `cd python-api && pip install -r requirements.txt && uvicorn main:app --host 0.0.0.0 --port 8000` (or use systemd/gunicorn for production). |
| **Public URL** | The API must be reachable at a URL (e.g. `https://api.murtazanaiyar.com` or a subpath). You’ll need a reverse proxy (e.g. Nginx) and HTTPS (e.g. Let’s Encrypt). |
| **Environment variables** | **`PORTFOLIO_CONTEXT_URL`** = `https://murtazanaiyar.com` (so Python fetches latest context from your site). **`CORS_ORIGINS`** = `https://murtazanaiyar.com` (and `https://www.murtazanaiyar.com` if you use www). Optional: **`OPENAI_API_KEY`** for GPT. |

Then in **Vercel** (for the Next.js app) add: **`NEXT_PUBLIC_CHAT_API_URL`** = your Python API URL (e.g. `https://api.murtazanaiyar.com`). Redeploy the site so the chat widget calls the Python backend.

### Option B: Use only the Next.js chat

You can skip the Python API entirely. The site already has **`/api/chat`** in Next.js. No extra server or URL; just deploy the Next.js app and optionally set **`OPENAI_API_KEY`** in Vercel for better answers.

---

## 3. Content and assets (your details)

Before or after going live, you’ll want to fill these in:

| Item | Where / what |
|------|----------------------|
| **Resume PDF** | Add **`public/resume.pdf`** in the repo (or set **`resumeUrl`** in `src/lib/site-data.ts` to an external URL). |
| **Photo** | Add **`public/photo.jpg`** (e.g. 400×400) for the About page. |
| **Real experience** | In `src/app/experience/page.tsx`, replace “Company Name”, “Previous Company”, “Earlier Role” with real company names and dates. |
| **Real projects** | In `src/app/projects/page.tsx`, add real **`link`** and **`repo`** URLs (and update descriptions if needed). |
| **Chat context** | Keep **`src/lib/portfolio-context.ts`** in sync with your real bio, experience, and projects so the bot answers correctly. |

Links (LinkedIn, GitHub, Twitter, Instagram, YouTube, email) are already in **`src/lib/site-data.ts`**; update them there if any handle or URL changes.

---

## 4. Summary checklist

**Minimum to go live (website only):**

- [ ] Repo pushed to GitHub  
- [ ] Vercel project created and connected to that repo  
- [ ] Domain **murtazanaiyar.com** added in Vercel and DNS updated at registrar  
- [ ] **NEXT_PUBLIC_SITE_URL** = `https://murtazanaiyar.com` set in Vercel  

**Optional but recommended:**

- [ ] **OPENAI_API_KEY** in Vercel (for better chat answers)  
- [ ] **public/resume.pdf** and **public/photo.jpg** added  
- [ ] Experience and projects updated with real names and links  

**Only if you host the Python API:**

- [ ] Python API running at a public URL with **PORTFOLIO_CONTEXT_URL** and **CORS_ORIGINS** set  
- [ ] **NEXT_PUBLIC_CHAT_API_URL** set in Vercel to that API URL  

If you tell me where you’ll host (e.g. “only Vercel” or “Vercel + my own server for Python”), I can give step-by-step commands and exact env vars for that setup.
