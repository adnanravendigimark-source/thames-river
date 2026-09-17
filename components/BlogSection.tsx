import Link from "next/link";
import SafeImage from "./SafeImage";
import { getPosts } from "@/lib/posts";
import { getHomepageContent } from "@/lib/homepage";

export default async function BlogSection() {
  const [allPosts, { sections }] = await Promise.all([getPosts(), getHomepageContent()]);
  const posts = allPosts.filter((p) => !p.noIndex).slice(0, 3);
  const s = sections.blogTeaser;

  if (posts.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20 border-t border-gray-100" id="blog-guides">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#C98A22]">
              {s.eyebrow || "INSIDER GUIDES & TRAVEL TIPS"}
            </p>
            <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl lg:text-[2.15rem] font-bold tracking-tight text-[#6B3113]">
              {s.heading || "Versailles Palace Travel Guides"}
            </h2>
            <p className="mt-2 max-w-xl text-xs sm:text-[13.5px] text-[#2B221D]/80 leading-relaxed">
              {s.subheading || "Essential tips, historical secrets, and visitor insights to plan your visit."}
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center justify-center gap-2 self-start md:self-auto rounded-lg border border-[#6B3113] bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#6B3113] shadow-sm transition-all hover:bg-gray-50 hover:-translate-y-0.5"
          >
            <span>{s.viewAllText || "View All Guides"}</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#C98A22]/40"
            >
              <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-[#6B3113]">
                <SafeImage
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  quality={70}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex rounded-md bg-gray-50 border border-gray-200 px-2 py-0.5 font-bold uppercase tracking-wider text-[#C98A22] text-[10px]">
                    {post.category}
                  </span>
                  {post.readTime && <span className="text-[#2B221D]/60 text-[11px] font-medium">{post.readTime}</span>}
                </div>
                <h3 className="mt-2.5 font-serif text-[15px] sm:text-base font-bold leading-snug text-[#6B3113] group-hover:text-[#C98A22] transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.excerpt && (
                  <p className="mt-2 line-clamp-2 text-xs text-[#2B221D]/80 leading-relaxed">{post.excerpt}</p>
                )}
                <div className="mt-auto pt-4 border-t border-[#F3E5C8]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6B3113] group-hover:text-[#C98A22] transition-colors"
                  >
                    <span>{s.readArticleText || "Read Guide"}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#6B3113] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition shadow-sm hover:bg-[#4E240D]"
          >
            <span>{s.viewAllText || "View All Guides"}</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
