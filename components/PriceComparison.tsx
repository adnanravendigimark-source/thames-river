import { getTours } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";

export default async function PriceComparison() {
  const [tours, { sections }] = await Promise.all([getTours(), getHomepageContent()]);
  const s = sections.price;

  return (
    <section id="prices" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24">
      <div className="max-w-2xl">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#D6A33A]">
          {s.eyebrow}
        </span>
        <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl lg:text-[2.15rem] font-bold text-[#123B27] leading-[1.2] tracking-tight">
          {s.heading}
        </h2>
        <div
          className="rich-content mt-3 text-xs sm:text-sm text-[#26332B]/80 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: s.subheading }}
        />
      </div>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#123B27] text-white">
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.itemLabel}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.priceLabel}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.column1Label}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.column2Label}</th>
              <th className="px-6 py-4 font-semibold text-[11px] uppercase tracking-wider">{s.bestForLabel}</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tours.map((tour, i) => (
              <tr
                key={tour.id}
                className={`transition hover:bg-gray-50 ${
                  tour.featured ? "bg-amber-50/40 font-medium" : i % 2 ? "bg-gray-50/50" : ""
                }`}
              >
                <td className="px-6 py-4 font-semibold text-[#123B27]">{tour.title}</td>
                <td className="px-6 py-4 font-bold text-[#D6A33A]">
                  €{tour.price} <span className="font-normal text-xs text-[#26332B]/60">/ person</span>
                </td>
                <td className="px-6 py-4 text-[#26332B]/80">{tour.priceTableColumn1 || tour.duration}</td>
                <td className="px-6 py-4 text-[#26332B]/80">
                  {tour.priceTableFeature || "Standard Pass"}
                </td>
                <td className="px-6 py-4 text-[#26332B]/80">{tour.bestFor || "All Travelers"}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={tour.href}
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className="inline-flex rounded-lg bg-[#123B27] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#0D2E1E]"
                  >
                    {s.bookLabel}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {s.note && <p className="mt-3.5 text-xs text-[#26332B]/60">{s.note}</p>}
    </section>
  );
}
