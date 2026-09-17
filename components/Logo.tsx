import Link from "next/link";
import Image from "next/image";

export default function Logo({
  logoImage,
  logoAlt = "Thames River Cruise",
  line1 = "Thames River Cruise",
  line2 = "LONDON • CRUISES • MEMORIES",
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
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`}>
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
        <span className="relative flex h-11 w-12 sm:h-12 sm:w-14 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
          {/* Modern Thames Cruise Ship with Waves Logo matching reference */}
          <svg
            viewBox="0 0 56 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full drop-shadow-sm"
          >
            {/* Top Deck & Bridge */}
            <path
              d="M20 9H34L32 15H18L20 9Z"
              fill={isDark ? "#E5A853" : "#0B2545"}
            />
            {/* Upper Windows */}
            <rect x="22" y="11" width="3" height="2.2" rx="0.5" fill="white" />
            <rect x="27" y="11" width="3" height="2.2" rx="0.5" fill="white" />
            {/* Radar / Mast */}
            <path d="M26 6V9M28 5V9M24 7H30" stroke={isDark ? "#E5A853" : "#0B2545"} strokeWidth="1.2" strokeLinecap="round" />

            {/* Main Mid Deck */}
            <path
              d="M10 16H42L39 24H12L10 16Z"
              fill={isDark ? "#FFFFFF" : "#1B4373"}
            />
            {/* Cabin Windows */}
            <rect x="14" y="18" width="3.5" height="3" rx="0.5" fill="#E5A853" />
            <rect x="19.5" y="18" width="3.5" height="3" rx="0.5" fill="#E5A853" />
            <rect x="25" y="18" width="3.5" height="3" rx="0.5" fill="#E5A853" />
            <rect x="30.5" y="18" width="3.5" height="3" rx="0.5" fill="#E5A853" />
            <rect x="36" y="18" width="3" height="3" rx="0.5" fill="#E5A853" />

            {/* Boat Hull */}
            <path
              d="M6 24H45L49 26L41 33H12L6 24Z"
              fill={isDark ? "#E5A853" : "#0B2545"}
            />

            {/* Waterline Accent */}
            <path
              d="M10 32.5H42"
              stroke="#E5A853"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            {/* River Thames Waves */}
            <path
              d="M3 36C8 34.5 12 37.5 17 36C22 34.5 26 37.5 31 36C36 34.5 40 37.5 45 36C49 34.8 52 36.2 55 36"
              stroke="#1E96E0"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 39.5C11 38.5 15 40.5 20 39.5C25 38.5 29 40.5 34 39.5C39 38.5 43 40.5 48 39.5"
              stroke="#1E96E0"
              strokeWidth="1.3"
              strokeLinecap="round"
              opacity="0.65"
            />
          </svg>
        </span>
      )}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-[0.03em] text-[1.18rem] sm:text-[1.32rem] font-bold transition-colors leading-none ${
            isDark ? "text-white group-hover:text-[#E5A853]" : "text-[#0B2545] group-hover:text-[#1B4373]"
          }`}
        >
          {line1}
        </span>
        <span
          className={`text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.22em] uppercase mt-1 text-left ${
            isDark ? "text-gray-300" : "text-[#4B5E76]"
          }`}
        >
          {line2}
        </span>
      </div>
    </Link>
  );
}
