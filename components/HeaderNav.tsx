"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/lib/homepage";

export default function HeaderNav({ links }: { links?: NavLink[] }) {
  const pathname = usePathname();

  const defaultLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  // User requirement: Keep ONLY Home, About Us, Blog, and Contact in header
  const navLinks = defaultLinks;

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href + link.label}
            href={link.href}
            className={`relative py-1 text-[14px] font-medium transition-colors ${
              isActive
                ? "text-[#C98A22] font-semibold after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-[#C98A22]"
                : "text-[#8A3F19] hover:text-[#C98A22]"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
