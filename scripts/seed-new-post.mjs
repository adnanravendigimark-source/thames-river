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
    if ((value.startsWith("\"") && value.endsWith("\"")) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}
loadDotEnv();

const sql = neon(process.env.DATABASE_URL);

const articleContent = `<p>Knowing the key <strong>Thames river cruise departure piers</strong> across central London is the secret to a smooth river sightseeing day. While the River Thames flows right through historic London, embarkation piers are spread across several distinct riverside zones, from Big Ben to maritime Greenwich.</p><p>Heading to the wrong pier can leave you rushing across bridges or missing your scheduled boat. Whether your ticket specifies Westminster, the London Eye, Tower Pier, or Greenwich, this guide covers every primary Thames river cruise boarding location, nearby Tube stations, and practical tips. If you are comparing ticket styles before choosing your pier, explore our <a href="/blog/thames-cruise-tickets-price-comparison-2026" class="text-blue-600 hover:underline">Thames cruise ticket price comparison</a> or read our guide on <a href="/blog/how-to-book-thames-river-cruise-tickets-online" class="text-blue-600 hover:underline">how to book Thames cruise tickets online</a>.</p><h2>1. Westminster Millennium Pier (Beside Big Ben &amp; Parliament)</h2><p>Situated at the foot of Westminster Bridge on Victoria Embankment, <strong>Westminster Millennium Pier</strong> is the busiest boarding point on the River Thames.</p><figure><img src="https://qzbrxyxejappdiin.public.blob.vercel-storage.com/uploads/1792049159171-j9hx35-westminster-millennium-pier-london-3myUscSVUfYz0p1v7CtDKwrHKDA0Vh.jpg" alt="Passengers boarding a Thames river cruise boat at Westminster Millennium Pier with Big Ben and Parliament in London" /><figcaption>Westminster Millennium Pier sits right beside Westminster Bridge, directly opposite Big Ben and the Houses of Parliament.</figcaption></figure><h3>Why Depart From Westminster?</h3><p>Westminster is the quintessential starting point for London visitors. From the floating pontoon, you enjoy an unbeatable view of the Elizabeth Tower (Big Ben) and Parliament.</p><ul><li><strong>Popular routes:</strong> 40- to 60-minute circular sightseeing loops returning to Westminster, or one-way voyages downriver to Tower Pier and Greenwich.</li><li><strong>How to get there:</strong> Take the Underground to <strong>Westminster Station</strong> (Jubilee, District, and Circle lines). Exit 1 or 2 is just 50 metres from the pier steps.</li><li><strong>Nearby landmarks:</strong> Westminster Abbey, Parliament Square, and Whitehall.</li></ul><h2>2. London Eye Pier (Waterloo &amp; South Bank)</h2><p>Located on the South Bank directly beneath the observation wheel, <strong>London Eye Pier</strong> (Waterloo Millennium Pier) is a vibrant departure spot in the middle of London's cultural district.</p><ul><li><strong>Best for:</strong> Sightseers pairing a river cruise with a flight on the London Eye or exploring the Southbank Centre.</li><li><strong>Route highlights:</strong> Boats sail east past Shakespeare's Globe, Tate Modern, and St Paul's Cathedral toward Tower Bridge.</li><li><strong>How to get there:</strong> A 5-minute walk from <strong>Waterloo Station</strong> (Bakerloo, Northern, Jubilee lines) or across the Golden Jubilee Bridges from Charing Cross.</li></ul><h2>3. Tower Millennium Pier (Beside Tower Bridge &amp; Tower of London)</h2><p>If you want to board in the historic City of London, <strong>Tower Millennium Pier</strong> offers a dramatic river approach.</p><figure><img src="https://qzbrxyxejappdiin.public.blob.vercel-storage.com/uploads/1792049160516-pjtcbs-tower-millennium-pier-tower-bridge-eZwxRUjny9aDkJHiUem7rhweZlH4dt.jpg" alt="Thames sightseeing boat embarking passengers at Tower Millennium Pier with Tower Bridge stretching across the river" /><figcaption>Tower Millennium Pier offers immediate access to the Tower of London and stunning close-up views of Tower Bridge.</figcaption></figure><h3>Boarding by Tower Bridge</h3><p>Tower Pier sits immediately adjacent to the ancient stone walls of the Tower of London. Boarding here lets you sail directly beneath the twin gothic towers of Tower Bridge within seconds of leaving the dock.</p><ul><li><strong>Best for:</strong> Travellers finishing a morning visit to the Crown Jewels wanting a river cruise back to Westminster or toward Greenwich.</li><li><strong>How to get there:</strong> Underground to <strong>Tower Hill Station</strong> (District and Circle lines, 5-minute walk) or Tower Gateway DLR.</li><li><strong>Atmosphere:</strong> Energetic and scenic, with wide viewing platforms and electronic boarding boards.</li></ul><h2>4. Greenwich Pier (Cutty Sark &amp; Royal Naval College)</h2><p>Located roughly six miles downriver from Westminster, <strong>Greenwich Pier</strong> is the gateway to London's UNESCO maritime quarter.</p><figure><img src="https://qzbrxyxejappdiin.public.blob.vercel-storage.com/uploads/1792049161805-jnsvcj-greenwich-pier-cutty-sark-dock-QQn5Q9xvAG7qUBVV7ATPRZjFEHNxmr.jpg" alt="Thames river cruise vessel docked at Greenwich Pier with the Cutty Sark clipper ship and Old Royal Naval College in the background" /><figcaption>Greenwich Pier delivers passengers directly to the historic Cutty Sark clipper ship and the grand colonnades of the Old Royal Naval College.</figcaption></figure><h3>Maritime Greenwich from the Water</h3><p>Cruising to Greenwich Pier is considered the single most rewarding river itinerary in London. As your vessel passes Canary Wharf, the twin domes of the Old Royal Naval College open up majestically.</p><ul><li><strong>Nearby sights:</strong> The 1869 tea clipper <em>Cutty Sark</em>, National Maritime Museum, and Royal Observatory on Greenwich hill.</li><li><strong>How to get there:</strong> Take the DLR to <strong>Cutty Sark for Maritime Greenwich</strong>, just 2 minutes from the pier.</li></ul><h2>At-a-Glance: Thames River Cruise Departure Piers Compared</h2><div class="overflow-x-auto my-6"><table class="w-full text-left text-sm border border-slate-200 rounded-xl overflow-hidden"><thead><tr class="bg-slate-100 text-slate-900"><th class="p-3.5 font-bold">Pier Name</th><th class="p-3.5 font-bold">Location</th><th class="p-3.5 font-bold">Best For</th><th class="p-3.5 font-bold">Nearest Transit</th></tr></thead><tbody class="divide-y divide-slate-200"><tr><td class="p-3.5 font-semibold text-slate-900">Westminster Pier</td><td class="p-3.5 text-slate-600">Victoria Embankment, SW1A</td><td class="p-3.5 text-slate-600">Big Ben, Parliament, central departures</td><td class="p-3.5 text-slate-600">Westminster (Jubilee, District, Circle)</td></tr><tr><td class="p-3.5 font-semibold text-slate-900">London Eye Pier</td><td class="p-3.5 text-slate-600">Riverside Building, County Hall</td><td class="p-3.5 text-slate-600">London Eye flights, South Bank attractions</td><td class="p-3.5 text-slate-600">Waterloo (Bakerloo, Northern, Jubilee)</td></tr><tr><td class="p-3.5 font-semibold text-slate-900">Tower Pier</td><td class="p-3.5 text-slate-600">Lower Thames Street, EC3N</td><td class="p-3.5 text-slate-600">Tower Bridge, Tower of London, City visits</td><td class="p-3.5 text-slate-600">Tower Hill (District, Circle), DLR</td></tr><tr><td class="p-3.5 font-semibold text-slate-900">Greenwich Pier</td><td class="p-3.5 text-slate-600">King William Walk, SE10</td><td class="p-3.5 text-slate-600">Cutty Sark, Royal Observatory, day trips</td><td class="p-3.5 text-slate-600">Cutty Sark DLR, Greenwich Rail</td></tr></tbody></table></div><h2>5 Practical Boarding Tips for Thames River Cruises</h2><h3>1. Arrive at Least 15 Minutes Early</h3><p>Thames sightseeing vessels run to strict timetables and river licensing slots. Boarding gates open 15 minutes before departure, and queues form early on peak days.</p><h3>2. Check Your Pier Gate Letter</h3><p>Major piers like Westminster and Tower have multiple floating boarding pontoons with lettered gangways (e.g., Gate A, B, or C). Check your voucher to queue at the correct gate.</p><h3>3. Sightseeing Cruise vs. Commuter Boats</h3><p>Do not confuse sightseeing cruises with commuter river buses (Uber Boat). Commuter boats operate on rapid transit schedules without commentary, whereas sightseeing cruises feature live or audio commentary and open sundeck seating.</p><h3>4. Weather &amp; Indoor Heating</h3><p>Thames sightseeing boats feature heated enclosed saloons with panoramic windows alongside open-top decks, keeping you warm and dry regardless of London weather.</p><h3>5. Pushchair Accessibility</h3><p>Sightseeing vessels accommodate foldable pushchairs, prams, and backpacks. Large suitcases cannot be taken onboard; use station lockers at Waterloo or Victoria if needed.</p><h2>Frequently Asked Questions</h2><p><strong>Where do most Thames river cruises depart from?</strong><br/>The two primary piers are Westminster Millennium Pier (beside Big Ben) and Tower Millennium Pier (beside Tower Bridge), with boats departing every 30 to 40 minutes.</p><p><strong>Can I board a Thames cruise at the London Eye?</strong><br/>Yes, London Eye Pier sits directly underneath the observation wheel on the South Bank, offering regular departures toward Tower Bridge and Greenwich.</p><p><strong>Do Thames river cruises return to the same pier?</strong><br/>You can book circular loops that return to your starting pier, or one-way routes (such as Westminster to Greenwich) that let you explore a new area.</p><p><strong>How early should I get to the pier?</strong><br/>Plan to arrive 15 minutes before your departure time, or 20 minutes early on sunny weekends.</p><h2>Summary: Which Thames Pier Should You Choose?</h2><p>Selecting the right <strong>Thames river cruise departure piers</strong> depends on your day's plan:</p><ul><li><strong>Visiting Big Ben or Parliament?</strong> Depart from <strong>Westminster Millennium Pier</strong>.</li><li><strong>Visiting Tower Bridge or the Tower of London?</strong> Board at <strong>Tower Millennium Pier</strong>.</li><li><strong>Riding the London Eye or exploring South Bank?</strong> Head to <strong>London Eye Pier</strong>.</li><li><strong>Planning a maritime day trip?</strong> Cruise down to <strong>Greenwich Pier</strong> for historic parks and royal heritage.</li></ul>`;

