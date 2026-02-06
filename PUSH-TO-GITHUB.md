# Push this project to GitHub (MurtazaNaiyar)

## Step 1: Create the repository on GitHub

1. Go to **[github.com/new](https://github.com/new)** (or click **+** → **New repository**).
2. **Repository name:** `portfolio`  
   (Clear, short, and common for personal sites. Alternative: `murtazanaiyar-website`.)
3. **Description (optional):** `Personal portfolio — murtazanaiyar.com`
4. Choose **Public**.
5. **Do not** add a README, .gitignore, or license (this project already has them).
6. Click **Create repository**.

---

## Step 2: Push from your machine

Run these in your terminal from the project folder:

```bash
cd /Users/murtazanaiyar/Profile

# Initialize git (if not already)
git init

# Add everything ( .gitignore will exclude node_modules, .next, etc. )
git add .
git commit -m "Portfolio: Next.js site for murtazanaiyar.com"

# Add your GitHub repo as remote (use the repo name you chose in Step 1)
git remote add origin https://github.com/MurtazaNaiyar/portfolio.git

# Push to main
git branch -M main
git push -u origin main
```

If you used a different repo name (e.g. `murtazanaiyar-website`), replace `portfolio` in the `git remote add` URL:

```bash
git remote add origin https://github.com/MurtazaNaiyar/YOUR_REPO_NAME.git
```

---

## Step 3: Verify

Open **https://github.com/MurtazaNaiyar/portfolio** (or your repo name). You should see the project files. You can then connect this repo to Vercel (see **DEPLOY-VERCEL.md**).

---

## If you already have a repo with a different name

Create the repo on GitHub with the name you want, then use that name in the remote URL:

```bash
git remote add origin https://github.com/MurtazaNaiyar/<your-repo-name>.git
```
