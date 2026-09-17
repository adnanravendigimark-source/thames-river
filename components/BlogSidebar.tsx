"use client";

import { useState } from "react";
import Link from "next/link";
import SafeImage from "./SafeImage";
import TableOfContents from "./TableOfContents";
import { CalendarIcon, SearchIcon, TicketIcon } from "./icons";
import type { Post } from "@/lib/posts";
import type { TocItem } from "@/lib/tableOfContents";

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogSidebar({
  popularPosts,
  toc,
  tocLabel = "IN THIS GUIDE",
  relatedHeading = "POPULAR GUIDES",
  compareLinkText = "Compare Passes →",
  recommendedBadge,
}: {
  slug: string;
  popularPosts: Post[];
  toc: TocItem[];
  tocLabel?: string;
  relatedHeading?: string;
  compareLinkText?: string;
  recommendedBadge?: string;
}) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      window.location.href = `/blog?q=${encodeURIComponent(search.trim())}`;
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const popular = popularPosts.slice(0, 4);

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex rounded-xl border border-[#E9E1D3] bg-white overflow-hidden shadow-sm focus-within:border-[#123B27]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search guides..."
          className="w-full bg-transparent px-3.5 py-2.5 text-xs text-[#26332B] placeholder-[#26332B]/60 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex items-center justify-center bg-[#123B27] px-3.5 text-white transition hover:bg-[#0D2E1E]"
        >
          <SearchIcon className="h-4 w-4" />
        </button>
      </form>

      {/* Table of Contents */}
      <TableOfContents items={toc} label={tocLabel} />

      {/* Popular Articles */}
      {popular.length > 0 && (
        <div className="rounded-2xl border border-[#E9E1D3] bg-white p-5 shadow-sm">
          <p className="font-serif text-xs font-bold uppercase tracking-wider text-[#123B27]">
            {relatedHeading}
          </p>
          <div className="mt-4 space-y-3.5">
            {popular.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-center gap-3"
              >
                <div className="relative h-13 w-16 shrink-0 aspect-[4/3] overflow-hidden rounded-xl bg-[#123B27]">
                  <SafeImage
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    quality={65}
                    sizes="80px"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-xs font-bold leading-snug text-[#123B27] transition-colors group-hover:text-[#D6A33A]">
                    {post.title}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-[#26332B]/70 font-medium">
                    <CalendarIcon className="h-3 w-3 text-[#D6A33A]" />
                    {formatDate(post.date)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Compare Tickets Promo Card */}
      <div className="relative overflow-hidden rounded-2xl bg-[#123B27] p-6 text-center text-white shadow-md border border-[#0D2E1E]">
        {recommendedBadge && (
          <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-[#D6A33A]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D6A33A]">
            {recommendedBadge}
          </span>
        )}
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#D6A33A] border border-white/15 shadow-sm">
          <TicketIcon className="h-5 w-5" />
        </div>
        <p className="mt-3.5 font-serif text-base font-bold text-white">
          Compare Pena Palace Tickets &amp; Tours
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-[#DDE5D8]">
          Find the best pass options, timed entry slots and prices in one place.
        </p>
        <a
          href="/#tours"
          className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#D6A33A] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#B3841F] hover:scale-[1.02]"
        >
          {compareLinkText}
        </a>
      </div>

      {/* Newsletter Card */}
      <div className="rounded-2xl border border-[#E9E1D3] bg-white p-5 shadow-sm">
        <p className="font-serif text-xs font-bold uppercase tracking-wider text-[#123B27]">
          NEWSLETTER
        </p>
        <p className="mt-2 text-xs text-[#26332B]/80 leading-relaxed">
          Get travel tips, guides and exclusive deals straight to your inbox.
        </p>
        {subscribed ? (
          <p className="mt-3 text-xs font-semibold text-[#D6A33A]">✓ Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubscribe} className="mt-3 space-y-2">
            <div className="flex rounded-lg border border-[#E9E1D3] bg-white overflow-hidden focus-within:border-[#123B27]">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="w-full bg-transparent px-3 py-2 text-xs text-[#26332B] placeholder-[#26332B]/60 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center bg-[#123B27] px-3 text-white transition hover:bg-[#0D2E1E]"
              >
                →
              </button>
            </div>
            <label className="flex items-start gap-1.5 text-[11px] text-[#26332B]/80 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 rounded border-[#E9E1D3] text-[#123B27] focus:ring-[#123B27]"
              />
              <span>I agree to receive emails and updates.</span>
            </label>
          </form>
        )}
      </div>
    </aside>
  );
}
