import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TourGrid from "@/components/TourGrid";
import WhatYouSee from "@/components/WhatYouSee";
import DomeClimbExperience from "@/components/DomeClimbExperience";
import PracticalInfo from "@/components/PracticalInfo";
import PriceComparison from "@/components/PriceComparison";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { getTours } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";
import { resolveRobots, resolveCanonical, resolveOg, resolveAbsoluteUrl, stripHtml } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const homepage = await getHomepageContent();
  const og = resolveOg(
    { ogTitle: homepage.ogTitle, ogDescription: homepage.ogDescription, ogImage: homepage.ogImage },
    { title: homepage.heroHeading, description: stripHtml(homepage.heroSubheading), image: homepage.heroImage }
  );
  return {
    ...(homepage.metaTitle.trim() ? { title: homepage.metaTitle } : {}),
    ...(homepage.metaDescription.trim() ? { description: homepage.metaDescription } : {}),
    alternates: { canonical: resolveCanonical("/", homepage.canonicalUrl) },
    robots: resolveRobots(homepage.noIndex, homepage.noFollow),
    openGraph: { title: og.title, description: og.description, url: "/", images: og.image ? [{ url: og.image }] : undefined },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function HomePage() {
  const tours = await getTours();
  const productJsonLd = tours
    .filter((t) => t.featured)
    .map((t) => ({
      "@context": "https://schema.org",
      "@type": "Product",
      name: t.title,
      description: t.description.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
      // Google Search Console's Merchant listings check flags Product
      // structured data missing an "image" as a critical error.
      image: resolveAbsoluteUrl(t.image),
      // No aggregateRating block here on purpose — this site does not have
      // real, verified review data to publish, and Google penalizes
      // AggregateRating/Review structured data that can't be substantiated.
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: t.price,
        availability: "https://schema.org/InStock",
        url: t.href,
      },
    }));

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TourGrid />
        <WhatYouSee />
        <DomeClimbExperience />
        <PracticalInfo />
        <PriceComparison />
        <BlogSection />
        <FAQSection />
        <CtaBanner />
      </main>
      <Footer />
      {productJsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
