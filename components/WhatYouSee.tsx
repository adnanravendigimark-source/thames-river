import SafeImage from "./SafeImage";
import { getHomepageContent } from "@/lib/homepage";

export default async function WhatYouSee() {
  const { sections } = await getHomepageContent();
  const s = sections.why;

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: admin-editable photo (What You See section) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl shadow-black/5">
              <SafeImage
                src={s.image}
                alt={s.imageAlt}
                fill
                quality={70}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#D6A33A]">
              {s.eyebrow}
            </p>

            <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl lg:text-[2.15rem] font-bold text-[#123B27] leading-[1.2] tracking-tight">
              {s.heading}
            </h2>

            {/* Palace Gold Accent Line */}
            <div className="mt-3.5 mb-5 h-[2.5px] w-10 rounded-full bg-[#D6A33A]" />

            <div
              className="rich-content text-xs sm:text-[13.5px] text-[#26332B]/85 leading-relaxed max-w-lg"
              dangerouslySetInnerHTML={{ __html: s.intro }}
            />
          </div>
        </div>

        {/* Sample visit timeline + architectural discoveries — admin-editable */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border border-gray-200 bg-[#F9FAFB] p-7 shadow-sm">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#123B27]">{s.timelineHeading}</h3>
            <ol className="mt-6 space-y-6 border-l-2 border-[#D6A33A]/40 pl-6">
              {s.timeline.map((row, i) => (
                <li key={row.time + i} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-[#D6A33A] ring-4 ring-[#D6A33A]/20" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D6A33A]">{row.time}</span>
                  <p className="mt-1 text-sm font-semibold text-[#123B27]">{row.step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-[#F9FAFB] p-7 shadow-sm">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#123B27]">{s.learnHeading}</h3>
            <ul className="mt-5 space-y-3">
              {s.learn.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-3.5 text-sm text-[#26332B]"
                >
                  <span className="font-bold text-[#D6A33A]">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {s.note && <p className="mt-4 text-xs text-[#26332B]/60">{s.note}</p>}
          </div>
        </div>

        {/* Optional 3rd list — key entrances / good-to-know facts */}
        {s.extraItems.length > 0 && (
          <div className="mt-10">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#123B27]">{s.extraHeading}</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {s.extraItems.map((point, i) => (
                <div
                  key={point.name + i}
                  className="rounded-2xl border border-[#E9E1D3] bg-white p-5 shadow-sm transition hover:border-[#D6A33A]"
                >
                  <p className="text-sm font-bold text-[#D6A33A]">{point.name}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#26332B]/80">{point.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA banner */}
        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-[#123B27] p-8 text-white shadow-xl border border-[#0D2E1E] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base sm:text-lg font-bold text-white max-w-xl">{s.ctaText}</p>
          <a
            href={s.ctaHref}
            className="shrink-0 rounded-lg bg-[#D6A33A] px-6 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#B3841F] hover:scale-[1.02]"
          >
            {s.ctaButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
