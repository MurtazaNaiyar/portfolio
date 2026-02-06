# Route your deployment to murtazanaiyar.com

Deployment is done. Follow these steps to serve the site at **murtazanaiyar.com**.

---

## Step 1: Add the domain in Vercel

1. Open **[vercel.com](https://vercel.com)** → your **portfolio** project.
2. Go to **Settings** → **Domains**.
3. In **Domain**, type: **murtazanaiyar.com**
4. Click **Add**.
5. Vercel will show the DNS records you need (and whether to use A or CNAME). Keep this page open.

---

## Step 2: Add DNS at your domain registrar

Go to the place where you bought **murtazanaiyar.com** (e.g. Namecheap, GoDaddy, Google Domains, Cloudflare, etc.) and open **DNS** / **Manage DNS** / **DNS settings**.

Add the records Vercel shows. Typically:

| Type  | Name / Host     | Value / Points to      | TTL (optional) |
|-------|-----------------|------------------------|-----------------|
| **A** | `@` (or blank)  | **76.76.21.21**        | 3600 or Auto    |
| **CNAME** | `www`       | **cname.vercel-dns.com** | 3600 or Auto |

- **Root domain (murtazanaiyar.com):** use the **A** record.
- **www (www.murtazanaiyar.com):** use the **CNAME** if you want www to work.  
  If your registrar doesn’t allow CNAME on root, add only the A record for now; you can add www later.

Save the DNS changes.

---

## Step 3: Wait for DNS and SSL

- DNS can take from a few minutes up to 24–48 hours.
- In Vercel **Settings** → **Domains**, the domain will show a status (e.g. “Valid Configuration” or “Pending”).
- When it’s valid, Vercel will issue an SSL certificate and **https://murtazanaiyar.com** will work.

---

## Step 4: (Optional) Redirect www to non-www

In Vercel **Settings** → **Domains**:

- If both **murtazanaiyar.com** and **www.murtazanaiyar.com** are added, you can set **murtazanaiyar.com** as primary so **www** redirects to it.

---

## Checklist

- [ ] Domain **murtazanaiyar.com** added in Vercel (Settings → Domains).
- [ ] **A** record `@` → **76.76.21.21** added at your registrar.
- [ ] (Optional) **CNAME** `www` → **cname.vercel-dns.com** at your registrar.
- [ ] **NEXT_PUBLIC_SITE_URL** = `https://murtazanaiyar.com` in Vercel (Settings → Environment Variables) and project redeployed.

After DNS propagates, your portfolio will be live at **https://murtazanaiyar.com**.
