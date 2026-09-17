import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import BlogIndexContainer from "@/components/BlogIndexContainer";
import { getPosts } from "@/lib/posts";
import { getBlogSeoSettings } from "@/lib/settings";
import { getHomepageContent } from "@/lib/homepage";
import { resolveRobots, resolveCanonical, resolveOg, buildBreadcrumbJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getBlogSeoSettings();
  const og = resolveOg(settings, { title: settings.metaTitle, description: settings.metaDescription });
  return {
    title: settings.metaTitle || "Pena Palace Blog | Tickets, Tours & Visitor Guides 2026",
    description: settings.metaDescription || "Tips, ticket comparisons and travel insights to help you experience Pena Palace and Sintra.",
    alternates: { canonical: resolveCanonical("/blog", settings.canonicalUrl) },
    robots: resolveRobots(settings.noIndex, settings.noFollow),
    openGraph: { title: og.title, description: og.description, url: "/blog", type: "website", images: og.image ? [{ url: og.image }] : undefined },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function BlogIndexPage() {
  const [posts, { sections, heroImage, heroImageAlt }] = await Promise.all([getPosts(), getHomepageContent()]);
  const s = sections.blogPage;
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Blog Hero Banner — matching homepage Hero aesthetic */}
        <section className="relative overflow-hidden bg-white border-b border-gray-100">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <SafeImage
              src="/images/pena-palace-hero.jpg"
              alt={heroImageAlt || "Pena Palace illuminated on the Sintra hills"}
              fill
              priority
              quality={75}
              sizes="100vw"
              className="object-cover object-[80%_center] md:object-[78%_center] lg:object-right"
            />
            {/* Atmospheric gradient matching homepage Hero section */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 via-45% md:from-white/90 md:via-white/60 md:via-50% lg:via-52% to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20">
            <div className="max-w-2xl">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="text-xs font-medium text-[#26332B]/70">
                <ol className="flex items-center gap-1.5">
                  <li>
                    <Link href="/" className="hover:text-[#D6A33A] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li className="text-[#26332B]/40">&gt;</li>
                  <li className="font-semibold text-[#123B27]" aria-current="page">
                    Blog &amp; Guides
                  </li>
                </ol>
              </nav>

              <h1 className="mt-3.5 font-serif text-3xl font-bold tracking-tight text-[#123B27] sm:text-4xl lg:text-5xl">
                {s.heading || "Pena Palace Travel Guides"}
              </h1>

              {/* Palace Gold Accent Line */}
              <div className="mt-3.5 mb-4 h-[2.5px] w-12 rounded-full bg-[#D6A33A]" />

              <p className="mt-2 text-xs leading-relaxed text-[#26332B]/85 sm:text-sm">
                {s.subheading || "Tips, ticket comparisons and travel guides to help you experience Pena Palace and the Sintra hills."}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <BlogIndexContainer
          posts={posts}
          emptyStateText={s.emptyStateText}
          ctaHeading={s.ctaHeading || "Ready to explore Pena Palace?"}
          ctaBody="Best pass prices, guaranteed timed entry, and instant confirmation."
          ctaButtonText={s.ctaButtonText || "Compare Pena Palace Tickets →"}
        />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}
