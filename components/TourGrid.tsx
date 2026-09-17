import SafeImage from "./SafeImage";
import { getTours } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";
import { stripHtml } from "@/lib/seo";
import { LockIcon } from "./icons";

export default async function TourGrid() {
  const [toursRaw, homepage] = await Promise.all([getTours(), getHomepageContent()]);
  const s = homepage.sections.tours;
  const bookNowText = homepage.header.bookNowText || "Book Tickets";

  // Recommended Tour (admin → Recommended Tour panel): pin the chosen tour
  // first in the grid, matching the admin UI's own description of what
  // toggling this on does.
  const recommendedId = homepage.showFeaturedTour ? homepage.featuredTourId : "";
  const tours = recommendedId
    ? [...toursRaw].sort((a, b) => (a.id === recommendedId ? -1 : b.id === recommendedId ? 1 : 0))
    : toursRaw;

  return (
    <section id="tours" className="py-16 sm:py-20 bg-[#FAFAF9]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header — admin-editable (Tour Grid section) */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#D6A33A]">
            {s.eyebrow}
          </p>
          <h2 className="mt-2.5 font-serif text-3xl sm:text-[2.25rem] font-bold text-[#123B27] tracking-tight">
            {s.heading}
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#26332B]/80">
            {s.subheading}
          </p>
        </div>

        {/* Ticket Cards Grid — one card per tour from the admin Tours list */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tours.map((tour) => {
            const isRecommended = !!recommendedId && tour.id === recommendedId;
            return (
            <div
              key={tour.id}
              className={`group flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 ${
                isRecommended || tour.featured
                  ? "border-2 border-[#D6A33A] shadow-lg shadow-[#D6A33A]/10 relative ring-1 ring-[#D6A33A]/20"
                  : "border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#D6A33A]/40"
              }`}
            >
              {/* Card Image & Overlay Badges */}
              <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-[#123B27]">
                <SafeImage
                  src={tour.image}
                  alt={tour.imageAlt}
                  fill
                  quality={70}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Ribbon Badge — Recommended Tour badge takes priority over the
                    tour's own ribbon text when this is the admin-picked tour */}
                {(isRecommended || tour.ribbon) && (
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-md bg-[#D6A33A] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    <span>👑</span>
                    <span>{isRecommended ? (homepage.featuredBadgeLabel || "Recommended") : tour.ribbon}</span>
                  </div>
                )}

                {/* Rating Badge Floating Bottom Left (placeholder until real reviews exist) */}
                {tour.rating !== undefined && (
                  <div className="absolute bottom-2.5 left-2.5 z-10 inline-flex items-center gap-1 rounded-md bg-white/95 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-[#123B27] shadow-sm">
                    <span className="text-[#00B67A]">★</span>
                    <span>{tour.rating}</span>
                    <span className="text-[#26332B]/70 font-normal">({tour.reviews})</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5">
                {/* Title */}
                <h3 className="font-serif text-[15px] sm:text-base font-bold text-[#123B27] leading-snug group-hover:text-[#D6A33A] transition-colors line-clamp-2 min-h-[44px]">
                  <a href={tour.href} target="_blank" rel="noopener nofollow sponsored">
                    {tour.title}
                  </a>
                </h3>

                {/* Snippet Description */}
                <p className="mt-1.5 text-xs text-[#26332B]/80 leading-relaxed line-clamp-2">
                  {stripHtml(tour.description)}
                </p>

                {/* Feature Tags — first 3 admin "Includes" items, boxed
                    (Best for/recommend-reasons moved off this card to keep
                    it short; Best for still shows in the Price Comparison
                    table below). */}
                {tour.includes.length > 0 && (
                  <div className="mt-4 space-y-1.5">
                    {tour.includes.slice(0, 3).map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 rounded-md bg-gray-50 px-2.5 py-1.5 text-[11.5px] text-[#26332B] border border-gray-100"
                      >
                        <span className="mt-0.5 text-[#123B27] font-bold shrink-0">✓</span>
                        <span className="leading-tight font-medium line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Duration — admin → Tours & Tickets → "Duration" field */}
                {tour.duration && (
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#26332B]/70">
                    <span>⏱</span>
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                )}

                {/* Bottom Row: Price & CTA */}
                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-between pt-3.5 border-t border-gray-100">
                    <div>
                      <span className="block text-[9.5px] font-bold uppercase tracking-wider text-[#26332B]/70">
                        FROM
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-xl sm:text-2xl font-bold text-[#123B27]">
                          €{tour.price}
                        </span>
                        <span className="text-[11px] text-[#26332B]/70">/person</span>
                      </div>
                    </div>

                    <a
                      href={tour.href}
                      target="_blank"
                      rel="noopener nofollow sponsored"
                      className="inline-flex items-center justify-center rounded-lg bg-[#123B27] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#0D2E1E] hover:shadow-md"
                    >
                      {bookNowText}
                    </a>
                  </div>
                  {isRecommended && homepage.featuredUrgencyText && (
                    <p className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-[#D6A33A]">
                      <LockIcon className="h-3 w-3" /> {homepage.featuredUrgencyText}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
}
