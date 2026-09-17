import { sql } from "./db";

export interface AboutPageContent {
  heroEyebrow: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  noIndex: boolean;
  noFollow: boolean;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

const DEFAULT_ABOUT: AboutPageContent = {
  heroEyebrow: "About Us",
  heroHeading: "Your Trusted Guide to Thames River Cruise Tickets & London Day Trips",
  heroSubheading:
    "We help travelers navigate Thames River cruise options, secure guaranteed departure times, avoid sold-out sailings, and see Tower Bridge, the Houses of Parliament, and St Paul's Cathedral from the water with licensed local operators.",
  heroImage: "/images/thames-hero.jpg",
  heroImageAlt: "A Thames river cruise boat passing Tower Bridge at golden hour, London",
  content: `<h2>Why We Created Thames River Cruises</h2>
<p>A cruise along the Thames is one of the best ways to see London, but the booking process can be confusing. Between multiple departure piers, operators, and ticket tiers — sightseeing, evening, and afternoon tea cruises — finding the right ticket shouldn't be difficult.</p>
<p>Thames River Cruises is an independent travel portal dedicated to providing clear, transparent comparisons of official river cruise tickets, guaranteed departure times, and guided sightseeing tours in partnership with verified London-based operators.</p>
<h2>How We Curate Thames Cruises & Tickets</h2>
<p>Every cruise and guided experience featured on our site meets rigorous quality, reliability, and safety standards.</p>
<ul>
<li><strong>Guaranteed Departure Times</strong> — Every pre-booked ticket comes with a confirmed sailing time from Westminster, Tower, or Greenwich pier.</li>
<li><strong>Licensed River Operators</strong> — Our featured cruises are run by licensed Thames operators with exceptional traveler ratings.</li>
<li><strong>100% Free 24h Cancellation</strong> — Transparent pricing with flexible 100% free cancellation up to 24 hours before your scheduled departure.</li>
<li><strong>Full River Access</strong> — Tickets covering sightseeing cruises, evening cruises, afternoon tea cruises, and Greenwich round-trips.</li>
</ul>
<h2>Affiliate Transparency</h2>
<p>When you book Thames River cruise tickets or tours through links on our site, we may receive an affiliate commission at no extra cost to you. This enables us to maintain up-to-date, independent travel guides and pricing data for global visitors.</p>
<p>Have questions about cruising the Thames? Get in touch with our team on our <a href="/contact">contact page</a>.</p>`,
  metaTitle: "About Us | Thames River Cruises & London Visitor Guide",
  metaDescription:
    "Learn about Thames River Cruises: our mission, curation standards, and independent guide to the best Thames cruise tickets and London day trips.",
  canonicalUrl: "",
  noIndex: false,
  noFollow: false,
  ogTitle: "About Us | Thames River Cruises & London Visitor Guide",
  ogDescription:
    "Learn about Thames River Cruises: our mission, curation standards, and independent guide to the best Thames cruise tickets and London day trips.",
  ogImage: "/images/thames-hero.jpg",
};

interface LegacyReason {
  title?: string;
  body?: string;
}

function parseLegacyReasons(value: unknown): LegacyReason[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

// Older deploys of this page stored structured fields (intro paragraphs, a
// reasons grid, a disclosure block, etc.) instead of one flowing content
// field. If a row still has that shape and hasn't been resaved through the
// new single rich-text editor yet, stitch it into the same flowing HTML the
// new page expects, instead of silently dropping real admin-authored copy.
function synthesizeLegacyContent(row: any): string {
  const parts: string[] = [];
  const asHtml = (v: unknown) => {
    const s = typeof v === "string" ? v.trim() : "";
    if (!s) return "";
    return /<[a-z][\s\S]*>/i.test(s) ? s : `<p>${s}</p>`;
  };

  if (row.intro_heading) parts.push(`<h2>${row.intro_heading}</h2>`);
  parts.push(asHtml(row.intro_paragraph_1));
  parts.push(asHtml(row.intro_paragraph_2));

  if (row.reasons_heading) parts.push(`<h2>${row.reasons_heading}</h2>`);
  parts.push(asHtml(row.reasons_subheading));
  const reasons = parseLegacyReasons(row.reasons);
  if (reasons.length) {
    const items = reasons
      .filter((r) => r.title || r.body)
      .map((r) => `<li>${r.title ? `<strong>${r.title}</strong>` : ""}${r.title && r.body ? " — " : ""}${r.body || ""}</li>`)
      .join("");
    if (items) parts.push(`<ul>${items}</ul>`);
  }

  if (row.disclosure_heading) parts.push(`<h2>${row.disclosure_heading}</h2>`);
  parts.push(asHtml(row.disclosure_body));
  parts.push(asHtml(row.contact_prompt_html));

  return parts.filter(Boolean).join("\n");
}

function rowToAbout(row: any): AboutPageContent {
  const content = (typeof row.content === "string" && row.content.trim()) || synthesizeLegacyContent(row) || DEFAULT_ABOUT.content;
  return {
    heroEyebrow: row.hero_eyebrow || DEFAULT_ABOUT.heroEyebrow,
    heroHeading: row.hero_heading || DEFAULT_ABOUT.heroHeading,
    heroSubheading: row.hero_subheading || DEFAULT_ABOUT.heroSubheading,
    heroImage: row.hero_image || DEFAULT_ABOUT.heroImage,
    heroImageAlt: row.hero_image_alt || DEFAULT_ABOUT.heroImageAlt,
    content,
    metaTitle: row.meta_title || DEFAULT_ABOUT.metaTitle,
    metaDescription: row.meta_description || DEFAULT_ABOUT.metaDescription,
    canonicalUrl: row.canonical_url || "",
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    ogTitle: row.og_title || DEFAULT_ABOUT.ogTitle,
    ogDescription: row.og_description || DEFAULT_ABOUT.ogDescription,
    ogImage: row.og_image || DEFAULT_ABOUT.ogImage,
  };
}

export async function getAboutPage(): Promise<AboutPageContent> {
  try {
    const rows = await sql`SELECT * FROM about_page WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToAbout(rows[0]) : DEFAULT_ABOUT;
  } catch {
    return DEFAULT_ABOUT;
  }
}

export async function saveAboutPage(data: AboutPageContent): Promise<void> {
  await sql`
    INSERT INTO about_page (
      id, hero_eyebrow, hero_heading, hero_subheading, hero_image, hero_image_alt,
      content, meta_title, meta_description, canonical_url,
      no_index, no_follow, og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroEyebrow}, ${data.heroHeading}, ${data.heroSubheading},
      ${data.heroImage}, ${data.heroImageAlt}, ${data.content || ""},
      ${data.metaTitle || ""}, ${data.metaDescription || ""}, ${data.canonicalUrl || ""},
      ${!!data.noIndex}, ${!!data.noFollow},
      ${data.ogTitle || ""}, ${data.ogDescription || ""}, ${data.ogImage || ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_eyebrow = EXCLUDED.hero_eyebrow,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      content = EXCLUDED.content,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      canonical_url = EXCLUDED.canonical_url,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}

export async function setAboutIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO about_page (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}
