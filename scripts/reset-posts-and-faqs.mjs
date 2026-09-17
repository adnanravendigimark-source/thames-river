import fs from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

function loadEnv() {
  for (const envFile of [".env", ".env.local"]) {
    const envPath = path.join(process.cwd(), envFile);
    if (!fs.existsSync(envPath)) continue;
    for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const idx = trimmed.indexOf("=");
      if (idx === -1) continue;
      const key = trimmed.slice(0, idx).trim();
      let value = trimmed.slice(idx + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      if (!(key in process.env)) process.env[key] = value;
    }
  }
}

loadEnv();

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL not found in .env or .env.local");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);
const dataDir = path.join(process.cwd(), "data");

function readJsonFile(name) {
  const filePath = path.join(dataDir, name);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

async function run() {
  console.log("Clearing old posts and faqs...");
  await sql`DELETE FROM posts`;
  await sql`DELETE FROM faqs`;

  const posts = readJsonFile("posts.json");
  if (posts && posts.length > 0) {
    console.log(`Seeding ${posts.length} posts...`);
    for (let i = 0; i < posts.length; i++) {
      const p = posts[i];
      const date = p.date || (p.publishedAt ? p.publishedAt.slice(0, 10) : new Date().toISOString().slice(0, 10));
      await sql`
        INSERT INTO posts (
          slug, title, meta_title, meta_description, category, excerpt,
          quick_answer, read_time, date, updated_at, image, image_alt, author,
          recommended_tour_id, recommended_tour_after_block, content, sort_order,
          cta_heading, cta_body, cta_button_text, cta_button_href, focus_keyword,
          no_index, no_follow, canonical_url, og_title, og_description, og_image
        ) VALUES (
          ${p.slug}, ${p.title}, ${p.metaTitle || p.title}, ${p.metaDescription || p.excerpt || ""},
          ${p.category || "Visitor Guide"}, ${p.excerpt || ""}, ${p.quickAnswer || ""},
          ${p.readTime || "5 min read"}, ${date}, ${p.updatedAt ? p.updatedAt : null},
          ${p.image || "/images/thames-blog-panorama.jpg"},
          ${p.imageAlt || p.title},
          ${p.author || "Thames Travel Editor"},
          ${p.recommendedTourId || "thames-1-hour-sightseeing-cruise"},
          ${p.recommendedTourAfterBlock ?? null},
          ${JSON.stringify(p.content || "")}::jsonb,
          ${i},
          ${p.ctaHeading || ""},
          ${p.ctaBody || ""},
          ${p.ctaButtonText || ""},
          ${p.ctaButtonHref || ""},
          ${p.focusKeyword || "Thames River Cruise & Boat Tour"},
          ${false},
          ${false},
          ${p.canonicalUrl || ""},
          ${p.ogTitle || p.title},
          ${p.ogDescription || p.excerpt || ""},
          ${p.ogImage || p.image || "/images/thames-blog-panorama.jpg"}
        )
      `;
    }
    console.log("Posts successfully seeded.");
  }

  const faqs = readJsonFile("faqs.json");
  if (faqs && faqs.length > 0) {
    console.log(`Seeding ${faqs.length} FAQs...`);
    for (let i = 0; i < faqs.length; i++) {
      const f = faqs[i];
      await sql`
        INSERT INTO faqs (question, answer, sort_order)
        VALUES (${f.question}, ${f.answer}, ${i})
      `;
    }
    console.log("FAQs successfully seeded.");
  }

  const checkPosts = await sql`SELECT slug, title, image FROM posts`;
  console.log("DB Posts now:", checkPosts);
}

run().catch(console.error);
