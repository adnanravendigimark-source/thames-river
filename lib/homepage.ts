import { sql } from "./db";

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface HeroFeature {
  title: string;
  subtitle: string;
}

export interface TimelineRow {
  time: string;
  step: string;
}

export interface HoursRow {
  range: string;
  time: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface TourSection {
  eyebrow: string;
  heading: string;
  subheading: string;
}

export interface HighlightCard {
  icon: string;
  title: string;
  body: string;
}
export interface HighlightsSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  cards: HighlightCard[];
}

export interface WhySection {
  eyebrow: string;
  heading: string;
  intro: string;
  image: string;
  imageAlt: string;
  timelineHeading: string;
  timeline: TimelineRow[];
  learnHeading: string;
  learn: string[];
  note: string;
  extraHeading: string;
  extraItems: { name: string; note: string }[];
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
}

export interface TowerSection {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
  ctaButtonText: string;
  ctaHref: string;
  images: GalleryImage[];
}

export interface PracticalSection {
  hoursHeading: string;
  hours: HoursRow[];
  hoursNote: string;
  addressHeading: string;
  address: string;
  metro: string;
  bestTimeHeading: string;
  bestTimeBody: string;
}

export interface PriceSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  note: string;
  itemLabel: string;
  priceLabel: string;
  column1Label: string;
  column2Label: string;
  bestForLabel: string;
  bookLabel: string;
}

export interface FaqSection {
  eyebrow: string;
  heading: string;
}

export interface NotFoundSection {
  heading: string;
  body: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}

export interface BlogTeaserSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  viewAllText: string;
  readArticleText: string;
}

export interface BlogPageSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  emptyStateText: string;
  featuredLinkText: string;
  ctaHeading: string;
  ctaButtonText: string;
  backToGuidesText: string;
  quickAnswerLabel: string;
  tocLabel: string;
  relatedGuidesHeading: string;
  sidebarRelatedHeading: string;
  sidebarRecommendedBadge: string;
  sidebarCompareLinkText: string;
  promoRecommendedText: string;
}

export interface CtaBannerSection {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref: string;
}

export interface HomepageSections {
  tours: TourSection;
  highlights: HighlightsSection;
  why: WhySection;
  ctaBanner: CtaBannerSection;
  tower: TowerSection;
  practical: PracticalSection;
  price: PriceSection;
  faq: FaqSection;
  notFound: NotFoundSection;
  blogTeaser: BlogTeaserSection;
  blogPage: BlogPageSection;
}

export interface HeaderContent {
  logoImage: string;
  logoAlt: string;
  logoLine1: string;
  logoLine2: string;
  bookNowText: string;
  navLinks: NavLink[];
  ctaText: string;
  ctaHref: string;
}

export interface FooterContent {
  tagline: string;
  columns: FooterColumn[];
  addressHeading: string;
  addressLine1: string;
  addressLine2: string;
  copyrightText: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  dark: string;
  accent: string;
}

