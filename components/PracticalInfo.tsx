import { getHomepageContent } from "@/lib/homepage";

export default async function PracticalInfo() {
  const { sections } = await getHomepageContent();
  const s = sections.practical;

  return (
    <section id="practical" className="bg-[#FAFAF9] py-20 sm:py-24 border-b border-gray-200">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-8 lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-[#123B27] font-bold text-lg mb-4">
            ⏱
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#123B27]">{s.hoursHeading}</h3>
          <table className="mt-4 w-full text-xs sm:text-sm">
            <tbody>
              {s.hours.map((row, i) => (
                <tr key={row.range + i} className="border-b border-gray-100 last:border-0">
                  <td className="py-2.5 pr-3 text-[#26332B]/80">{row.range}</td>
                  <td className="py-2.5 text-right font-semibold text-[#123B27]">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {s.hoursNote && <p className="mt-3 text-xs text-[#26332B]/60">{s.hoursNote}</p>}
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-[#123B27] font-bold text-lg mb-4">
            📍
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#123B27]">{s.addressHeading}</h3>
          <p className="mt-4 whitespace-pre-line text-xs sm:text-sm leading-relaxed text-[#26332B]/80">{s.address}</p>
          {s.metro && <p className="mt-3 text-xs font-semibold text-[#D6A33A]">{s.metro}</p>}
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[#D6A33A] font-bold text-lg mb-4">
            💡
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#123B27]">{s.bestTimeHeading}</h3>
          <div
            className="rich-content mt-4 text-xs sm:text-sm text-[#26332B]/80 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: s.bestTimeBody }}
          />
        </div>
      </div>
    </section>
  );
}
