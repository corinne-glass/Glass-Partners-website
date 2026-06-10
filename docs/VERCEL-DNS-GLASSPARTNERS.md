# Vercel + DNS: glasspartners.com.au

One Vercel project serves **both** domains. Middleware picks the home page from the `Host` header.

| Domain | Home |
|--------|------|
| `glasspartners.com.au` | Business (`/`) |
| `corinneglass.com` | Personal (rewritten from `/` → `/personal`) |

---

## 1. Deploy on Vercel

1. Push this repo to GitHub (if not already).
2. [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset: **Next.js**. Root directory: repo root.
4. **Environment variables** (Production + Preview): copy from `.env.example`, including:
   - `NEXT_PUBLIC_BUSINESS_SITE_URL=https://glasspartners.com.au`
   - `NEXT_PUBLIC_PERSONAL_SITE_URL=https://corinneglass.com`
   - Contact, Calendly, Broken Glass Test, Web3Forms keys as needed.
5. Deploy. Note the default `*.vercel.app` URL for smoke tests.

---

## 2. Add both domains in Vercel

**Project → Settings → Domains**

1. Add `glasspartners.com.au`
2. Add `www.glasspartners.com.au` (recommended; set redirect apex → www or www → apex in Vercel UI)
3. Add `corinneglass.com`
4. Add `www.corinneglass.com` (same redirect preference)

Vercel shows **Invalid Configuration** until DNS records exist. Expand each domain for the exact records.

---

## 3. DNS at your .com.au registrar

Use the records Vercel displays. Typical setup:

### Apex `glasspartners.com.au`

Many Australian registrars do **not** support ALIAS/ANAME on the naked domain. Common options:

**Option A — Vercel nameservers (simplest)**  
At the registrar, change nameservers to Vercel’s (shown under Domains). Vercel then manages apex + www.

**Option B — Apex A record (if registrar supports it)**  
| Type | Name | Value |
|------|------|--------|
| A | `@` | `76.76.21.21` |

(Vercel may show a different IP — always use the value in your Vercel Domains panel.)

**Option C — Registrar redirect**  
Point `www.glasspartners.com.au` to Vercel (CNAME below) and configure the registrar to **redirect** `glasspartners.com.au` → `https://www.glasspartners.com.au`.

### `www.glasspartners.com.au`

| Type | Name | Value |
|------|------|--------|
| CNAME | `www` | `cname.vercel-dns.com` |

(Again, use the CNAME target shown in Vercel — it can differ per team.)

### Email / other records

Do **not** delete existing MX/TXT records for Google Workspace or SPF/DKIM. Add only what Vercel needs for the website.

---

## 4. DNS for corinneglass.com

Same project, separate domain in Vercel:

| Type | Name | Value |
|------|------|--------|
| A | `@` | `76.76.21.21` (or registrar redirect to www) |
| CNAME | `www` | `cname.vercel-dns.com` |

If the domain is on Cloudflare, set the proxy to **DNS only** (grey cloud) while verifying, or ensure SSL mode is **Full**.

---

## 5. SSL and verification

- DNS propagation: minutes to 48 hours (`.com.au` is often fast).
- Vercel issues certificates automatically when DNS resolves.
- Domains panel should show **Valid Configuration** and a green check.

---

## 6. Smoke tests

| URL | Expected |
|-----|----------|
| `https://glasspartners.com.au/` | Glass Partners home, header link “Corinne Glass” → corinneglass.com |
| `https://corinneglass.com/` | Personal home (dark layout), “Glass Partners →” in header |
| `https://glasspartners.com.au/about` | About page; canonical uses business origin |
| `https://corinneglass.com/speaking` | Speaking page; `metadataBase` is corinneglass.com |

View canonical tags: page source or browser devtools → `<link rel="canonical" …>`.

---

## 7. Local dual-domain testing

Add to `/etc/hosts`:

```
127.0.0.1 business.localhost
127.0.0.1 personal.localhost
```

```bash
npm run dev
```

- [http://business.localhost:3000](http://business.localhost:3000) — business home  
- [http://personal.localhost:3000](http://personal.localhost:3000) — personal home  

---

## 8. Troubleshooting

| Symptom | Fix |
|---------|-----|
| Wrong home on a domain | Confirm domain is on **this** Vercel project; check `Host` in middleware (`lib/domains.ts`). |
| SSL pending | Wait for DNS; confirm no conflicting old A records. |
| www works, apex does not | Add apex A or use registrar redirect to www. |
| Old site still showing | Lower TTL before cutover; flush DNS cache. |
