import type { TocItem } from "@/lib/tableOfContents";

export default function TableOfContents({
  items,
  label = "IN THIS GUIDE",
}: {
  items: TocItem[];
  label?: string;
}) {
  const sections = items.filter((item) => item.level === 2);
  if (sections.length < 2) return null;

  return (
    <div className="rounded-2xl border border-[#E9E1D3] bg-white p-5 shadow-sm">
      <p className="font-serif text-xs font-bold uppercase tracking-wider text-[#123B27]">
        {label}
      </p>
      <ol className="mt-3.5 space-y-2 border-l-2 border-[#E9E1D3] pl-3.5 text-xs">
        {sections.map((item, i) => {
          const cleanText = item.text.replace(/^\d+\.\s*/, "");
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="flex items-baseline gap-1.5 font-medium text-[#26332B]/80 transition hover:text-[#D6A33A]"
              >
                <span aria-hidden="true" className="shrink-0 font-bold text-[#123B27]">
                  {i + 1}.
                </span>
                <span className="leading-snug">{cleanText}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
