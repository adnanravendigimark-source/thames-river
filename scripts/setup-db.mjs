// One-time (and safe-to-re-run) database setup for the admin CMS.
//
// What it does:
//   1. Creates every table the app needs, if they don't already exist.
//   2. If a table is empty, seeds it from the matching file in /data (the
//      real Colosseum Arena Tickets starter content) so the site has
//      real tours/posts/FAQs/homepage copy from the first run.
//
// How to run it:
//   1. Add DATABASE_URL to your .env file
//   2. Run: node scripts/setup-db.mjs

import fs from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadDotEnv();

if (!process.env.DATABASE_URL) {
  console.error(
    "DATABASE_URL is not set. Add it to your .env file, then re-run."
  );
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);
const dataDir = path.join(process.cwd(), "data");

function readJsonFile(name) {
  const filePath = path.join(dataDir, name);
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return null;
  }
}

async function createTables() {
  console.log("Creating tables (if they don't already exist)...");

  await sql`
    CREATE TABLE IF NOT EXISTS tours (
      id TEXT PRIMARY KEY,
      badge TEXT NOT NULL DEFAULT 'self-guided',
      ribbon TEXT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      includes JSONB NOT NULL DEFAULT '[]',
      duration TEXT,
      -- Placeholder rating/review data until this site has real, verified
      -- reviews — shown as UI only, deliberately excluded from JSON-LD
      -- structured data (see app/page.tsx) to avoid a fake-schema penalty.
      rating NUMERIC(2, 1) NOT NULL DEFAULT 4.5,
      reviews INTEGER NOT NULL DEFAULT 0,
      price INTEGER NOT NULL DEFAULT 0,
      original_price INTEGER,
      image TEXT NOT NULL,
      image_alt TEXT NOT NULL DEFAULT '',
      href_path TEXT NOT NULL,
      href_extra TEXT,
      featured BOOLEAN NOT NULL DEFAULT false,
      best_for TEXT NOT NULL DEFAULT '',
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      slug TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      meta_title TEXT NOT NULL DEFAULT '',
      meta_description TEXT NOT NULL DEFAULT '',
      category TEXT NOT NULL DEFAULT 'Guide',
      excerpt TEXT NOT NULL DEFAULT '',
      quick_answer TEXT NOT NULL DEFAULT '',
      read_time TEXT NOT NULL DEFAULT '5 min read',
      date DATE NOT NULL DEFAULT CURRENT_DATE,
      image TEXT NOT NULL,
      image_alt TEXT NOT NULL DEFAULT '',
      recommended_tour_id TEXT NOT NULL DEFAULT '',
      recommended_tour_after_block INTEGER,
      content JSONB NOT NULL DEFAULT '[]',
      no_index BOOLEAN NOT NULL DEFAULT false,
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS faqs (
      id SERIAL PRIMARY KEY,
      question TEXT NOT NULL,
      answer TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS homepage (
      id INTEGER PRIMARY KEY DEFAULT 1,
      hero_badge TEXT NOT NULL DEFAULT '',
      hero_heading TEXT NOT NULL DEFAULT '',
      hero_subheading TEXT NOT NULL DEFAULT '',
      hero_image TEXT NOT NULL DEFAULT '',
      hero_image_alt TEXT NOT NULL DEFAULT '',
      -- Placeholder — same rationale as tours.rating/reviews above.
      rating_value TEXT NOT NULL DEFAULT '',
      rating_count TEXT NOT NULL DEFAULT '',
      show_featured_tour BOOLEAN NOT NULL DEFAULT true,
      featured_tour_id TEXT NOT NULL DEFAULT '',
      featured_badge_label TEXT NOT NULL DEFAULT '',
      featured_urgency_text TEXT NOT NULL DEFAULT '',
      featured_reasons JSONB NOT NULL DEFAULT '[]',
      no_index BOOLEAN NOT NULL DEFAULT false,
      CONSTRAINT homepage_singleton CHECK (id = 1)
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS privacy_policy (
      id INTEGER PRIMARY KEY DEFAULT 1,
      title TEXT NOT NULL DEFAULT 'Privacy Policy',
      last_updated DATE NOT NULL DEFAULT CURRENT_DATE,
      content JSONB NOT NULL DEFAULT '[]',
      no_index BOOLEAN NOT NULL DEFAULT false,
      CONSTRAINT privacy_policy_singleton CHECK (id = 1)
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS about_page (
      id INTEGER PRIMARY KEY DEFAULT 1,
      hero_eyebrow TEXT NOT NULL DEFAULT 'About Us',
      hero_heading TEXT NOT NULL DEFAULT '',
      hero_subheading TEXT NOT NULL DEFAULT '',
      hero_image TEXT NOT NULL DEFAULT '',
      hero_image_alt TEXT NOT NULL DEFAULT '',
      intro_heading TEXT NOT NULL DEFAULT '',
      intro_paragraph_1 TEXT NOT NULL DEFAULT '',
      intro_paragraph_2 TEXT NOT NULL DEFAULT '',
      intro_image TEXT NOT NULL DEFAULT '',
      intro_image_alt TEXT NOT NULL DEFAULT '',
      reasons_heading TEXT NOT NULL DEFAULT '',
      reasons_subheading TEXT NOT NULL DEFAULT '',
      reasons JSONB NOT NULL DEFAULT '[]',
      disclosure_heading TEXT NOT NULL DEFAULT '',
      disclosure_body TEXT NOT NULL DEFAULT '',
      cta_text TEXT NOT NULL DEFAULT '',
      cta_button_label TEXT NOT NULL DEFAULT '',
      meta_title TEXT NOT NULL DEFAULT '',
      meta_description TEXT NOT NULL DEFAULT '',
      canonical_url TEXT NOT NULL DEFAULT '',
      no_index BOOLEAN NOT NULL DEFAULT false,
      no_follow BOOLEAN NOT NULL DEFAULT false,
      og_title TEXT NOT NULL DEFAULT '',
      og_description TEXT NOT NULL DEFAULT '',
      og_image TEXT NOT NULL DEFAULT '',
      CONSTRAINT about_page_singleton CHECK (id = 1)
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS contact_page (
      id INTEGER PRIMARY KEY DEFAULT 1,
      hero_eyebrow TEXT NOT NULL DEFAULT '',
      hero_heading TEXT NOT NULL DEFAULT '',
      hero_subheading TEXT NOT NULL DEFAULT '',
      email TEXT NOT NULL DEFAULT '',
      email_label TEXT NOT NULL DEFAULT 'Email Us Directly',
      email_note TEXT NOT NULL DEFAULT '',
      reasons_heading TEXT NOT NULL DEFAULT '',
      reasons JSONB NOT NULL DEFAULT '[]',
      footer_note TEXT NOT NULL DEFAULT '',
      cta_heading TEXT NOT NULL DEFAULT '',
      cta_button_label TEXT NOT NULL DEFAULT '',
      meta_title TEXT NOT NULL DEFAULT '',
      meta_description TEXT NOT NULL DEFAULT '',
      canonical_url TEXT NOT NULL DEFAULT '',
      no_index BOOLEAN NOT NULL DEFAULT false,
      no_follow BOOLEAN NOT NULL DEFAULT false,
      og_title TEXT NOT NULL DEFAULT '',
      og_description TEXT NOT NULL DEFAULT '',
      og_image TEXT NOT NULL DEFAULT '',
      CONSTRAINT contact_page_singleton CHECK (id = 1)
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS site_settings (
      id INTEGER PRIMARY KEY DEFAULT 1,
      blog_no_index BOOLEAN NOT NULL DEFAULT false,
      blog_no_follow BOOLEAN NOT NULL DEFAULT false,
      blog_meta_title TEXT NOT NULL DEFAULT '',
      blog_meta_description TEXT NOT NULL DEFAULT '',
      blog_canonical_url TEXT NOT NULL DEFAULT '',
      blog_og_title TEXT NOT NULL DEFAULT '',
      blog_og_description TEXT NOT NULL DEFAULT '',
      blog_og_image TEXT NOT NULL DEFAULT '',
      CONSTRAINT site_settings_singleton CHECK (id = 1)
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL,
      pages JSONB NOT NULL DEFAULT '[]',
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  console.log("Tables ready.");
}

async function addSeoColumns() {
  console.log("Ensuring SEO columns exist...");
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS no_follow BOOLEAN NOT NULL DEFAULT false`;
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS canonical_url TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS og_title TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS og_description TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS og_image TEXT NOT NULL DEFAULT ''`;

  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS no_follow BOOLEAN NOT NULL DEFAULT false`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS canonical_url TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS og_title TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS og_description TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS og_image TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS hero_video TEXT NOT NULL DEFAULT ''`;

  await sql`ALTER TABLE privacy_policy ADD COLUMN IF NOT EXISTS no_follow BOOLEAN NOT NULL DEFAULT false`;
  await sql`ALTER TABLE privacy_policy ADD COLUMN IF NOT EXISTS canonical_url TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE privacy_policy ADD COLUMN IF NOT EXISTS og_title TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE privacy_policy ADD COLUMN IF NOT EXISTS og_description TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE privacy_policy ADD COLUMN IF NOT EXISTS og_image TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE privacy_policy ADD COLUMN IF NOT EXISTS meta_title TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE privacy_policy ADD COLUMN IF NOT EXISTS meta_description TEXT NOT NULL DEFAULT ''`;

  await sql`ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS blog_no_index BOOLEAN NOT NULL DEFAULT false`;
  await sql`ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS blog_no_follow BOOLEAN NOT NULL DEFAULT false`;
  await sql`ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS blog_meta_title TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS blog_meta_description TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS blog_canonical_url TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS blog_og_title TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS blog_og_description TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS blog_og_image TEXT NOT NULL DEFAULT ''`;

  await sql`ALTER TABLE tours ADD COLUMN IF NOT EXISTS price_table_column1 TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE tours ADD COLUMN IF NOT EXISTS price_table_feature TEXT NOT NULL DEFAULT ''`;
  // Placeholder rating/review columns — heal them back in for any DB created
  // while this site briefly shipped without them. Real numbers should
  // replace these once the site has actual verified reviews.
  await sql`ALTER TABLE tours ADD COLUMN IF NOT EXISTS rating NUMERIC(2, 1) NOT NULL DEFAULT 4.5`;
  await sql`ALTER TABLE tours ADD COLUMN IF NOT EXISTS reviews INTEGER NOT NULL DEFAULT 0`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS rating_value TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS rating_count TEXT NOT NULL DEFAULT ''`;

  await sql`ALTER TABLE about_page ADD COLUMN IF NOT EXISTS contact_prompt_html TEXT NOT NULL DEFAULT ''`;
  // About page redesign: the page now uses one flowing rich-text "content"
  // field (matching amsterdam/colosseum/arno) instead of the older
  // structured intro/reasons/disclosure/cta columns above. Those old
  // columns are left in place (not dropped) so lib/about.ts can migrate any
  // real admin-authored copy still sitting in them into the new field.
  await sql`ALTER TABLE about_page ADD COLUMN IF NOT EXISTS content TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE contact_page ADD COLUMN IF NOT EXISTS email_label TEXT NOT NULL DEFAULT 'Email Us Directly'`;
  await sql`ALTER TABLE privacy_policy ADD COLUMN IF NOT EXISTS last_updated_label TEXT NOT NULL DEFAULT 'Last updated: '`;
  await sql`ALTER TABLE privacy_policy ADD COLUMN IF NOT EXISTS empty_state_text TEXT NOT NULL DEFAULT E'This page hasn''t been filled in yet.'`;

  await sql`ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS admin_password_hash TEXT`;
  console.log("SEO columns ready.");
}

