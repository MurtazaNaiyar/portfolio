# Deploy the portfolio on Vercel (Next.js only)

Follow these steps to get **murtazanaiyar.com** live with only the Next.js app (chat runs on `/api/chat`, no Python).

---

## 1. Push the project to GitHub

If the project isn’t in a GitHub repo yet:

```bash
cd /Users/murtazanaiyar/Profile

# Initialize git if needed
git init

# Add and commit
git add .
git commit -m "Portfolio ready for deploy"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Use your real GitHub username and repo name. If the repo already exists, just push your latest changes.

---

## 2. Import the project in Vercel

1. Go to **[vercel.com](https://vercel.com)** and sign in (GitHub login is easiest).
2. Click **Add New…** → **Project**.
3. **Import** the GitHub repository that contains this project.
4. Leave the defaults:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./`
   - **Build Command:** `next build`
   - **Output Directory:** (default)
5. Click **Deploy**. Wait for the first build to finish.

You’ll get a URL like `your-project.vercel.app`. The site works there; next step is to use your domain.

---

## 3. Connect your domain (murtazanaiyar.com)

1. In Vercel, open your project → **Settings** → **Domains**.
2. Add **murtazanaiyar.com** (and optionally **www.murtazanaiyar.com**).
3. Vercel will show the DNS records you need.
4. At your **domain registrar** (where you bought murtazanaiyar.com):
   - Add the records Vercel shows. Usually:
     - **A** record: name `@`, value `76.76.21.21`
     - **CNAME** (if you use www): name `www`, value `cname.vercel-dns.com`
5. Wait for DNS to propagate (minutes to a few hours). Vercel will show a check when it’s active.

---

## 4. Set environment variables

In Vercel: **Settings** → **Environment Variables**. Add:

| Name | Value | Notes |
|------|--------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://murtazanaiyar.com` | Required for sitemap, Open Graph, canonicals. |

Optional (for better chat answers):

| Name | Value |
|------|--------|
| `OPENAI_API_KEY` | Your OpenAI API key (starts with `sk-...`) |

Do **not** set `NEXT_PUBLIC_CHAT_API_URL` — the app will use the built-in Next.js `/api/chat` route.

After adding or changing variables, go to **Deployments** → … on the latest deployment → **Redeploy** so the new env is applied.

---

## 5. Done

- **Live site:** https://murtazanaiyar.com (after DNS propagates)
- **Chat:** Uses Next.js `/api/chat`; add `OPENAI_API_KEY` for GPT-powered replies
- **Updates:** Push to `main` on GitHub; Vercel will auto-deploy

---

## Optional: add resume and photo

- Put **resume.pdf** in the project as **`public/resume.pdf`**, commit and push (or set `resumeUrl` in `src/lib/site-data.ts` to an external URL).
- Put **photo.jpg** in **`public/photo.jpg`** for the About page headshot.

Then push; the next deploy will include them.
