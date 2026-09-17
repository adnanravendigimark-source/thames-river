import SafeImage from "./SafeImage";
import { getHomepageContent } from "@/lib/homepage";

export default async function Hero() {
  const content = await getHomepageContent();

  const heroImageSrc = content.heroImage || "/images/thames-hero.jpg";

  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-center bg-white overflow-hidden">
      {/* Full-bleed Panoramic Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {content.heroVideo ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video
            src={content.heroVideo}
            poster={heroImageSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-[78%_center] sm:object-right-center lg:object-right"
          />
        ) : (
          <SafeImage
            src={heroImageSrc}
            alt={content.heroImageAlt || "A Thames river cruise boat passing Tower Bridge at sunset, London"}
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-[80%_72%] md:object-[78%_72%] lg:object-[82%_75%]"
          />
        )}
        {/* Atmospheric gradient overlay ensuring crystal-clear text readability on mobile and desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 via-50% to-white/30 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/75 sm:via-45% md:from-white/90 md:via-white/50 md:via-50% lg:via-52% md:to-transparent" />
      </div>

      {/* Hero Content Layer (positioned comfortably below header) */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 flex-1 flex flex-col justify-center">
        <div className="max-w-xl lg:max-w-2xl mt-4 sm:mt-6 lg:mt-8">
          {/* Top Eyebrow in Sky Blue */}
          <p className="text-xs sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#1E96E0]">
            {content.heroBadge || "THAMES RIVER CRUISE TICKETS"}
          </p>

          {/* Main Headline */}
          <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.12] tracking-tight text-[#0B2545]">
            {content.heroHeading || "Discover London's Iconic River"}
          </h1>

          {/* Sky Blue Accent Line */}
          <div className="mt-3.5 mb-5 h-[2.5px] w-12 rounded-full bg-[#1E96E0]" />

          {/* Subtitle */}
          <div
            className="text-sm sm:text-base text-[#1C2B3A] leading-relaxed max-w-lg font-normal [&_p]:m-0"
            dangerouslySetInnerHTML={{
              __html:
                content.heroSubheading ||
                "Book your Thames River cruise tickets in advance and see London from the water. Iconic skyline views, live commentary, and unforgettable experiences await you.",
            }}
          />

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <a
              href={content.heroCtaPrimaryHref || "#tours"}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#0B2545] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#081B34] hover:shadow-md hover:-translate-y-0.5"
            >
              <span>{content.heroCtaPrimaryText || "Book Tickets Now"}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href={content.heroCtaSecondaryHref || "#tours"}
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[#1C2B3A]/30 bg-white/40 md:bg-transparent px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#1C2B3A] transition-all hover:bg-white/80 hover:border-[#1C2B3A]/50 hover:-translate-y-0.5"
            >
              <span>{content.heroCtaSecondaryText || "Explore Tours"}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