async function addHomepageCmsColumns() {
  console.log("Ensuring homepage CMS columns exist...");
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS hero_gallery JSONB NOT NULL DEFAULT '[]'`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS hero_features JSONB NOT NULL DEFAULT '[]'`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS hero_cta_primary_text TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS hero_cta_primary_href TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS hero_cta_secondary_text TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS hero_cta_secondary_href TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS meta_title TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS meta_description TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS focus_keyword TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS sections_json JSONB NOT NULL DEFAULT '{}'`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS header_json JSONB NOT NULL DEFAULT '{}'`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS footer_json JSONB NOT NULL DEFAULT '{}'`;
  await sql`ALTER TABLE homepage ADD COLUMN IF NOT EXISTS theme_json JSONB NOT NULL DEFAULT '{}'`;
  console.log("Homepage CMS columns ready.");
}

// The header nav used to have 6 anchor-link items (Dome Climb, Tickets &
// Passes, Highlights, Plan Visit) pointing at homepage sections that are no
// longer part of the page design. The site now uses the same simple 4-link
// nav as every other site in this family: Home, About Us, Blog, Contact.
// If a saved header_json still has the old anchor links baked in, heal it
// back to the new default — but leave everything else about the header
// (logo, CTA button, etc.) exactly as the admin set it, and never touch a
// header that's already on the new nav.
async function healHeaderNavLinks() {
  const rows = await sql`SELECT header_json FROM homepage WHERE id = 1`;
  if (!rows.length) return;
  const raw = rows[0].header_json;
  const header = typeof raw === "string" ? JSON.parse(raw || "{}") : raw || {};
  const navLinks = Array.isArray(header.navLinks) ? header.navLinks : [];
  const hasOldAnchorLinks = navLinks.some(
    (l) => typeof l?.href === "string" && /#(dome-climb|highlights|practical)/.test(l.href)
  );
  if (!hasOldAnchorLinks) {
    console.log("homepage: header nav links already up to date — skipping.");
    return;
  }
  const healed = {
    ...header,
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  };
  await sql`UPDATE homepage SET header_json = ${JSON.stringify(healed)}::jsonb WHERE id = 1`;
  console.log("homepage: healed header nav links to Home / About Us / Blog / Contact.");
}

async function addBlogCmsColumns() {
  console.log("Ensuring blog CMS columns exist...");
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ`;
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS focus_keyword TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS cta_heading TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS cta_body TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS cta_button_text TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS cta_button_href TEXT NOT NULL DEFAULT ''`;
  // The "Author" field on the post editor (lib/posts.ts's `author` column)
  // was never actually created by this script, even though rowToPost()
  // reads it and PostForm.tsx lets admins edit it — every save silently
  // dropped the value (falling back to DEFAULT_AUTHOR on every read) and
  // any code path using the INSERT ... author column (savePost()) would
  // outright fail with "column author does not exist".
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS author TEXT NOT NULL DEFAULT ''`;
  await sql`
    CREATE TABLE IF NOT EXISTS post_redirects (
      old_slug TEXT PRIMARY KEY,
      new_slug TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  console.log("Blog CMS columns ready.");
}

async function addMediaLibraryTable() {
  console.log("Ensuring media_library table exists...");
  await sql`
    CREATE TABLE IF NOT EXISTS media_library (
      id SERIAL PRIMARY KEY,
      url TEXT NOT NULL UNIQUE,
      filename TEXT NOT NULL DEFAULT '',
      content_type TEXT NOT NULL DEFAULT '',
      size_bytes INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  console.log("media_library table ready.");
}

async function seedTours() {
  const tours = readJsonFile("tours.json");
  if (!tours || tours.length === 0) return;

  const [{ count }] = await sql`SELECT COUNT(*)::int AS count FROM tours`;

  if (count > 0) {
    // The tours table already has rows — this is not a fresh install, it's
    // a re-run against a live site. An admin may have deliberately deleted
    // some seed tours (e.g. down to 3 of the original 6). The previous
    // version of this function looped over every seed tour and ran
    // INSERT ... ON CONFLICT (id) DO UPDATE unconditionally: for a tour id
    // that had been deleted, ON CONFLICT never fires (the row no longer
    // exists), so the plain INSERT silently re-created it — resurrecting
    // deleted tours every time this script was re-run for something
    // unrelated (e.g. new blog CMS columns). Only UPDATE tours that still
    // exist (to keep healing stale image paths); never INSERT here, so a
    // deleted tour stays deleted. Matches the "skip if already seeded"
    // pattern used by seedPosts()/seedFaqs() below.
    for (const t of tours) {
      await sql`UPDATE tours SET image = ${t.image}, image_alt = ${t.imageAlt} WHERE id = ${t.id}`;
    }
    console.log(`tours: table already has ${count} row(s) — synced images on existing rows only (no re-inserts, so deleted tours stay deleted).`);
    return;
  }

  for (let i = 0; i < tours.length; i++) {
    const t = tours[i];
    await sql`
      INSERT INTO tours (
        id, badge, ribbon, title, description, includes, duration,
        price, original_price, image, image_alt, href_path,
        href_extra, featured, best_for, sort_order
      ) VALUES (
        ${t.id}, ${t.badge}, ${t.ribbon || null}, ${t.title}, ${t.description},
        ${JSON.stringify(t.includes || [])}::jsonb, ${t.duration || null},
        ${t.price ?? 0}, ${t.originalPrice ?? null},
        ${t.image}, ${t.imageAlt}, ${t.hrefPath || t.href}, ${t.hrefExtra || null},
        ${!!t.featured}, ${t.bestFor || ""}, ${i}
      )
      ON CONFLICT (id) DO NOTHING
    `;
  }
  console.log(`tours: seeded ${tours.length} row(s) into empty table.`);
}

async function seedPosts() {
  const [{ count }] = await sql`SELECT COUNT(*)::int AS count FROM posts`;
  if (count > 0) {
    console.log(`posts: already has ${count} row(s) — skipping seed.`);
    return;
  }
  const posts = readJsonFile("posts.json");
  if (!posts || posts.length === 0) {
    console.log("posts: no data/posts.json to seed from — skipping.");
    return;
  }
  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    // Normalize field names/fallbacks the same way lib/posts.ts does, so
    // this script doesn't hard-crash on a NOT NULL column just because a
    // data/posts.json entry uses an older field name (e.g. coverImage) or
    // omits an optional field (e.g. category, quickAnswer).
    const date = p.date || (p.publishedAt ? p.publishedAt.slice(0, 10) : new Date().toISOString().slice(0, 10));
    await sql`
      INSERT INTO posts (
        slug, title, meta_title, meta_description, category, excerpt,
        quick_answer, read_time, date, image, image_alt,
        recommended_tour_id, recommended_tour_after_block, content, sort_order
      ) VALUES (
        ${p.slug}, ${p.title}, ${p.metaTitle || p.title}, ${p.metaDescription || p.excerpt || ""},
        ${p.category || "Pena Palace Guides"}, ${p.excerpt || ""}, ${p.quickAnswer || ""},
        ${p.readTime || "5 min read"}, ${date}, ${p.image || p.coverImage || ""},
        ${p.imageAlt || p.coverImageAlt || ""},
        ${p.recommendedTourId || ""}, ${p.recommendedTourAfterBlock ?? null},
        ${JSON.stringify(p.content || [])}::jsonb, ${i}
      )
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        meta_title = EXCLUDED.meta_title,
        meta_description = EXCLUDED.meta_description,
        category = EXCLUDED.category,
        excerpt = EXCLUDED.excerpt,
        quick_answer = EXCLUDED.quick_answer,
        read_time = EXCLUDED.read_time,
        date = EXCLUDED.date,
        image = EXCLUDED.image,
        image_alt = EXCLUDED.image_alt,
        recommended_tour_id = EXCLUDED.recommended_tour_id,
        content = EXCLUDED.content
    `;
  }
  console.log(`posts: seeded ${posts.length} row(s).`);
}

