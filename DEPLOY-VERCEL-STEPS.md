# Deploy to Vercel — Step-by-step (Dashboard)

Your repo is at **https://github.com/MurtazaNaiyar/portfolio**. Follow these steps to go live.

---

## Step 1: Sign in to Vercel

1. Go to **[vercel.com](https://vercel.com)**.
2. Click **Sign Up** or **Log In**.
3. Choose **Continue with GitHub** and authorize Vercel to access your GitHub account.

---

## Step 2: Import the project

1. On the Vercel dashboard, click **Add New…** → **Project**.
2. You should see your GitHub repos. Find **MurtazaNaiyar/portfolio** and click **Import** next to it.
3. On the configure screen:
   - **Project Name:** leave as `portfolio` (or change if you like).
   - **Framework Preset:** Next.js (should be auto-detected).
   - **Root Directory:** leave as `./`.
   - **Build Command:** `next build` (default).
   - **Output Directory:** (default).
   - **Install Command:** `npm install` (default).
4. **Do not** add any environment variables yet. Click **Deploy**.
5. Wait for the build to finish (usually 1–2 minutes). You’ll get a URL like **portfolio-xxx.vercel.app**.

---

## Step 3: Add environment variable (site URL)

1. In your project, go to **Settings** → **Environment Variables**.
2. Add:
   - **Name:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://murtazanaiyar.com`
   - **Environment:** Production (and Preview if you want).
3. Click **Save**.
4. Go to **Deployments** → open the **⋯** menu on the latest deployment → **Redeploy** (so the new variable is used).

---

## Step 4: Connect your domain (murtazanaiyar.com)

1. In the project, go to **Settings** → **Domains**.
2. In **Domain**, type **murtazanaiyar.com** and click **Add**.
3. Vercel will show the DNS records you need.
4. At your **domain registrar** (where you bought murtazanaiyar.com):
   - Add the record Vercel shows. Usually:
     - **A** record: Name `@` (or leave blank), Value **76.76.21.21**
     - If you also want **www**: **CNAME** record: Name `www`, Value **cname.vercel-dns.com**
5. Wait a few minutes (up to 48 hours in rare cases). Vercel will show a check when the domain is active.
6. (Optional) In Vercel Domains, you can set **murtazanaiyar.com** as the primary and redirect **www** to it.

---

## Step 5: Optional — better chat answers (OpenAI)

If you want the portfolio chat to use GPT:

1. **Settings** → **Environment Variables**.
2. Add **Name:** `OPENAI_API_KEY`, **Value:** your OpenAI API key (starts with `sk-...`).
3. **Redeploy** (Deployments → ⋯ → Redeploy).

---

## Done

- **Live site:** https://murtazanaiyar.com (after DNS propagates)
- **Vercel URL:** https://portfolio-xxx.vercel.app (works immediately)
- **Future updates:** Push to the `main` branch on GitHub; Vercel will auto-deploy.

If any step fails or looks different on your screen, say which step and what you see and we can fix it.
