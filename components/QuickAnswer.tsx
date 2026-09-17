// TL;DR-style callout right under the article title — helps skimmers
// convert faster and gives search engines a clean, quotable answer for
// featured snippets. Content comes from the admin's per-post "Quick
// Answer callout" field (components/admin/PostForm.tsx); the id is the
// jump target for the "Quick Answer" entry BlogSidebar's table of
// contents prepends when this callout is present.
export default function QuickAnswer({
  children,
  label = "Quick Answer",
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div
      id="quick-answer"
      className="mt-2 flex scroll-mt-24 gap-3 rounded-2xl border border-[#D6A33A]/25 bg-[#D6A33A]/5 p-5"
    >
      <span className="mt-0.5 text-lg">💡</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[#B3841F]">{label}</p>
        <p className="mt-1 text-sm leading-relaxed text-[#26332B]/85">{children}</p>
      </div>
    </div>
  );
}