async function seedHomepage() {
  const h = readJsonFile("homepage.json");
  if (!h) return;

  await sql`
    UPDATE homepage SET
      hero_badge = ${h.heroBadge || ""},
      hero_heading = ${h.heroHeading || ""},
      hero_subheading = ${h.heroSubheading || ""},
      hero_image = ${h.heroImage || ""},
      hero_image_alt = ${h.heroImageAlt || ""}
    WHERE id = 1
  `;
  console.log("homepage: updated hero copy & image from data/homepage.json.");
}

async function seedFaqs() {
  const [{ count }] = await sql`SELECT COUNT(*)::int AS count FROM faqs`;
  if (count > 0) {
    console.log(`faqs: already has ${count} row(s) — skipping seed.`);
    return;
  }
  const faqs = readJsonFile("faqs.json");
  if (!faqs || faqs.length === 0) {
    console.log("faqs: no data/faqs.json to seed from — skipping.");
    return;
  }
  for (let i = 0; i < faqs.length; i++) {
    const f = faqs[i];
    await sql`
      INSERT INTO faqs (question, answer, sort_order) VALUES (${f.question}, ${f.answer}, ${i})
    `;
  }
  console.log(`faqs: seeded ${faqs.length} row(s).`);
}

async function seedPrivacyPolicy() {
  const rows = await sql`SELECT content FROM privacy_policy WHERE id = 1`;
  const hasUsableContent =
    rows.length > 0 &&
    Array.isArray(rows[0].content) &&
    rows[0].content.some((b) => b && typeof b.text === "string" && b.text.trim());
  if (hasUsableContent) {
    console.log("privacy_policy: already has content — skipping seed.");
    return;
  }
  const p = readJsonFile("privacy-policy.json");
  const today = new Date().toISOString().slice(0, 10);
  if (!p) {
    console.log("privacy_policy: no data/privacy-policy.json to seed from — inserting defaults.");
    await sql`INSERT INTO privacy_policy (id, last_updated) VALUES (1, ${today}) ON CONFLICT (id) DO NOTHING`;
    return;
  }
  // The admin page/editor stores content as ContentBlock[] ({type, text}),
  // not raw {heading, content} pairs - convert data/privacy-policy.json's
  // sections into that shape before inserting. This conversion was missing
  // before, which is why previously-seeded rows had non-empty but useless
  // content: every block's `.text` was undefined, so the page rendered blank.
  const contentBlocks = (p.sections || []).map((s) => ({
    type: "paragraph",
    text: `<h3>${s.heading}</h3><p>${s.content}</p>`,
  }));
  // Row may already exist from an earlier deploy with empty or wrongly
  // shaped content - heal that by filling in title + content on conflict,
  // without touching any other admin-edited fields (SEO, last_updated_label, etc.).
  await sql`
    INSERT INTO privacy_policy (id, title, last_updated, content)
    VALUES (1, ${p.title || "Privacy Policy"}, ${today}, ${JSON.stringify(contentBlocks)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      title = EXCLUDED.title,
      content = EXCLUDED.content
  `;
  console.log("privacy_policy: seeded from data/privacy-policy.json.");
}

