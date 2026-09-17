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
  heroGallery: GalleryImage[];
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
  logoAlt: "Pena Palace Tickets",
  logoLine1: "Pena Palace",
  logoLine2: "— TICKETS —",
  bookNowText: "BOOK TICKETS",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText: "BOOK TICKETS",
  ctaHref: "#tours",
};

export const DEFAULT_FOOTER: FooterContent = {
  tagline:
    "<strong>Independent Pena Palace & Sintra Ticket Resource.</strong> We curate official skip-the-line Pena Palace tickets, Pena Park entry, guided tours, and Sintra combo passes with verified authorized providers.",
  columns: [
    {
      title: "Pena Palace Tickets & Passes",
      links: [
        { label: "Park + Palace Entry (All-Inclusive)", href: "/#tours" },
        { label: "Skip-the-Line Priority Access", href: "/#palace-towers-experience" },
        { label: "Park Only Ticket (Gardens & Grounds)", href: "/#tours" },
        { label: "Pass Comparison & Prices", href: "/#prices" },
        { label: "Pena Palace Visitor FAQs", href: "/#faq" },
      ],
    },
    {
      title: "Palace Information",
      links: [
        { label: "About Pena Palace", href: "/about" },
        { label: "Sintra Travel Blog & Guides", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  addressHeading: "Pena Palace Entrance",
  addressLine1: "Estrada da Pena, Pena Park Upper Gate",
  addressLine2: "2710-609 Sintra, Portugal · Sintra Train Station (Bus 434 or Tuk-tuk)",
  copyrightText:
    "Pena Palace Tickets. All prices in EUR. Official tickets subject to Parques de Sintra quota rules and seasonal availability.",
};

export const DEFAULT_THEME: ThemeColors = {
  primary: "#123B27",   // Deep Forest Green
  secondary: "#1F5135", // Pine Green
  dark: "#26332B",      // Charcoal
  accent: "#D6A33A",    // Palace Gold
};

export const DEFAULT_HERO_FEATURES: HeroFeature[] = [
  { title: "Official Tickets", subtitle: "100% Authorized" },
  { title: "Skip The Line", subtitle: "Save time, enjoy more" },
  { title: "Palace Access", subtitle: "Explore Pena Palace" },
  { title: "24/7 Support", subtitle: "We're here to help" },
];

export const DEFAULT_GALLERY: GalleryImage[] = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Image%20of%20Pena%20Palace%2C%20Sintra%2C%20Portugal.jpg",
    alt: "Pena Palace's colorful red and yellow towers overlooking the Sintra hills at golden hour",
    label: "Pena Palace",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Clock%20Tower%2C%20Pal%C3%A1cio%20Nacional%20da%20Pena%2C%20Sintra%2C%20Portugal%20(54842280545).jpg",
    alt: "Close-up of Pena Palace's Manueline windows and colorful battlements",
    label: "Palace Towers",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Grand%20Palace%20Ballroom%20Interior%20(55256687864).jpg",
    alt: "Ornate tiled interior state room inside Pena Palace",
    label: "Palace Interior",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/2011-04-21%20Portugal%20171%20-%20Sintra%20(5694882350).jpg",
    alt: "Winding forest path through Pena Park's romantic gardens in Sintra",
    label: "Pena Park Gardens",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Chalet%20da%20Condessa%20de%20Edla.jpg",
    alt: "Rustic cork-bark facade of the Chalet of the Countess d'Edla in Pena Park",
    label: "Chalet of the Countess d'Edla",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/2011-04-21%20Portugal%20171%20-%20Sintra%20(5694882350).jpg",
    alt: "Colorful historic buildings and cobblestone streets in Sintra town centre",
    label: "Sintra Historic Centre",
  },
];

export const DEFAULT_SECTIONS: HomepageSections = {
  tours: {
    eyebrow: "Compare & Book Tickets",
    heading: "Choose Your Perfect Pena Palace Experience",
    subheading: "Skip-the-line entry, park-only tickets, and expert-led Romanticist palace tours.",
  },
  highlights: {
    eyebrow: "A Fairy-Tale Hilltop in Sintra",
    heading: "5 Must-See Wonders of Pena Palace & Park",
    subheading:
      "Built from the 1840s by King Ferdinand II atop a ruined monastery, Pena Palace is one of the finest expressions of 19th-century Romanticism in the world and a UNESCO World Heritage Site.",
    cards: [
      {
        title: "Colorful Romanticist Towers",
        body: "Wander the vivid red, yellow and grey battlements and domes that make Pena Palace one of the most photographed landmarks in Portugal.",
        icon: "🏰",
      },
      {
        title: "Manueline & Moorish Interior",
        body: "Explore state rooms decorated with intricate azulejo tilework, Gothic arches, and Moorish-influenced courtyards straight out of a storybook.",
        icon: "🎨",
      },
      {
        title: "Pena Park's Exotic Arboretum",
        body: "Stroll 200+ hectares of romantic gardens home to over 500 tree species from four continents — Portugal's most important arboretum.",
        icon: "🌳",
      },
      {
        title: "High Cross Viewpoint",
        body: "Climb to the second-highest point of the Sintra hills for sweeping views over the palace, the coastline, and the Moorish Castle ramparts.",
        icon: "✨",
      },
    ],
  },
  why: {
    eyebrow: "Why Visit Pena Palace?",
    heading: "A Masterpiece of Romanticist Art, History and Architecture",
    intro:
      "<p>Pena Palace is the crown jewel of Sintra. Explore the colorful hilltop residence built for King Ferdinand II, wander centuries-old gardens, and enjoy unforgettable views over the Sintra hills.</p>",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/2011-04-21%20Portugal%20171%20-%20Sintra%20(5694882350).jpg",
    imageAlt: "Winding garden path with a view toward Pena Palace's colorful towers",
    timelineHeading: "Recommended Visit Schedule",
    timeline: [
      { time: "0:00", step: "Arrive at the Pena Park upper gate 15 minutes before your timed entry slot" },
      { time: "0:15", step: "Enter the Palace and explore the state rooms, ballroom, and Manueline cloister" },
      { time: "0:50", step: "Step onto the terraces for panoramic views over the Sintra hills and Atlantic coast" },
      { time: "1:20", step: "Descend into Pena Park to explore the Valley of the Lakes and garden pavilions" },
      { time: "1:50", step: "Visit the rustic Chalet of the Countess d'Edla, a short walk from the main palace" },
      { time: "2:30", step: "Climb to the High Cross viewpoint for the best panoramic photo of the palace and coastline" },
    ],
    learnHeading: "Architectural Secrets You Will Uncover",
    learn: [
      "Iconic 19th-century Romanticist architecture",
      "Pena Park's arboretum — a historic engineering and botanical marvel",
      "Panoramic views over the Sintra hills and Atlantic coast",
      "A must-see for every traveler to Portugal",
    ],
    note: "All tickets include digital mobile delivery with instant barcode scanning at the Pena Park turnstiles.",
    extraHeading: "Key Park & Palace Entrances",
    extraItems: [
      { name: "Pena Park Upper Gate", note: "Main entrance for all Palace timed-entry ticket holders" },
      { name: "Pena Park Lower Gate", note: "Alternate entrance closer to the Sintra town shuttle stop" },
      { name: "Chalet of the Countess d'Edla", note: "Located a short walk from the main palace within the park" },
    ],
    ctaText: "Ready to explore Pena Palace? Timed entry slots sell out days ahead in peak season. Reserve your slot now.",
    ctaButtonText: "Book Pena Palace Tickets Now →",
    ctaHref: "#tours",
  },
  ctaBanner: {
    heading: "Ready to Explore Pena Palace?",
    subtext: "Book your official tickets today and make memories that last a lifetime.",
    buttonText: "Explore Tickets",
    buttonHref: "#tours",
  },
  tower: {
    eyebrow: "The Ultimate Romanticist Escape",
    heading: "Explore Pena Palace's Colorful Towers & Terraces",
    body:
      "Wandering Pena Palace's ramparts is an unforgettable bucket-list experience. Pass beneath the Triton archway, cross the drawbridge that never lifts, wander tiled courtyards inches from Moorish-influenced arches, and emerge onto open terraces at the highest viewpoint in Sintra.",
    bullets: [
      "Strictly limited timed entry keeps the historic interior rooms comfortable and uncrowded",
      "Close-up vantage point of the palace's hand-painted azulejo tilework and stucco ceilings",
      "Fascinating architectural walk through Manueline, Moorish and Neo-Gothic influences built in the 1840s–60s",
      "Panoramic 360° open-air views across the Sintra hills, Pena Park, and the Atlantic coastline",
    ],
    ctaButtonText: "See Pena Palace Tickets & Tours",
    ctaHref: "#tours",
    images: [
      {
        src: "/images/pena-tour-1.jpg",
        alt: "Colorful red and yellow towers and battlements of Pena Palace in Sintra",
        label: "Palace Towers",
      },
      {
        src: "/images/pena-tour-2.jpg",
        alt: "Ornate tiled courtyard and Moorish-influenced arches inside Pena Palace",
        label: "Tiled Courtyards",
      },
      {
        src: "/images/pena-sunset.jpg",
        alt: "Pena Palace at sunset overlooking the Sintra hills",
        label: "Palace at Sunset",
      },
      {
        src: "/images/pena-terrace.jpg",
        alt: "Panoramic terrace view of Pena Palace and the Sintra coastline",
        label: "Queen's Terrace",
      },
    ],
  },
  practical: {
    hoursHeading: "Pena Palace & Park Opening Hours (2026)",
    hours: [
      { range: "Pena Palace (Timed Entry Slot)", time: "9:30 AM – 7:00 PM (Last entry 6:00 PM)" },
      { range: "Pena Park (Gardens & Grounds)", time: "9:30 AM – 7:00 PM (Last entry 6:30 PM)" },
      { range: "Chalet of the Countess d'Edla", time: "10:00 AM – 6:00 PM (Seasonal hours may vary)" },
      { range: "Winter Hours (November – March)", time: "10:00 AM – 6:00 PM (Last entry 5:00 PM)" },
      { range: "Annual Closure", time: "Open 365 days a year — closed only 25 December" },
    ],
    hoursNote: "Entry to Pena Park and Pena Palace both require a paid ticket — there is no free admission. Booking online in advance lets you skip the on-site ticket-office queue.",
    addressHeading: "Location & Arrival Information",
    address:
      "Estrada da Pena, 2710-609 Sintra, Portugal.\nLocated atop the Sintra hills, roughly a 20–25 minute uphill walk or short shuttle ride from Sintra town centre.",
    metro: "No train service reaches the park directly — take the Lisbon–Sintra train to Sintra station, then Bus 434 (Circuito da Pena), a tuk-tuk, or a taxi up to the park gate.",
    bestTimeHeading: "Best Time to Visit Pena Palace",
    bestTimeBody:
      "The 9:30 AM opening slot offers the coolest temperatures, softest light, and thinnest crowds before tour buses arrive from Lisbon. The final entry slots before 6:00 PM provide warm golden-hour light across the colorful towers and quieter gardens.",
  },
  price: {
    eyebrow: "Transparent Comparison",
    heading: "Compare Pena Palace Tickets, Tours & Sintra Combos",
    subheading:
      "Find the ideal ticket for your Sintra itinerary. Compare inclusions, palace access, duration, and prices side by side.",
    note: "All tickets include digital barcode access with timed entry. 100% free cancellation up to 24 hours prior on verified tickets.",
    itemLabel: "Ticket / Tour Option",
    priceLabel: "Price",
    column1Label: "Duration",
    column2Label: "Palace Interior Access",
    bestForLabel: "Best For",
    bookLabel: "Select Ticket",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    heading: "Pena Palace Tickets & Sintra FAQs",
  },
  notFound: {
    heading: "This page seems to have wandered off into the Sintra hills.",
    body: "The page you are looking for does not exist or may have been moved. Explore our top Pena Palace tickets and Sintra tours below.",
    primaryButtonText: "Compare Pena Palace Tickets & Passes →",
    primaryButtonHref: "/#tours",
    secondaryButtonText: "Read the Sintra Travel Guide",
    secondaryButtonHref: "/blog",
  },
  blogTeaser: {
    eyebrow: "Sintra Travel & Architecture Guides",
    heading: "Pena Palace & Sintra Insider Guides",
    subheading:
      "Expert tips on booking timed entry slots, ticket comparisons, avoiding queues, and combining Pena Palace with the rest of Sintra.",
    viewAllText: "View All Guides",
    readArticleText: "Read Guide",
  },
  blogPage: {
    eyebrow: "Pena Palace Travel & Ticket Guides",
    heading: "Pena Palace Guides, Visitor Tips & History",
    subheading: "Everything you need to know to secure your Pena Palace tickets, pick the right pass, and experience Sintra like an insider.",
    emptyStateText: "No articles published yet — check back soon.",
    featuredLinkText: "Read the guide",
    ctaHeading: "Ready to explore Pena Palace in Sintra?",
    ctaButtonText: "Compare Pena Palace Tickets & Tours →",
    backToGuidesText: "← All Sintra travel guides",
    quickAnswerLabel: "Quick Answer",
    tocLabel: "In This Guide",
    relatedGuidesHeading: "Related Sintra Guides",
    sidebarRelatedHeading: "Related Pena Palace Guides",
    sidebarRecommendedBadge: "Recommended",
    sidebarCompareLinkText: "Compare all tickets & tours →",
    promoRecommendedText: "Recommended Ticket",
  },
};

const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  heroBadge: "PENA PALACE TICKETS",
  heroHeading: "Discover Sintra's Most Iconic Palace",
  heroSubheading:
    "<p>Book your Pena Palace tickets in advance and explore one of Portugal's 7 Wonders. Breathtaking views, romantic architecture, and unforgettable experiences await you.</p>",
  heroImage: "/images/pena-palace-hero.jpg",
  heroImageAlt: "Pena Palace's iconic yellow dome and red romanticist towers overlooking the Sintra mountain landscape",
  heroVideo: "",
  heroGallery: DEFAULT_GALLERY,
  heroFeatures: DEFAULT_HERO_FEATURES,
  heroCtaPrimaryText: "Book Tickets Now",
  heroCtaPrimaryHref: "#tours",
  heroCtaSecondaryText: "Explore Tours",
  heroCtaSecondaryHref: "#tours",
  showFeaturedTour: true,
  featuredTourId: "pena-palace-park-skip-the-line-entry",
  featuredBadgeLabel: "Most Popular Ticket",
  featuredUrgencyText: "Timed Entry Slots Sell Out 3–5 Days in Advance in Peak Season · Reserve Early",
  featuredReasons: [
    "Guaranteed timed entry — no waiting in the box-office line at the park gate",
    "Guaranteed timed entry to Pena Palace's colorful Romanticist interior",
    "Includes full access to Pena Park's 200+ hectares of romantic gardens"
  ],
  sections: DEFAULT_SECTIONS,
  header: DEFAULT_HEADER,
  footer: DEFAULT_FOOTER,
  theme: DEFAULT_THEME,
  metaTitle: "Pena Palace Tickets | Skip-the-Line Access & Fast-Track Passes 2026",
  metaDescription:
    "Book official Pena Palace tickets with guaranteed skip-the-line access. Skip long lines with verified timed-entry passes to Sintra's hilltop palace.",
  focusKeyword: "Pena Palace Tickets",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "",
  ogTitle: "Pena Palace Tickets — Guaranteed Skip-The-Line Access & Fast-Track Passes",
  ogDescription:
    "Secure your timed reservation to explore Pena Palace. Includes Pena Park, guided tour options, and free cancellation.",
  ogImage: "https://commons.wikimedia.org/wiki/Special:FilePath/Image%20of%20Pena%20Palace%2C%20Sintra%2C%20Portugal.jpg",
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
    heroGallery: (() => {
      const g = parseReasons(row.hero_gallery);
      return g.length ? (g as unknown as GalleryImage[]) : DEFAULT_GALLERY;
    })(),
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
  heroGallery: GalleryImage[];
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
      hero_video, hero_gallery, hero_features, hero_cta_primary_text, hero_cta_primary_href,
      hero_cta_secondary_text, hero_cta_secondary_href,
      meta_title, meta_description, focus_keyword,
      canonical_url, og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroBadge}, ${data.heroHeading}, ${data.heroSubheading}, ${data.heroImage},
      ${data.heroImageAlt}, ${data.heroVideo || ""}, ${JSON.stringify(data.heroGallery || [])}::jsonb,
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
      hero_gallery = EXCLUDED.hero_gallery,
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
