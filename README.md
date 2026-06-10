# Glass Partners Website

Next.js marketing site for **Glass Partners** — advisory and operating partner for growing businesses that need execution to match growth.

## Dual domains

| Domain | Behaviour |
|--------|-----------|
| `glasspartners.com.au` | Glass Partners business site |
| `corinneglass.com` | **301 redirect** to `glasspartners.com.au` (except `/corinne` = Corinne Glass personal page) |

Cross-links: **Corinne Glass** in the business header/footer → `corinneglass.com/corinne`; **Glass Partners** always → `glasspartners.com.au`.

`metadataBase` and per-page `alternates.canonical` resolve to the active host. See **`docs/VERCEL-DNS-GLASSPARTNERS.md`** for Vercel + DNS setup (including `.com.au`).

Local testing: add `127.0.0.1 business.localhost` and `127.0.0.1 personal.localhost` to `/etc/hosts`, then open those hosts on port 3000.

## Pages

- **`/`** (business domain) — Glass Partners home.
- **`/corinne`** (on `corinneglass.com`) — Corinne Glass personal home (`app/corinne/page.tsx`).
- **`/about`** — Corinne Glass (add headshot to `public/corinne-glass.png`).

## Environment variables

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_BUSINESS_SITE_URL` — production origin for Glass Partners (default `https://glasspartners.com.au`).
- `NEXT_PUBLIC_PERSONAL_SITE_URL` — production origin for Corinne Glass (default `https://corinneglass.com`).
- `NEXT_PUBLIC_CONTACT_EMAIL` — shown in the contact section and `mailto:` links (default `corinne@corinneglass.com`).
- `NEXT_PUBLIC_CONTACT_CALENDLY_URL` — **Calendly** booking link for “Start a Conversation”, “Enquire About a Performance Reset”, and the Contact strip primary CTA. Default: `https://calendly.com/corinne-corinneglass/30min` (opens in a **new tab**).
- `NEXT_PUBLIC_BROKEN_GLASS_TEST_URL` — full URL to the Broken Glass Test (Google Form). Default in code is `https://forms.gle/DRn1CqWUy7bM2XfR6`; set this in Vercel or `.env.local` to override. CTAs open the form in a **new tab** when the URL is `http(s)`.
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` — Web3Forms **access key** for the homepage newsletter modal (`POST` to `api.web3forms.com`). Create a form at [web3forms.com](https://web3forms.com), copy the key from **Form Setup**, and paste it in `.env.local` (never commit the real value). Also add in Vercel for production.

## Headshot

Place your portrait at:

`public/corinne-glass.png`

See `public/README-IMAGES.txt` for notes.

## Core copy

Editable in `content/site.ts` (and mirrored in `content/COPY.md`).

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push to GitHub and import the repo in [vercel.com](https://vercel.com), or run `vercel` from this directory.
2. Add both domains in **Settings → Domains**: `glasspartners.com.au`, `corinneglass.com` (and `www` variants).
3. Add the env vars above in the Vercel project settings.
4. Configure DNS at your registrar — step-by-step: **`docs/VERCEL-DNS-GLASSPARTNERS.md`**.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
