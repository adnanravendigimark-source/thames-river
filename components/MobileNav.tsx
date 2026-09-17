"use client";

import { useState } from "react";
import Link from "next/link";
import { NavLink } from "@/lib/homepage";

export default function MobileNav({
  links,
  ctaText,
  ctaHref,
}: {
  links: NavLink[];
  ctaText: string;
  ctaHref: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E9E1D3] bg-[#F7F3EA] text-[#123B27] transition hover:bg-[#E9E1D3]/40"
      >
        {open ? (
          <span className="text-xl font-bold">✕</span>
        ) : (
          <span className="text-xl font-bold">☰</span>
        )}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-20 z-50 border-b border-[#E9E1D3] bg-[#F7F3EA] p-6 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-bold text-[#26332B] transition hover:text-[#123B27]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#123B27] py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#0D2E1E]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D6A33A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0"
              >
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M9 6v12M15 6v12" strokeDasharray="2 2" />
              </svg>
              <span>{ctaText.toUpperCase()}</span>
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