const newPost = {
  slug: "thames-river-cruise-departure-piers",
  title: "Thames River Cruise Departure Piers: Complete London Boarding Guide",
  meta_title: "Thames River Cruise Departure Piers: 2026 London Boarding Guide",
  meta_description: "Find all major Thames river cruise departure piers in London, including Westminster, London Eye, Tower, and Greenwich, with Tube lines and boarding tips.",
  category: "Visitor Guide",
  excerpt: "Looking for where your boat departs? Discover London's main Thames river cruise departure piers, how to get there by Tube, and essential pier boarding tips.",
  quick_answer: "The primary Thames river cruise departure piers in central London are Westminster Pier (directly beside Big Ben and Westminster Underground), London Eye Pier (Waterloo / South Bank), Tower Millennium Pier (next to the Tower of London and Tower Bridge), and Greenwich Pier (beside Cutty Sark). Sightseeing cruises offer both 40-minute circular loops and point-to-point routes between Westminster and Greenwich. Always verify the pier printed on your boarding ticket and arrive 15 minutes before departure.",
  read_time: "6 min read",
  date: "2026-10-15",
  updated_at: "2026-10-15T12:50:00Z",
  author: "Camille Dubois / Senior London Travel Editor",
  image: "https://qzbrxyxejappdiin.public.blob.vercel-storage.com/uploads/1792049156405-q2263g-thames-river-cruise-departure-piers-hero-oPTOtNL7HpraJUtYj8gx7JJO1k8tiy.jpg",
  image_alt: "Thames river cruise departure piers: sightseeing boat docked at Westminster Millennium Pier beside the River Thames",
  recommended_tour_id: "thames-guided-river-cruise-live-commentary",
  recommended_tour_after_block: 3,
  content: articleContent,
  sort_order: 4,
  cta_heading: "Ready to cruise the River Thames?",
  cta_body: "Compare official sightseeing cruises, evening cruises, and guided tours on our homepage.",
  cta_button_text: "Compare Thames River Cruise Tickets & Tours",
  cta_button_href: "/#prices",
  focus_keyword: "thames river cruise departure piers",
  no_index: false,
  no_follow: false,
  canonical_url: "",
  og_title: "Thames River Cruise Departure Piers: Complete London Boarding Guide",
  og_description: "Find all major Thames river cruise departure piers in London, including Westminster, London Eye, Tower, and Greenwich, with Tube lines and boarding tips.",
  og_image: "https://qzbrxyxejappdiin.public.blob.vercel-storage.com/uploads/1792049156405-q2263g-thames-river-cruise-departure-piers-hero-oPTOtNL7HpraJUtYj8gx7JJO1k8tiy.jpg"
};

