# Thames River Cruises

An independent travel/ticket-affiliate site for Thames River cruises in London, built with Next.js 14 (App Router), Neon Postgres, and a full admin CMS. This project was scaffolded from the same template family as pena-palace/amsterdam-boat-tours/sagrada-familia-tours/arno-boat-cruise (most recently rebranded once already as versailles-palace-tickets before becoming this site), but runs on its own independent database, credentials, branding, and content — nothing is shared with those sites.

## Stack

- Next.js 14.2.5 (App Router) + TypeScript + Tailwind CSS
- Neon serverless Postgres (raw SQL, no ORM) — falls back to starter content in `/data` if `DATABASE_URL` isn't set
- Admin CMS at `/admin` (Tiptap rich-text editor, Vercel Blob media uploads, role-based user accounts)
- GetYourGuide affiliate links for ticket/tour bookings

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up your own database (do this before anything else)

This project needs its **own** Neon Postgres project — never point it at another site's database.

1. Create a new project at [neon.tech](https://neon.tech).
2. Copy the connection string into `.env` as `DATABASE_URL`.
3. Run the setup script to create every table and seed starter content:

```bash
node scripts/setup-db.mjs
```

The `.env` in this repo already has a `DATABASE_URL` from when this project was Versailles Palace Tickets. If that database was ever seeded (tables already have rows), re-running `node scripts/setup-db.mjs` will heal any row whose content still says "Versailles"/"Palace of Versailles"/"Pena Palace"/"Sintra"/"Colosseum" back to the new Thames River Cruises content — but it will **not** touch a row you've since edited yourself in `/admin` unless it still matches one of those old-brand strings. If you'd rather start completely clean, provision a brand-new Neon project instead and point `DATABASE_URL` at that.

Without `DATABASE_URL` set, the site still runs using the starter content baked into `/data`, but every admin write (saving a cruise, a blog post, etc.) will fail until a real database is connected.

### 3. Configure the rest of `.env`

- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — login for `/admin`. Change these before deploying.
- `ADMIN_SESSION_SECRET` — already generated fresh for this project; keep it secret.
- `GYG_PARTNER_ID` — your GetYourGuide affiliate Partner ID. Until you set a real one, ticket links use a placeholder ID and won't earn commission. Cruise URLs in `/data/tours.json` and the `tours` table also use placeholder GetYourGuide product IDs (`t200001` etc.) — replace them with real listing URLs once you have live Thames cruise products on GetYourGuide, or point them at another affiliate network entirely.
- `BLOB_STORE_ID` / `BLOB_READ_WRITE_TOKEN` — optional, only needed for the admin Media Library's image/video uploads. Create a [Vercel Blob store](https://vercel.com/docs/storage/vercel-blob) to enable it.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` — optional, spam protection on the contact form. Create a [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) site to enable it.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the public site, and [http://localhost:3000/admin](http://localhost:3000/admin) for the CMS.

## What's admin-editable

Every public page's content is editable from `/admin` without touching code: Homepage (hero, gallery, CTAs, theme colors, header/footer), Tours & Tickets (cruise departures/packages), FAQs, Blog posts, About page, Contact page, Privacy Policy, plus site-wide SEO/indexing controls (including the `Thames River Cruise & Boat Tour` focus keyword), redirects, media library, and user accounts with page-level permissions.

## Branding

This site's theme (nautical navy & sky blue), content, logo, and favicon are original to this project — distinct from every other site built off this same template. See `tailwind.config.ts` for the color palette and `app/icon.tsx` / `app/apple-icon.tsx` for the favicon/app icon.

## Images

Photos in `/public/images` are original placeholder artwork generated for this project (no photo-generation or live photo-fetching tool was available when this site was built) — swap them for real Thames River / London landmark photography via the admin Media Library (`/admin` → Media Library) whenever you're ready to go live.
# thames-river
