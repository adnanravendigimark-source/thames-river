import { getHomepageContent } from "@/lib/homepage";

export default async function CtaBanner() {
  const { sections } = await getHomepageContent();
  const s = sections.ctaBanner;

  return (
    <section className="py-14 sm:py-16 bg-[#F7F3EA]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-[#123B27] px-6 py-8 sm:px-10 sm:py-10 shadow-xl shadow-black/15 border border-[#0D2E1E]">
          {/* Subtle Palace Gold Architectural Watermarks */}
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-56 w-56 opacity-10">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="#D6A33A"
              strokeWidth="2"
              className="h-full w-full"
            >
              <path d="M10 80h80M20 80V40c0-15 15-25 30-25s30 10 30 25v40" />
              <path d="M50 15V5M46 5h8M30 40c5-10 10-15 20-15s15 5 20 15" />
            </svg>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 opacity-5">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="#D6A33A"
              strokeWidth="2"
              className="h-full w-full"
            >
              <path d="M10 90h80M20 90V50M35 90V30M50 90V15M65 90V40M80 90V60" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-4 sm:gap-5">
              {/* Line Art Castle Icon */}
              <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#D6A33A] border border-white/15">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D6A33A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M4 22h16M7 22V14M17 22V14M12 22V14M4 14h16M12 4L4 14M12 4l8 10M12 2v2" />
                </svg>
              </div>

              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {s.heading}
                </h2>
                <p className="mt-1 text-xs text-[#DDE5D8]">
                  {s.subtext}
                </p>
              </div>
            </div>

            {/* Right Action Button */}
            <a
              href={s.buttonHref}
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#D6A33A] px-7 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-[#B3841F] hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>{s.buttonText}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