console.log("Seeding article into Neon database (thames-river-cruise-tours)...");

await sql`
  INSERT INTO posts (
    slug, title, meta_title, meta_description, category, excerpt,
    quick_answer, read_time, date, updated_at, image, image_alt, author,
    recommended_tour_id, recommended_tour_after_block, content, sort_order,
    cta_heading, cta_body, cta_button_text, cta_button_href, focus_keyword,
    no_index, no_follow, canonical_url, og_title, og_description, og_image
  ) VALUES (
    ${newPost.slug}, ${newPost.title}, ${newPost.meta_title}, ${newPost.meta_description}, ${newPost.category},
    ${newPost.excerpt}, ${newPost.quick_answer}, ${newPost.read_time}, ${newPost.date}, ${newPost.updated_at}, ${newPost.image}, ${newPost.image_alt}, ${newPost.author},
    ${newPost.recommended_tour_id}, ${newPost.recommended_tour_after_block},
    ${JSON.stringify(newPost.content)}::jsonb, ${newPost.sort_order},
    ${newPost.cta_heading}, ${newPost.cta_body}, ${newPost.cta_button_text}, ${newPost.cta_button_href}, ${newPost.focus_keyword},
    ${newPost.no_index}, ${newPost.no_follow}, ${newPost.canonical_url}, ${newPost.og_title}, ${newPost.og_description}, ${newPost.og_image}
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
    updated_at = EXCLUDED.updated_at,
    image = EXCLUDED.image,
    image_alt = EXCLUDED.image_alt,
    author = EXCLUDED.author,
    recommended_tour_id = EXCLUDED.recommended_tour_id,
    recommended_tour_after_block = EXCLUDED.recommended_tour_after_block,
    content = EXCLUDED.content,
    sort_order = EXCLUDED.sort_order,
    cta_heading = EXCLUDED.cta_heading,
    cta_body = EXCLUDED.cta_body,
    cta_button_text = EXCLUDED.cta_button_text,
    cta_button_href = EXCLUDED.cta_button_href,
    focus_keyword = EXCLUDED.focus_keyword,
    no_index = EXCLUDED.no_index,
    no_follow = EXCLUDED.no_follow,
    canonical_url = EXCLUDED.canonical_url,
    og_title = EXCLUDED.og_title,
    og_description = EXCLUDED.og_description,
    og_image = EXCLUDED.og_image
`;