async function seedSiteSettings() {
  const rows = await sql`SELECT blog_meta_title FROM site_settings WHERE id = 1`;
  const blogTitle = "Pena Palace Blog | Tickets, Tours, Prices & Tips (2026)";
  const blogDescription =
    "Comprehensive travel and visitor guides for Pena Palace tickets — skip-the-line access, guided tour options, booking strategies, and pricing.";

  const existing = rows[0];
  // This seed previously left leftover Colosseum/Rome blog SEO copy behind
  // (same class of bug as seedContactPage/seedAboutPage above). Heal that
  // specific, provably-wrong case; never touch a row with different, real
  // admin-set copy.
  const looksLikeWrongBrand =
    existing && typeof existing.blog_meta_title === "string" && existing.blog_meta_title.includes("Colosseum");

  if (existing && !looksLikeWrongBrand) {
    console.log("site_settings: already configured — skipping seed.");
    return;
  }

  if (existing) {
    await sql`UPDATE site_settings SET blog_meta_title = ${blogTitle}, blog_meta_description = ${blogDescription} WHERE id = 1`;
    console.log("site_settings: healed mismatched Colosseum blog SEO copy with Pena Palace copy.");
    return;
  }

  await sql`
    INSERT INTO site_settings (id, blog_meta_title, blog_meta_description)
    VALUES (1, ${blogTitle}, ${blogDescription})
    ON CONFLICT (id) DO NOTHING
  `;
  console.log("site_settings: seeded (Blog listing page SEO fields, indexing ON by default).");
}

