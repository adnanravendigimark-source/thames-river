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

const DEFAULT_OG_IMAGE = `${SITE_URL}/images/versailles-hero.jpg`;

// Google Analytics (GA4) measurement ID.
const GA_MEASUREMENT_ID = "G-FLTLV5RF8S";

const touristAttractionJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Versailles Palace Tickets & Guided Tours",
  url: SITE_URL,
  description:
    "Official & verified Palace of Versailles tickets with guaranteed skip-the-line entry, guided tours, and combined Paris day-trip options in Versailles, France.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Place d'Armes",
    addressLocality: "Versailles",
    postalCode: "78000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8049,
    longitude: 2.1204,
  },
  // Google's structured-data validator doesn't support aggregateRating on
  // TouristAttraction (it's only recognized on types like Product,
  // LocalBusiness, Recipe, Event, etc.) — it flagged this block as a
  // critical error on the Florence sibling site with the identical block.
  // This site also doesn't operate the Palace of Versailles itself, so
  // attaching a third-party review aggregate to it isn't appropriate
  // structured data anyway. Removed rather than reattached elsewhere.
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Versailles Palace Tickets",
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
  description:
    "Independent Versailles travel resource dedicated to Palace of Versailles tickets, skip-the-line entry, and guided tour bookings.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Versailles Palace Tickets",
  url: SITE_URL,
};

export function generateMetadata(): Metadata {
  const robots = resolveRobots(false);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Versailles Palace Tickets | Skip-the-Line Entry 2026",
      template: "%s | Versailles Palace Tickets",
    },
    description:
      "Book official Palace of Versailles tickets with skip-the-line entry. Bypass long lines with verified timed-entry passes to France's grandest royal château.",
    keywords: ["Versailles Palace Tickets", "Versailles Tickets", "Versailles Skip the Line", "Palace of Versailles Guided Tour"],
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
      title: "Versailles Palace Tickets | Skip-the-Line Entry",
      description:
        "Explore the opulent Palace of Versailles with official skip-the-line tickets. Fast-track entry, guided tours & free 24h cancellation.",
      type: "website",
      url: SITE_URL,
      siteName: "Versailles Palace Tickets",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 2400,
          height: 1350,
          alt: "Illustration of the Palace of Versailles' golden facade and gardens, France",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Versailles Palace Tickets | Skip-the-Line Entry",
      description:
        "Explore the opulent Palace of Versailles with official skip-the-line tickets. Fast-track entry, guided tours & free 24h cancellation.",
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
      <body className="font-body bg-[#FBF3E4] text-[#2B221D] antialiased selection:bg-navy-700 selection:text-marble-50">
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
