import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { resolveRobots } from "@/lib/seo";
import { getSiteChrome } from "@/lib/homepage";
import { hexToRgbTriplet } from "@/lib/color";
import "./globals.css";

export const dynamic = "force-dynamic";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const DEFAULT_OG_IMAGE = `${SITE_URL}/images/thames-hero.jpg`;

// Google Analytics (GA4) measurement ID.
const GA_MEASUREMENT_ID = "G-FLTLV5RF8S";

const touristAttractionJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Thames River Cruise Tickets & Guided Tours",
  url: SITE_URL,
  description:
    "Official & verified Thames River cruise tickets with guaranteed departure times, guided tours, and combined London day-trip options in London, England.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Westminster Pier, Victoria Embankment",
    addressLocality: "London",
    postalCode: "SE1 2PP",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5013,
    longitude: -0.1244,
  },
  // Google's structured-data validator doesn't support aggregateRating on
  // TouristAttraction (it's only recognized on types like Product,
  // LocalBusiness, Recipe, Event, etc.) — it flagged this block as a
  // critical error on the Florence sibling site with the identical block.
  // This site also doesn't operate any Thames cruise itself, so attaching a
  // third-party review aggregate to it isn't appropriate structured data
  // anyway. Removed rather than reattached elsewhere.
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Thames River Cruises",
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
  description:
    "Independent London travel resource dedicated to Thames River cruise tickets, guaranteed departure times, and guided tour bookings.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Thames River Cruises",
  url: SITE_URL,
};

export function generateMetadata(): Metadata {
  const robots = resolveRobots(false);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Thames River Cruise Tickets | Sightseeing & Evening Cruises 2026",
      template: "%s | Thames River Cruises",
    },
    description:
      "Book official Thames River cruise tickets with a guaranteed departure time. Compare sightseeing, evening, and afternoon tea cruises on London's iconic river.",
    keywords: ["Thames River Cruise Tickets", "Thames Cruise", "Thames River Cruise & Boat Tour", "London River Cruise"],
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/icon", type: "image/png" },
      ],
      apple: "/apple-icon",
    },
    alternates: {
      canonical: "/",
    },
    robots,
    openGraph: {
      title: "Thames River Cruise Tickets | Sightseeing & Evening Cruises",
      description:
        "Explore London's iconic river with official Thames cruise tickets. Guaranteed departures, guided tours & free 24h cancellation.",
      type: "website",
      url: SITE_URL,
      siteName: "Thames River Cruises",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 2400,
          height: 1350,
          alt: "Illustration of a Thames river cruise boat passing Tower Bridge, London",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Thames River Cruise Tickets | Sightseeing & Evening Cruises",
      description:
        "Explore London's iconic river with official Thames cruise tickets. Guaranteed departures, guided tours & free 24h cancellation.",
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

function buildThemeStyle(theme: { primary: string; secondary: string; dark: string; accent: string }) {
  const vars: [string, string | null][] = [
    ["--color-canal-primary", hexToRgbTriplet(theme.primary)],
    ["--color-canal-blue", hexToRgbTriplet(theme.secondary)],
    ["--color-canal-ink", hexToRgbTriplet(theme.dark)],
    ["--color-sage-400", hexToRgbTriplet(theme.accent)],
  ];
  const declarations = vars
    .filter(([, value]) => value !== null)
    .map(([name, value]) => `${name}:${value};`)
    .join("");
  return declarations ? `:root{${declarations}}` : "";
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = await getSiteChrome();
  const themeStyle = buildThemeStyle(theme);

  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        {/* Warms up the connection to Google's analytics domains ahead of
            the afterInteractive gtag.js load below, shaving the DNS/TLS
            handshake off its actual request instead of paying for it when
            the script fires. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="font-body bg-[#F4F8FC] text-[#1C2B3A] antialiased selection:bg-navy-700 selection:text-marble-50">
        {themeStyle && <style dangerouslySetInnerHTML={{ __html: themeStyle }} />}
        {/* Google tag (gtag.js) — loaded with next/script's afterInteractive
            strategy so it doesn't block first paint or hydration. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