export interface HomepageContent {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroVideo: string;
  heroFeatures: HeroFeature[];
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
  sections: HomepageSections;
  header: HeaderContent;
  footer: FooterContent;
  theme: ThemeColors;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  noIndex: boolean;
  noFollow: boolean;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export const DEFAULT_HEADER: HeaderContent = {
  logoImage: "",
  logoAlt: "Thames River Cruises",
  logoLine1: "Thames River",
  logoLine2: "— CRUISES —",
  bookNowText: "BOOK CRUISE",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText: "BOOK CRUISE",
  ctaHref: "#tours",
};

export const DEFAULT_FOOTER: FooterContent = {
  tagline:
    "<strong>Independent Thames River Cruise & London Ticket Resource.</strong> We curate official Thames sightseeing cruises, evening cruises, guided tours, and London combo passes with verified authorized providers.",
  columns: [
    {
      title: "Thames River Cruise Tickets & Passes",
      links: [
        { label: "Sightseeing Cruise (Live Commentary)", href: "/#tours" },
        { label: "Evening Cruise (Live Music)", href: "/#palace-towers-experience" },
        { label: "Greenwich Round-Trip Cruise", href: "/#tours" },
        { label: "Cruise Comparison & Prices", href: "/#prices" },
        { label: "Thames River Cruise Visitor FAQs", href: "/#faq" },
      ],
    },
    {
      title: "Cruise Information",
      links: [
        { label: "About Thames River Cruises", href: "/about" },
        { label: "London Travel Blog & Guides", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  addressHeading: "Westminster Pier Departure Point",
  addressLine1: "Westminster Pier, Victoria Embankment",
  addressLine2: "London SE1 2PP, England · Westminster Underground Station",
  copyrightText:
    "Thames River Cruises. All prices in GBP. Official tickets subject to operator schedules and seasonal availability.",
};

export const DEFAULT_THEME: ThemeColors = {
  primary: "#0B2545",   // Deep Navy
  secondary: "#1B4373", // Slate Navy
  dark: "#1C2B3A",      // Slate Charcoal
  accent: "#1E96E0",    // Sky Blue
};

export const DEFAULT_HERO_FEATURES: HeroFeature[] = [
  { title: "Official Tickets", subtitle: "100% Authorized" },
  { title: "Guaranteed Departure", subtitle: "Reserve your exact sailing time" },
  { title: "River Access", subtitle: "See London from the Thames" },
  { title: "24/7 Support", subtitle: "We're here to help" },
];

export const DEFAULT_SECTIONS: HomepageSections = {
  tours: {
    eyebrow: "Compare & Book Tickets",
    heading: "Choose Your Perfect Thames Cruise",
    subheading: "Sightseeing cruises, evening cruises, and expert-guided river tours.",
  },
  highlights: {
    eyebrow: "See London From the Water",
    heading: "5 Must-See Views From a Thames River Cruise",
    subheading:
      "The River Thames has connected London for two thousand years, and today it remains one of the best ways to see the city's most iconic landmarks in a single relaxed trip.",
    cards: [
      {
        title: "Big Ben & the Houses of Parliament",
        body: "Sail directly beneath London's most famous clock tower on cruises departing from Westminster Pier.",
        icon: "🏛️",
      },
      {
        title: "Tower Bridge",
        body: "Pass beneath the Victorian bascule bridge's twin towers — the highlight of nearly every Thames cruise.",
        icon: "🌉",
      },
      {
        title: "The London Eye",
        body: "See the giant observation wheel from river level, especially striking at dusk when it's lit up.",
        icon: "🎡",
      },
      {
        title: "Greenwich & the Prime Meridian",
        body: "Cruise onward to historic Greenwich, home of the Cutty Sark and the Royal Observatory.",
        icon: "⛵",
      },
    ],
  },
  why: {
    eyebrow: "Why Cruise the Thames?",
    heading: "A Journey Through Two Thousand Years of London History",
    intro:
      "<p>The River Thames has carried Londoners for two millennia, and a cruise remains one of the most relaxing ways to see the city. Glide past royal landmarks, historic bridges, and a skyline that blends centuries of history in a single view.</p>",
    image: "/images/thames-tour-3.jpg",
    imageAlt: "A river cruise boat approaching Greenwich Pier on the Thames, London",
    timelineHeading: "Recommended Cruise Schedule",
    timeline: [
      { time: "0:00", step: "Arrive at the pier 15 minutes before your scheduled departure to allow for boarding" },
      { time: "0:15", step: "Board the boat and find a seat on the open-air upper deck" },
      { time: "0:20", step: "Depart Westminster Pier, passing Big Ben and the Houses of Parliament" },
      { time: "0:35", step: "Sail beneath Tower Bridge and past the Tower of London" },
      { time: "1:00", step: "Return cruise back toward Westminster, passing the London Eye" },
      { time: "1:15", step: "Disembark, or continue onward toward Greenwich on select cruises" },
    ],
    learnHeading: "What You'll Discover Along the River",
    learn: [
      "Two thousand years of London history told from the water",
      "Iconic Thames crossings, from Tower Bridge to Westminster Bridge",
      "Panoramic skyline views blending historic and modern London",
      "A relaxed alternative to walking between landmarks",
    ],
    note: "All tickets include digital mobile delivery with instant boarding pass scanning at the pier.",
    extraHeading: "Key Departure Piers",
    extraItems: [
      { name: "Westminster Pier", note: "Main departure point for sightseeing cruises, beside Big Ben" },
      { name: "Tower Pier", note: "Beside the Tower of London, ideal for Tower Bridge combo tickets" },
      { name: "Greenwich Pier", note: "Destination pier for round-trip cruises to historic Greenwich" },
    ],
    ctaText: "Ready to cruise the River Thames? Popular departures sell out days ahead in peak season. Reserve your spot now.",
    ctaButtonText: "Book Thames River Cruise Tickets Now →",
    ctaHref: "#tours",
  },
  ctaBanner: {
    heading: "Ready to Cruise the River Thames?",
    subtext: "Book your official tickets today and see London from the water.",
    buttonText: "Explore Cruises",
    buttonHref: "#tours",
  },
  tower: {
    eyebrow: "The Ultimate River Experience",
    heading: "See Tower Bridge, Big Ben & the London Eye From the Water",
    body:
      "Cruising the Thames is an unforgettable way to experience London. Sail beneath the iconic Tower Bridge, glide past the Houses of Parliament, and take in panoramic skyline views from the open-air deck.",
    bullets: [
      "Open-air upper deck seating for unobstructed photos of every landmark",
      "Live multilingual commentary pointing out two thousand years of river history",
      "Sail directly beneath Tower Bridge's Victorian twin towers",
      "Panoramic views across the London skyline, old and new",
    ],
    ctaButtonText: "See Thames River Cruise Tickets & Tours",
    ctaHref: "#tours",
    images: [
      {
        src: "/images/thames-tour-1.jpg",
        alt: "A Thames sightseeing boat passing the Houses of Parliament and Big Ben, London",
        label: "Houses of Parliament",
      },
      {
        src: "/images/thames-tour-2.jpg",
        alt: "A guide pointing out landmarks to passengers aboard a Thames river cruise boat",
        label: "Guided Cruise",
      },
      {
        src: "/images/thames-tour-6.jpg",
        alt: "Panoramic view of the River Thames, Tower Bridge, and London skyline from above",
        label: "Tower Bridge",
      },
      {
        src: "/images/thames-tour-4.jpg",
        alt: "Tower Bridge illuminated at night, viewed from a Thames evening cruise boat",
        label: "Evening Cruise",
      },
    ],
  },
  practical: {
    hoursHeading: "Thames River Cruise Departure Times (2026)",
    hours: [
      { range: "Sightseeing Cruises (Daytime)", time: "10:00 AM – 6:00 PM, every 20–40 minutes" },
      { range: "Evening Cruises", time: "7:00 PM – 9:30 PM (seasonal)" },
      { range: "Greenwich Round-Trip", time: "10:00 AM – 5:00 PM, hourly departures" },
      { range: "Winter Schedule (November – March)", time: "Reduced frequency — check operator schedule" },
      { range: "Operates Year-Round", time: "Cruises run in all but severe weather conditions" },
    ],
    hoursNote: "Popular departure times can sell out days in advance during peak season. Booking online in advance lets you lock in your preferred sailing time.",
    addressHeading: "Departure Piers & Arrival Information",
    address:
      "Westminster Pier, Victoria Embankment, London SE1 2PP.\nLocated a short 2-minute walk from Westminster Underground station.",
    metro: "Take the Underground to Westminster station (Circle, District, Jubilee lines), then walk 2 minutes to Westminster Pier on the Victoria Embankment.",
    bestTimeHeading: "Best Time to Cruise the Thames",
    bestTimeBody:
      "Mid-morning departures (10:00–11:00 AM) offer good light for photos and thinner crowds before the midday rush. Early evening sailings (6:30–7:30 PM) catch golden-hour light transitioning into London's illuminated night skyline.",
  },
  price: {
    eyebrow: "Transparent Comparison",
    heading: "Compare Thames River Cruise Tickets & Tours",
    subheading:
      "Find the ideal cruise for your London itinerary. Compare inclusions, duration, and prices side by side.",
    note: "All tickets include digital mobile access with a guaranteed departure time. 100% free cancellation up to 24 hours prior on verified tickets.",
    itemLabel: "Cruise / Tour Option",
    priceLabel: "Price",
    column1Label: "Duration",
    column2Label: "Commentary / Guide",
    bestForLabel: "Best For",
    bookLabel: "Select Cruise",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    heading: "Thames River Cruise Tickets & London FAQs",
  },
  notFound: {
    heading: "This page seems to have drifted off down the River Thames.",
    body: "The page you are looking for does not exist or may have been moved. Explore our top Thames river cruise tickets and London tours below.",
    primaryButtonText: "Compare Thames River Cruise Tickets & Passes →",
    primaryButtonHref: "/#tours",
    secondaryButtonText: "Read the London Travel Guide",
    secondaryButtonHref: "/blog",
  },
  blogTeaser: {
    eyebrow: "London Travel & River Guides",
    heading: "Thames River Cruise & London Insider Guides",
    subheading:
      "Expert tips on booking departure times, ticket comparisons, avoiding sold-out sailings, and combining a Thames cruise with the rest of London.",
    viewAllText: "View All Guides",
    readArticleText: "Read Guide",
  },
  blogPage: {
    eyebrow: "Thames River Cruise Travel & Ticket Guides",
    heading: "Thames River Cruise Guides, Visitor Tips & History",
    subheading: "Everything you need to know to secure your Thames River cruise tickets, pick the right cruise, and experience London like an insider.",
    emptyStateText: "No articles published yet — check back soon.",
    featuredLinkText: "Read the guide",
    ctaHeading: "Ready to cruise the River Thames?",
    ctaButtonText: "Compare Thames River Cruise Tickets & Tours →",
    backToGuidesText: "← All London travel guides",
    quickAnswerLabel: "Quick Answer",
    tocLabel: "In This Guide",
    relatedGuidesHeading: "Related London Guides",
    sidebarRelatedHeading: "Related Thames River Cruise Guides",
    sidebarRecommendedBadge: "Recommended",
    sidebarCompareLinkText: "Compare all tickets & tours →",
    promoRecommendedText: "Recommended Cruise",
  },
};

const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  heroBadge: "DISCOVER LONDON FROM THE WATER",
  heroHeading: "See London From a Different Perspective",
  heroSubheading:
    "<p>Relax, explore and experience the best of London with our scenic river cruises. From iconic landmarks to unforgettable moments, it's a journey worth taking.</p>",
  heroImage: "/images/thames-hero.jpg",
  heroImageAlt: "Thames river cruise boat passing Tower Bridge at sunset, London",
  heroVideo: "",
  heroFeatures: DEFAULT_HERO_FEATURES,
  heroCtaPrimaryText: "Explore Cruises",
  heroCtaPrimaryHref: "#tours",
  heroCtaSecondaryText: "Watch Our Story",
  heroCtaSecondaryHref: "#tours",
  showFeaturedTour: true,
  featuredTourId: "thames-1-hour-sightseeing-cruise",
  featuredBadgeLabel: "Most Popular Cruise",
  featuredUrgencyText: "Peak-Season Departures Sell Out 2–3 Days in Advance · Reserve Early",
  featuredReasons: [
    "Guaranteed departure time — no waiting at the pier ticket office",
    "Live commentary past Big Ben, the London Eye, and Tower Bridge",
    "One of the most popular ways to see London's skyline"
  ],
  sections: DEFAULT_SECTIONS,
  header: DEFAULT_HEADER,
  footer: DEFAULT_FOOTER,
  theme: DEFAULT_THEME,
  metaTitle: "Thames River Cruise Tickets | Sightseeing, Evening & Tea Cruises 2026",
  metaDescription:
    "Book official Thames River cruise tickets with guaranteed departure times. Compare sightseeing, evening, and afternoon tea cruises on London's iconic river.",
  focusKeyword: "Thames River Cruise & Boat Tour",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "",
  ogTitle: "Thames River Cruise Tickets — Guaranteed Departures & Live Commentary",
  ogDescription:
    "Secure your spot on a Thames River cruise. Includes sightseeing, evening, and afternoon tea cruise options, with free cancellation.",
  ogImage: "/images/thames-hero.jpg",
};

function parseReasons(value: unknown): string[] {
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

function parseJsonWithDefault<T extends object>(value: unknown, fallback: T): T {
  let parsed: unknown = value;
  if (typeof value === "string") {
    try {
      parsed = JSON.parse(value);
    } catch {
      parsed = null;
    }
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fallback;
  return { ...fallback, ...(parsed as Partial<T>) };
}

function rowToHomepage(row: any): HomepageContent {
  const sectionsRaw = parseJsonWithDefault<HomepageSections>(row.sections_json, DEFAULT_SECTIONS);
  return {
    heroBadge: row.hero_badge || DEFAULT_HOMEPAGE_CONTENT.heroBadge,
    heroHeading: row.hero_heading || DEFAULT_HOMEPAGE_CONTENT.heroHeading,
    heroSubheading: row.hero_subheading || DEFAULT_HOMEPAGE_CONTENT.heroSubheading,
    heroImage: row.hero_image || DEFAULT_HOMEPAGE_CONTENT.heroImage,
    heroImageAlt: row.hero_image_alt || DEFAULT_HOMEPAGE_CONTENT.heroImageAlt,
    heroVideo: row.hero_video || "",
    heroFeatures: (() => {
      const f = parseReasons(row.hero_features);
      return f.length ? (f as unknown as HeroFeature[]) : DEFAULT_HERO_FEATURES;
    })(),
    heroCtaPrimaryText: row.hero_cta_primary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryText,
    heroCtaPrimaryHref: row.hero_cta_primary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryHref,
    heroCtaSecondaryText: row.hero_cta_secondary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryText,
    heroCtaSecondaryHref: row.hero_cta_secondary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryHref,
    showFeaturedTour: !!row.show_featured_tour,
    featuredTourId: row.featured_tour_id || DEFAULT_HOMEPAGE_CONTENT.featuredTourId,
    featuredBadgeLabel: row.featured_badge_label || DEFAULT_HOMEPAGE_CONTENT.featuredBadgeLabel,
    featuredUrgencyText: row.featured_urgency_text || DEFAULT_HOMEPAGE_CONTENT.featuredUrgencyText,
    featuredReasons: parseReasons(row.featured_reasons).length ? parseReasons(row.featured_reasons) : DEFAULT_HOMEPAGE_CONTENT.featuredReasons,
    sections: {
      tours: { ...DEFAULT_SECTIONS.tours, ...sectionsRaw.tours },
      highlights: { ...DEFAULT_SECTIONS.highlights, ...sectionsRaw.highlights },
      why: { ...DEFAULT_SECTIONS.why, ...sectionsRaw.why },
      ctaBanner: { ...DEFAULT_SECTIONS.ctaBanner, ...sectionsRaw.ctaBanner },
      tower: { ...DEFAULT_SECTIONS.tower, ...sectionsRaw.tower },
      practical: { ...DEFAULT_SECTIONS.practical, ...sectionsRaw.practical },
      price: { ...DEFAULT_SECTIONS.price, ...sectionsRaw.price },
      faq: { ...DEFAULT_SECTIONS.faq, ...sectionsRaw.faq },
      notFound: { ...DEFAULT_SECTIONS.notFound, ...sectionsRaw.notFound },
      blogTeaser: { ...DEFAULT_SECTIONS.blogTeaser, ...sectionsRaw.blogTeaser },
      blogPage: { ...DEFAULT_SECTIONS.blogPage, ...sectionsRaw.blogPage },
    },
    header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
    footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
    theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    metaTitle: row.meta_title || DEFAULT_HOMEPAGE_CONTENT.metaTitle,
    metaDescription: row.meta_description || DEFAULT_HOMEPAGE_CONTENT.metaDescription,
    focusKeyword: row.focus_keyword || DEFAULT_HOMEPAGE_CONTENT.focusKeyword,
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    canonicalUrl: row.canonical_url || "",
    ogTitle: row.og_title || DEFAULT_HOMEPAGE_CONTENT.ogTitle,
    ogDescription: row.og_description || DEFAULT_HOMEPAGE_CONTENT.ogDescription,
    ogImage: row.og_image || DEFAULT_HOMEPAGE_CONTENT.ogImage,
  };
}

export async function getHomepageContent(): Promise<HomepageContent> {
  try {
    const rows = await sql`SELECT * FROM homepage WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToHomepage(rows[0]) : DEFAULT_HOMEPAGE_CONTENT;
  } catch {
    return DEFAULT_HOMEPAGE_CONTENT;
  }
}

export async function getSiteChrome(): Promise<{ header: HeaderContent; footer: FooterContent; theme: ThemeColors }> {
  try {
    const rows = await sql`SELECT header_json, footer_json, theme_json FROM homepage WHERE id = 1 LIMIT 1`;
    if (!rows.length) return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
    const row = rows[0] as any;
    return {
      header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
      footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
      theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    };
  } catch {
    return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
  }
}

export async function saveHomepageCopy(data: {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroVideo: string;
  heroFeatures: HeroFeature[];
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, hero_badge, hero_heading, hero_subheading, hero_image, hero_image_alt,
      hero_video, hero_features, hero_cta_primary_text, hero_cta_primary_href,
      hero_cta_secondary_text, hero_cta_secondary_href,
      meta_title, meta_description, focus_keyword,
      canonical_url, og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroBadge}, ${data.heroHeading}, ${data.heroSubheading}, ${data.heroImage},
      ${data.heroImageAlt}, ${data.heroVideo || ""},
      ${JSON.stringify(data.heroFeatures || [])}::jsonb,
      ${data.heroCtaPrimaryText || ""}, ${data.heroCtaPrimaryHref || ""},
      ${data.heroCtaSecondaryText || ""}, ${data.heroCtaSecondaryHref || ""},
      ${data.metaTitle || ""}, ${data.metaDescription || ""}, ${data.focusKeyword || ""},
      ${data.canonicalUrl || ""}, ${data.ogTitle || ""}, ${data.ogDescription || ""}, ${data.ogImage || ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_badge = EXCLUDED.hero_badge,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      hero_video = EXCLUDED.hero_video,
      hero_features = EXCLUDED.hero_features,
      hero_cta_primary_text = EXCLUDED.hero_cta_primary_text,
      hero_cta_primary_href = EXCLUDED.hero_cta_primary_href,
      hero_cta_secondary_text = EXCLUDED.hero_cta_secondary_text,
      hero_cta_secondary_href = EXCLUDED.hero_cta_secondary_href,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      focus_keyword = EXCLUDED.focus_keyword,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}

export async function setHomepageIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO homepage (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveRecommendedTour(data: {
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, show_featured_tour, featured_tour_id, featured_badge_label,
      featured_urgency_text, featured_reasons
    ) VALUES (
      1, ${!!data.showFeaturedTour}, ${data.featuredTourId}, ${data.featuredBadgeLabel},
      ${data.featuredUrgencyText}, ${JSON.stringify(data.featuredReasons || [])}::jsonb
    )
    ON CONFLICT (id) DO UPDATE SET
      show_featured_tour = EXCLUDED.show_featured_tour,
      featured_tour_id = EXCLUDED.featured_tour_id,
      featured_badge_label = EXCLUDED.featured_badge_label,
      featured_urgency_text = EXCLUDED.featured_urgency_text,
      featured_reasons = EXCLUDED.featured_reasons
  `;
}

export async function saveHomepageSections(sections: HomepageSections): Promise<void> {
  await sql`
    INSERT INTO homepage (id, sections_json)
    VALUES (1, ${JSON.stringify(sections)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET sections_json = EXCLUDED.sections_json
  `;
}

export async function saveSiteHeader(header: HeaderContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, header_json)
    VALUES (1, ${JSON.stringify(header)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET header_json = EXCLUDED.header_json
  `;
}

export async function saveSiteFooter(footer: FooterContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, footer_json)
    VALUES (1, ${JSON.stringify(footer)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET footer_json = EXCLUDED.footer_json
  `;
}

export async function saveSiteTheme(theme: ThemeColors): Promise<void> {
  await sql`
    INSERT INTO homepage (id, theme_json)
    VALUES (1, ${JSON.stringify(theme)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET theme_json = EXCLUDED.theme_json
  `;
}
