import SafeImage from "./SafeImage";
import { getHomepageContent } from "@/lib/homepage";

export default async function Hero() {
  const content = await getHomepageContent();

  const heroImageSrc = content.heroImage || "/images/pena-palace-hero.jpg";

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
            alt={content.heroImageAlt || "Pena Palace's iconic yellow and red towers in Sintra, Portugal"}
            fill
            priority
            quality={75}
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
          {/* Top Eyebrow in Palace Gold */}
          <p className="text-xs sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#D6A33A]">
            {content.heroBadge || "PENA PALACE TICKETS"}
          </p>

          {/* Main Headline */}
          <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.12] tracking-tight text-[#123B27]">
            {content.heroHeading || "Discover Sintra’s Most Iconic Palace"}
          </h1>

          {/* Palace Gold Accent Line */}
          <div className="mt-3.5 mb-5 h-[2.5px] w-12 rounded-full bg-[#D6A33A]" />

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#26332B] leading-relaxed max-w-lg font-normal">
            Book your Pena Palace tickets in advance and explore one of Portugal&apos;s 7 Wonders. Breathtaking views, romantic architecture, and unforgettable experiences await you.
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <a
              href={content.heroCtaPrimaryHref || "#tours"}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#123B27] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0D2E1E] hover:shadow-md hover:-translate-y-0.5"
            >
              <span>{content.heroCtaPrimaryText || "Book Tickets Now"}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href={content.heroCtaSecondaryHref || "#tours"}
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[#26332B]/30 bg-white/40 md:bg-transparent px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#26332B] transition-all hover:bg-white/80 hover:border-[#26332B]/50 hover:-translate-y-0.5"
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