console.log("✓ Successfully seeded post into Neon database!");

// Also fetch all posts currently in DB and sync them into data/posts.json
const allDbPosts = await sql`SELECT * FROM posts ORDER BY date DESC, slug ASC`;
console.log(`Fetched ${allDbPosts.length} posts from DB to update data/posts.json...`);

const postsForJson = allDbPosts.map(r => ({
  slug: r.slug,
  title: r.title,
  metaTitle: r.meta_title,
  metaDescription: r.meta_description,
  category: r.category,
  excerpt: r.excerpt,
  quickAnswer: r.quick_answer,
  readTime: r.read_time,
  date: r.date instanceof Date ? r.date.toISOString().slice(0, 10) : String(r.date).slice(0, 10),
  updatedAt: r.updated_at ? new Date(r.updated_at).toISOString().slice(0, 10) : (r.date instanceof Date ? r.date.toISOString().slice(0, 10) : String(r.date).slice(0, 10)),
  author: r.author || "",
  image: r.image,
  imageAlt: r.image_alt,
  recommendedTourId: r.recommended_tour_id || "",
  recommendedTourAfterBlock: r.recommended_tour_after_block === null ? undefined : Number(r.recommended_tour_after_block),
  content: r.content,
  ctaHeading: r.cta_heading || "Ready to cruise the River Thames?",
  ctaBody: r.cta_body || "Compare official sightseeing cruises, evening cruises, and guided tours on our homepage.",
  ctaButtonText: r.cta_button_text || "Compare Thames River Cruise Tickets & Tours",
  ctaButtonHref: r.cta_button_href || "/#prices",
  focusKeyword: r.focus_keyword || "",
  noIndex: !!r.no_index,
  noFollow: !!r.no_follow,
  canonicalUrl: r.canonical_url || "",
  ogTitle: r.og_title || "",
  ogDescription: r.og_description || "",
  ogImage: r.og_image || ""
}));

fs.writeFileSync(path.join(process.cwd(), "data", "posts.json"), JSON.stringify(postsForJson, null, 2), "utf-8");
console.log(`✓ Updated data/posts.json with all ${postsForJson.length} posts!`);