async function seedAboutPage() {
  const rows = await sql`SELECT content, hero_heading FROM about_page WHERE id = 1`;
  // Matches the DEFAULT_ABOUT content in lib/about.ts (single flowing
  // rich-text page, same design as amsterdam/colosseum/arno).
  const a = {
    heroEyebrow: "About Us",
    heroHeading: "Your Trusted Guide to Pena Palace Tickets & Sintra Visits",
    heroSubheading:
      "We help travelers navigate Pena Palace ticket options, secure guaranteed timed-entry reservations, avoid sold-out slots, and experience Sintra's Romanticist masterpiece with licensed local guides.",
    heroImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Image%20of%20Pena%20Palace%2C%20Sintra%2C%20Portugal.jpg",
    heroImageAlt: "Pena Palace's colorful towers overlooking the Sintra hills at golden hour",
    content: `<h2>Why We Created Pena Palace Tickets</h2>
<p>Visiting Pena Palace is a bucket-list dream for millions of travelers, but the ticket booking process can be confusing. Between limited timed-entry slots, multiple ticket tiers (Park + Palace vs Park Only), and long queues at the box office in peak season, finding the right ticket shouldn't be difficult.</p>
<p>Pena Palace Tickets is an independent travel portal dedicated to providing clear, transparent comparisons of official fast-track tickets, guaranteed timed-entry access, and licensed guide-led tours in partnership with verified Portuguese providers.</p>
<h2>How We Curate Sintra Tours & Tickets</h2>
<p>Every ticket and guided experience featured on our site meets rigorous quality, reliability, and security standards.</p>
<ul>
<li><strong>Guaranteed Timed Palace Entry</strong> — Every pre-booked ticket comes with an official timed reservation to explore the Palace interior without sold-out risk.</li>
<li><strong>Licensed Local Guides</strong> — Our featured guided tours are led by certified Portuguese guides with exceptional traveler ratings.</li>
<li><strong>100% Free 24h Cancellation</strong> — Transparent pricing with flexible 100% free cancellation up to 24 hours before your scheduled entry time.</li>
<li><strong>Complete Park & Palace Access</strong> — Tickets covering the Palace interior, Pena Park's gardens, and the Chalet of the Countess d'Edla.</li>
</ul>
<h2>Affiliate Transparency</h2>
<p>When you book Pena Palace tickets or tours through links on our site, we may receive an affiliate commission at no extra cost to you. This enables us to maintain up-to-date, independent travel guides and pricing data for global visitors.</p>
<p>Have questions about visiting Pena Palace? Get in touch with our team on our <a href="/contact">contact page</a>.</p>`,
    metaTitle: "About Us | Pena Palace Tickets & Sintra Visitor Guide",
    metaDescription:
      "Learn about Pena Palace Tickets: our mission, curation standards, and independent guide to the best Pena Palace passes and Sintra day trips.",
  };
  const existing = rows[0];
  const hasRealContent = existing && typeof existing.content === "string" && existing.content.trim().length > 0;
  // A leftover bug in an earlier version of this script seeded About pages
  // with Colosseum Arena Entry copy instead of Florence copy. Heal that
  // specific, provably-wrong case automatically; otherwise never touch a
  // row that already has real content (an admin may have edited it).
  const looksLikeWrongBrand =
    existing && typeof existing.hero_heading === "string" && existing.hero_heading.includes("Colosseum");

  if (existing && hasRealContent && !looksLikeWrongBrand) {
    console.log("about_page: already configured — skipping seed.");
    return;
  }

  if (existing) {
    await sql`
      UPDATE about_page SET
        hero_eyebrow = ${a.heroEyebrow},
        hero_heading = ${a.heroHeading},
        hero_subheading = ${a.heroSubheading},
        hero_image = ${a.heroImage},
        hero_image_alt = ${a.heroImageAlt},
        content = ${a.content},
        meta_title = ${a.metaTitle},
        meta_description = ${a.metaDescription}
      WHERE id = 1
    `;
    console.log("about_page: healed mismatched/empty content with Pena Palace About page copy.");
    return;
  }

  await sql`
    INSERT INTO about_page (
      id, hero_eyebrow, hero_heading, hero_subheading, hero_image, hero_image_alt,
      content, meta_title, meta_description
    ) VALUES (
      1, ${a.heroEyebrow}, ${a.heroHeading}, ${a.heroSubheading}, ${a.heroImage}, ${a.heroImageAlt},
      ${a.content}, ${a.metaTitle}, ${a.metaDescription}
    )
    ON CONFLICT (id) DO NOTHING
  `;
  console.log("about_page: seeded with About page copy.");
}

