import Link from "next/link";
import Image from "next/image";

export default function Logo({
  logoImage,
  logoAlt = "Pena Palace Tickets",
  line1 = "PENA PALACE",
  line2 = "— TICKETS —",
  theme = "light",
  className = "",
}: {
  logoImage?: string;
  logoAlt?: string;
  line1?: string;
  line2?: string;
  theme?: "light" | "dark";
  className?: string;
}) {
  const isDark = theme === "dark";
  const customSrc = logoImage?.trim();

  return (
    <Link href="/" className={`group inline-flex items-center gap-3.5 ${className}`}>
      {customSrc ? (
        <span className="relative block h-10 w-10 sm:h-12 sm:w-12 shrink-0 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={customSrc}
            alt={logoAlt}
            fill
            quality={90}
            sizes="48px"
            className="object-contain"
          />
        </span>
      ) : (
        <span className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
          {/* Detailed Golden Pena Palace Castle Silhouette / Line Art */}
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            {/* Castle silhouette in Palace Gold */}
            <path
              d="M4 42h40M7 42V31h4v11M11 31h4V22h4v20M19 22h6v20M25 24h4v18M29 27h6v15M35 30h6v12"
              stroke="#D6A33A"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Left High Spire & Clock Tower */}
            <path
              d="M9 31V16l4-6 4 6v15"
              fill="#D6A33A"
              fillOpacity="0.2"
              stroke="#D6A33A"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="M13 10V5M11 7h4" stroke="#D6A33A" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="13" cy="19" r="2" fill="#D6A33A" />
            
            {/* Central Onion Dome / Minaret */}
            <path
              d="M21 22V14c0-3 3-6 4-8 1 2 4 5 4 8v8"
              fill="#D6A33A"
              fillOpacity="0.3"
              stroke="#D6A33A"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <line x1="25" y1="4" x2="25" y2="6" stroke="#D6A33A" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="23.5" y1="5" x2="26.5" y2="5" stroke="#D6A33A" strokeWidth="1.2" strokeLinecap="round" />

            {/* Right Tower & Battlements */}
            <path
              d="M31 27V15l3-3 3 3v12"
              fill="#D6A33A"
              fillOpacity="0.25"
              stroke="#D6A33A"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path d="M34 12V8M32.5 9.5h3" stroke="#D6A33A" strokeWidth="1.2" strokeLinecap="round" />

            {/* Castle Archways & Windows */}
            <path d="M11 37a2 2 0 0 1 4 0v5h-4v-5z" fill="#D6A33A" />
            <path d="M21 34a3 3 0 0 1 6 0v8h-6v-8z" fill="#D6A33A" />
            <path d="M31 36a2 2 0 0 1 4 0v6h-4v-6z" fill="#D6A33A" />
          </svg>
        </span>
      )}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-[0.08em] text-[1.15rem] sm:text-[1.28rem] font-bold uppercase transition-colors leading-none ${
            isDark ? "text-white group-hover:text-[#D6A33A]" : "text-[#123B27] group-hover:text-[#1F5135]"
          }`}
        >
          {line1}
        </span>
        <span
          className="text-[9px] sm:text-[10px] font-bold tracking-[0.28em] uppercase text-[#D6A33A] mt-1 text-center sm:text-left"
        >
          {line2}
        </span>
      </div>
    </Link>
  );
}
