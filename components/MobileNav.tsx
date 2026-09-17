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
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E7F0F9] bg-[#F4F8FC] text-[#0B2545] transition hover:bg-[#E7F0F9]/40"
      >
        {open ? (
          <span className="text-xl font-bold">✕</span>
        ) : (
          <span className="text-xl font-bold">☰</span>
        )}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-20 z-50 border-b border-[#E7F0F9] bg-[#F4F8FC] p-6 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-bold text-[#1C2B3A] transition hover:text-[#0B2545]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#0B2545] py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#081B34]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1E96E0"
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
