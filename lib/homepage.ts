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
  logoAlt: "Versailles Palace Tickets",
  logoLine1: "Versailles Palace",
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
    "<strong>Independent Versailles Palace & Paris Ticket Resource.</strong> We curate official skip-the-line Versailles Palace tickets, Estate of Trianon entry, guided tours, and Paris combo passes with verified authorized providers.",
  columns: [
    {
      title: "Versailles Palace Tickets & Passes",
      links: [
        { label: "Palace Entry (Hall of Mirrors)", href: "/#tours" },
        { label: "Skip-the-Line Priority Access", href: "/#palace-towers-experience" },
        { label: "Estate of Trianon Ticket (Gardens & Grounds)", href: "/#tours" },
        { label: "Pass Comparison & Prices", href: "/#prices" },
        { label: "Versailles Palace Visitor FAQs", href: "/#faq" },
      ],
    },
    {
      title: "Palace Information",
      links: [
        { label: "About Versailles Palace", href: "/about" },
        { label: "Paris Travel Blog & Guides", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  addressHeading: "Palace of Versailles Entrance",
  addressLine1: "Place d'Armes, Cour d'Honneur",
  addressLine2: "78000 Versailles, France · Versailles Château Rive Gauche RER Station",
  copyrightText:
    "Versailles Palace Tickets. All prices in EUR. Official tickets subject to Château de Versailles quota rules and seasonal availability.",
};

export const DEFAULT_THEME: ThemeColors = {
  primary: "#6B3113",   // Burnt Terracotta
  secondary: "#8A3F19", // Terracotta
  dark: "#2B221D",      // Warm Charcoal
  accent: "#C98A22",    // Antique Gold
};

export const DEFAULT_HERO_FEATURES: HeroFeature[] = [
  { title: "Official Tickets", subtitle: "100% Authorized" },
  { title: "Skip The Line", subtitle: "Save time, enjoy more" },
  { title: "Palace Access", subtitle: "Explore Versailles Palace" },
  { title: "24/7 Support", subtitle: "We're here to help" },
];

export const DEFAULT_GALLERY: GalleryImage[] = [
  {
    src: "/images/versailles-hero.jpg",
    alt: "The golden gates and gilded facade of the Palace of Versailles at golden hour",
    label: "Palace of Versailles",
  },
  {
    src: "/images/versailles-tour-1.jpg",
    alt: "Close-up of the Palace of Versailles's gilded gates and ornate ironwork",
    label: "Palace Gates",
  },
  {
    src: "/images/versailles-tour-2.jpg",
    alt: "The Hall of Mirrors' gilded arches and chandeliers inside the Palace of Versailles",
    label: "Hall of Mirrors",
  },
  {
    src: "/images/versailles-tour-3.jpg",
    alt: "Formal French gardens and fountains at the Palace of Versailles",
    label: "Gardens of Versailles",
  },
  {
    src: "/images/versailles-tour-5.jpg",
    alt: "Thatched-roof cottages of the Hameau de la Reine at Marie-Antoinette's estate",
    label: "Hameau de la Reine",
  },
  {
    src: "/images/versailles-tour-4.jpg",
    alt: "Fountains performing at the Palace of Versailles during the Grandes Eaux Musicales show",
    label: "Musical Fountains Show",
  },
];

export const DEFAULT_SECTIONS: HomepageSections = {
  tours: {
    eyebrow: "Compare & Book Tickets",
    heading: "Choose Your Perfect Versailles Experience",
    subheading: "Skip-the-line entry, Estate of Trianon tickets, and expert-led guided palace tours.",
  },
  highlights: {
    eyebrow: "The Seat of the Sun King",
    heading: "5 Must-See Wonders of the Palace of Versailles",
    subheading:
      "Built up from a royal hunting lodge by King Louis XIV into the seat of French power by 1682, Versailles is one of the finest expressions of French Baroque architecture in the world and a UNESCO World Heritage Site.",
    cards: [
      {
        title: "The Hall of Mirrors",
        body: "Walk the 73-metre gallery lined with 357 mirrors where the Treaty of Versailles was signed in 1919.",
        icon: "🏰",
      },
      {
        title: "King's & Queen's State Apartments",
        body: "Explore gilded state rooms decorated with frescoed ceilings, stucco reliefs, and original royal furnishings.",
        icon: "🎨",
      },
      {
        title: "The Gardens' Grand Canal",
        body: "Stroll 800 hectares of André Le Nôtre's formal gardens, home to the mile-long Grand Canal and hundreds of fountains.",
        icon: "🌳",
      },
      {
        title: "The Estate of Trianon",
        body: "Visit Marie-Antoinette's Hameau de la Reine and the Petit Trianon, a quieter royal retreat from the main Palace.",
        icon: "✨",
      },
    ],
  },
  why: {
    eyebrow: "Why Visit the Palace of Versailles?",
    heading: "A Masterpiece of French Baroque Art, History and Architecture",
    intro:
      "<p>The Palace of Versailles is the crown jewel of French royal history. Explore the gilded seat of Louis XIV's court, wander centuries-old formal gardens, and enjoy unforgettable views across the Grand Canal.</p>",
    image: "/images/versailles-tour-3.jpg",
    imageAlt: "Formal garden path with a view toward the Palace of Versailles' gilded facade",
    timelineHeading: "Recommended Visit Schedule",
    timeline: [
      { time: "0:00", step: "Arrive at the Palace gates 15 minutes before your timed entry slot to allow for security screening" },
      { time: "0:15", step: "Enter the Palace and explore the State Apartments and Royal Chapel" },
      { time: "0:50", step: "Walk the Hall of Mirrors and step onto the garden-facing balconies" },
      { time: "1:20", step: "Descend into the Gardens of Versailles to explore the Grand Canal and fountains" },
      { time: "1:50", step: "Take the shuttle train or walk to the Estate of Trianon" },
      { time: "2:30", step: "Visit the Hameau de la Reine, Marie-Antoinette's rustic hamlet" },
    ],
    learnHeading: "Architectural Secrets You Will Uncover",
    learn: [
      "Iconic 17th-century French Baroque architecture",
      "André Le Nôtre's formal gardens — a historic engineering and landscape marvel",
      "Panoramic views across the Grand Canal and formal parterres",
      "A must-see for every traveler to France",
    ],
    note: "All tickets include digital mobile delivery with instant barcode scanning at the Palace turnstiles.",
    extraHeading: "Key Palace & Garden Entrances",
    extraItems: [
      { name: "Cour d'Honneur Main Gate", note: "Main entrance for all Palace timed-entry ticket holders" },
      { name: "Gardens Entrance (Grille de la Reine)", note: "Alternate entrance closer to the Gardens and Trianon shuttle stop" },
      { name: "Estate of Trianon Gate", note: "Located a 15–20 minute walk from the main palace within the gardens" },
    ],
    ctaText: "Ready to explore the Palace of Versailles? Timed entry slots sell out days ahead in peak season. Reserve your slot now.",
    ctaButtonText: "Book Versailles Palace Tickets Now →",
    ctaHref: "#tours",
  },
  ctaBanner: {
    heading: "Ready to Explore the Palace of Versailles?",
    subtext: "Book your official tickets today and make memories that last a lifetime.",
    buttonText: "Explore Tickets",
    buttonHref: "#tours",
  },
  tower: {
    eyebrow: "The Ultimate Royal Escape",
    heading: "Explore the Palace of Versailles's Hall of Mirrors & State Apartments",
    body:
      "Wandering the Palace of Versailles's State Apartments is an unforgettable bucket-list experience. Pass beneath the gilded Royal Gate, walk the 73-metre Hall of Mirrors, wander frescoed state rooms fit for the Sun King, and step onto balconies overlooking the formal gardens below.",
    bullets: [
      "Strictly limited timed entry keeps the historic interior rooms comfortable and uncrowded",
      "Close-up vantage point of the Palace's gilded stucco, frescoed ceilings, and period furnishings",
      "Fascinating architectural walk through French Baroque and Classical influences built between 1661 and 1710",
      "Panoramic views across the Gardens of Versailles and the mile-long Grand Canal",
    ],
    ctaButtonText: "See Versailles Palace Tickets & Tours",
    ctaHref: "#tours",
    images: [
      {
        src: "/images/versailles-tour-1.jpg",
        alt: "Golden gates and gilded facade of the Palace of Versailles",
        label: "Palace Facade",
      },
      {
        src: "/images/versailles-tour-2.jpg",
        alt: "Gilded Hall of Mirrors inside the Palace of Versailles",
        label: "Hall of Mirrors",
      },
      {
        src: "/images/versailles-tour-6.jpg",
        alt: "The Palace of Versailles at sunset overlooking the gardens",
        label: "Palace at Sunset",
      },
      {
        src: "/images/versailles-tour-3.jpg",
        alt: "Panoramic view of the Gardens of Versailles from the Water Parterre",
        label: "Water Parterre Terrace",
      },
    ],
  },
  practical: {
    hoursHeading: "Palace of Versailles Opening Hours (2026)",
    hours: [
      { range: "Main Palace (Timed Entry Slot)", time: "9:00 AM – 6:30 PM (Last entry 6:00 PM)" },
      { range: "Gardens of Versailles", time: "8:00 AM – 8:30 PM (Seasonal hours may vary)" },
      { range: "Estate of Trianon", time: "12:00 PM – 6:30 PM (Last entry 6:00 PM)" },
      { range: "Winter Hours (November – March)", time: "9:00 AM – 5:30 PM (Last entry 5:00 PM)" },
      { range: "Weekly Closure", time: "Closed every Monday, plus a small number of French public holidays" },
    ],
    hoursNote: "Entry to the main Palace requires a paid, timed ticket — there is no free admission for most visitors. Booking online in advance lets you skip the on-site ticket-office queue.",
    addressHeading: "Location & Arrival Information",
    address:
      "Place d'Armes, 78000 Versailles, France.\nLocated a short 10-minute walk from Versailles Château Rive Gauche RER station.",
    metro: "Take the RER C train from central Paris to Versailles Château Rive Gauche station, then walk 10 minutes down Avenue de Paris to the main Palace gates.",
    bestTimeHeading: "Best Time to Visit the Palace of Versailles",
    bestTimeBody:
      "The 9:00 AM opening slot offers the coolest temperatures, softest light, and thinnest crowds before tour buses arrive from Paris. The final entry slots before 6:00 PM provide warm afternoon light across the gilded facade and quieter gardens.",
  },
  price: {
    eyebrow: "Transparent Comparison",
    heading: "Compare Versailles Palace Tickets, Tours & Combos",
    subheading:
      "Find the ideal ticket for your Paris itinerary. Compare inclusions, palace access, duration, and prices side by side.",
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
    heading: "Versailles Palace Tickets & Paris FAQs",
  },
  notFound: {
    heading: "This page seems to have wandered off into the Gardens of Versailles.",
    body: "The page you are looking for does not exist or may have been moved. Explore our top Versailles Palace tickets and Paris tours below.",
    primaryButtonText: "Compare Versailles Palace Tickets & Passes →",
    primaryButtonHref: "/#tours",
    secondaryButtonText: "Read the Paris Travel Guide",
    secondaryButtonHref: "/blog",
  },
  blogTeaser: {
    eyebrow: "Paris Travel & Architecture Guides",
    heading: "Versailles Palace & Paris Insider Guides",
    subheading:
      "Expert tips on booking timed entry slots, ticket comparisons, avoiding queues, and combining the Palace of Versailles with the rest of Paris.",
    viewAllText: "View All Guides",
    readArticleText: "Read Guide",
  },
  blogPage: {
    eyebrow: "Versailles Palace Travel & Ticket Guides",
    heading: "Versailles Palace Guides, Visitor Tips & History",
    subheading: "Everything you need to know to secure your Versailles Palace tickets, pick the right pass, and experience Paris like an insider.",
    emptyStateText: "No articles published yet — check back soon.",
    featuredLinkText: "Read the guide",
    ctaHeading: "Ready to explore the Palace of Versailles?",
    ctaButtonText: "Compare Versailles Palace Tickets & Tours →",
    backToGuidesText: "← All Paris travel guides",
    quickAnswerLabel: "Quick Answer",
    tocLabel: "In This Guide",
    relatedGuidesHeading: "Related Paris Guides",
    sidebarRelatedHeading: "Related Versailles Palace Guides",
    sidebarRecommendedBadge: "Recommended",
    sidebarCompareLinkText: "Compare all tickets & tours →",
    promoRecommendedText: "Recommended Ticket",
  },
};

const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  heroBadge: "VERSAILLES PALACE TICKETS",
  heroHeading: "Discover France's Greatest Royal Palace",
  heroSubheading:
    "<p>Book your Palace of Versailles tickets in advance and explore the opulent Hall of Mirrors and King's State Apartments. Breathtaking gardens, royal history, and unforgettable experiences await you.</p>",
  heroImage: "/images/versailles-hero.jpg",
  heroImageAlt: "The golden gates and gilded facade of the Palace of Versailles under a clear blue sky",
  heroVideo: "",
  heroGallery: DEFAULT_GALLERY,
  heroFeatures: DEFAULT_HERO_FEATURES,
  heroCtaPrimaryText: "Book Tickets Now",
  heroCtaPrimaryHref: "#tours",
  heroCtaSecondaryText: "Explore Tours",
  heroCtaSecondaryHref: "#tours",
  showFeaturedTour: true,
  featuredTourId: "versailles-palace-skip-the-line-ticket",
  featuredBadgeLabel: "Most Popular Ticket",
  featuredUrgencyText: "Timed Entry Slots Sell Out 3–5 Days in Advance in Peak Season · Reserve Early",
  featuredReasons: [
    "Guaranteed timed entry — no waiting in the box-office line at the Cour d'Honneur",
    "Guaranteed timed entry to the Palace's State Apartments and Hall of Mirrors",
    "Skip-the-line access to one of the most visited royal residences in the world"
  ],
  sections: DEFAULT_SECTIONS,
  header: DEFAULT_HEADER,
  footer: DEFAULT_FOOTER,
  theme: DEFAULT_THEME,
  metaTitle: "Versailles Palace Tickets | Skip-the-Line Access & Fast-Track Passes 2026",
  metaDescription:
    "Book official Versailles Palace tickets with guaranteed skip-the-line access. Skip long lines with verified timed-entry passes to France's grandest royal palace.",
  focusKeyword: "Versailles Palace Tickets",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "",
  ogTitle: "Versailles Palace Tickets — Guaranteed Skip-The-Line Access & Fast-Track Passes",
  ogDescription:
    "Secure your timed reservation to explore the Palace of Versailles. Includes the Gardens, guided tour options, and free cancellation.",
  ogImage: "/images/versailles-hero.jpg",
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