async function seedContactPage() {
  const rows = await sql`SELECT hero_heading, email FROM contact_page WHERE id = 1`;
  // Matches DEFAULT_CONTACT in lib/contact.ts (already correctly Pena
  // Palace-branded — this seed previously still had leftover Colosseum
  // Arena Entry copy, including a support@colosseumarenaentry.com email
  // address, which is what a fresh install — or a row still carrying that
  // copy — would show live. Heal that specific, provably-wrong case
  // automatically; never touch a row that already has different, real
  // admin content.
  const reasons = [
    { icon: "HeadsetIcon", title: "Ticket Selection Advice", body: "Need help choosing between the Park + Palace ticket, Park Only ticket, or a licensed guide-led tour? Ask our Sintra specialists." },
    { icon: "BriefcaseIcon", title: "Partnerships & Operators", body: "Licensed Portuguese tour operators, tourism authorities, and travel publishers — reach out regarding listings and collaborations." },
    { icon: "MailIcon", title: "General Inquiries", body: "Feedback, visitor tips, accessibility questions, or editorial suggestions for our Pena Palace guides." },
  ];
  const c = {
    heroEyebrow: "Contact Us",
    heroHeading: "Get in Touch with Our Sintra Travel Team",
    heroSubheading:
      "Questions about booking Pena Palace tickets, timed-entry slots, guided tour options, or partnership inquiries? Reach out to our team directly.",
    email: "livetravelpartner@gmail.com",
    emailNote: "We typically respond within 1–2 business days.",
    reasonsHeading: "How We Can Help",
    footerNote:
      "Already booked? Please refer to your confirmation voucher to contact your tour provider directly for real-time meeting point directions or schedule changes.",
    ctaHeading: "Ready to reserve your Pena Palace tickets?",
    ctaButtonLabel: "Compare Pena Palace Tickets & Tours",
    metaTitle: "Contact Us | Pena Palace Tickets",
    metaDescription:
      "Questions about Pena Palace tickets, timed-entry passes, or visiting Sintra? Contact the Pena Palace Tickets team.",
  };

  const existing = rows[0];
  const looksLikeWrongBrand =
    existing && typeof existing.hero_heading === "string" && existing.hero_heading.includes("Rome");
  // The contact email is standardized to livetravelpartner@gmail.com across
  // every site in this family. Heal it on its own — regardless of the
  // wrong-brand check above — so a row with otherwise-correct Florence copy
  // but a stale support@ address still gets the right email.
  const emailNeedsHealing = existing && existing.email !== c.email;

  if (existing && !looksLikeWrongBrand && !emailNeedsHealing) {
    console.log("contact_page: already configured — skipping seed.");
    return;
  }

  if (existing && !looksLikeWrongBrand && emailNeedsHealing) {
    await sql`UPDATE contact_page SET email = ${c.email} WHERE id = 1`;
    console.log("contact_page: updated contact email to livetravelpartner@gmail.com.");
    return;
  }

  if (existing) {
    await sql`
      UPDATE contact_page SET
        hero_eyebrow = ${c.heroEyebrow},
        hero_heading = ${c.heroHeading},
        hero_subheading = ${c.heroSubheading},
        email = ${c.email},
        email_note = ${c.emailNote},
        reasons_heading = ${c.reasonsHeading},
        reasons = ${JSON.stringify(reasons)}::jsonb,
        footer_note = ${c.footerNote},
        cta_heading = ${c.ctaHeading},
        cta_button_label = ${c.ctaButtonLabel},
        meta_title = ${c.metaTitle},
        meta_description = ${c.metaDescription}
      WHERE id = 1
    `;
    console.log("contact_page: healed mismatched Colosseum/Rome copy with Pena Palace Contact page copy.");
    return;
  }

  await sql`
    INSERT INTO contact_page (
      id, hero_eyebrow, hero_heading, hero_subheading, email, email_note,
      reasons_heading, reasons, footer_note, cta_heading, cta_button_label,
      meta_title, meta_description
    ) VALUES (
      1, ${c.heroEyebrow}, ${c.heroHeading}, ${c.heroSubheading}, ${c.email}, ${c.emailNote},
      ${c.reasonsHeading}, ${JSON.stringify(reasons)}::jsonb, ${c.footerNote}, ${c.ctaHeading}, ${c.ctaButtonLabel},
      ${c.metaTitle}, ${c.metaDescription}
    )
    ON CONFLICT (id) DO NOTHING
  `;
  console.log("contact_page: seeded with Contact page copy.");
}

async function main() {
  await createTables();
  await addSeoColumns();
  await addHomepageCmsColumns();
  await healHeaderNavLinks();
  await addBlogCmsColumns();
  await addMediaLibraryTable();
  await seedTours();
  await seedPosts();
  await seedHomepage();
  await seedFaqs();
  await seedPrivacyPolicy();
  await seedSiteSettings();
  await seedAboutPage();
  await seedContactPage();
  console.log("\nDone. Pena Palace Tickets database is ready.");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("\nSetup failed:", err);
    process.exit(1);
  });
