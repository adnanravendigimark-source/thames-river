import Link from "next/link";
import Image from "next/image";

export default function Logo({
  logoImage,
  logoAlt = "Thames River Cruises",
  line1 = "THAMES RIVER",
  line2 = "— CRUISES —",
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
          {/* Tower Bridge / River Thames Silhouette Line Art */}
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            {/* River Thames waterline */}
            <path d="M2 42h44" stroke="#1E96E0" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M6 45q3-2 6 0t6 0t6 0t6 0t6 0t6 0" stroke="#1E96E0" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />

            {/* Left tower */}
            <path
              d="M12 42V9l5-5 5 5v33"
              fill="#1E96E0"
              fillOpacity="0.18"
              stroke="#1E96E0"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Right tower */}
            <path
              d="M26 42V9l5-5 5 5v33"
              fill="#1E96E0"
              fillOpacity="0.18"
              stroke="#1E96E0"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* High-level walkway */}
            <rect x="17" y="14" width="14" height="3" fill="#1E96E0" fillOpacity="0.35" stroke="#1E96E0" strokeWidth="1.2" />

            {/* Bascule bridge deck */}
            <rect x="17" y="31" width="14" height="3" fill="#1E96E0" stroke="#1E96E0" strokeWidth="1.2" />

            {/* Suspension cable accents */}
            <path d="M14 14L17 31M34 14L31 31" stroke="#1E96E0" strokeWidth="1" strokeLinecap="round" />

            {/* Tower pinnacles */}
            <circle cx="17" cy="4" r="1.3" fill="#1E96E0" />
            <circle cx="31" cy="4" r="1.3" fill="#1E96E0" />
          </svg>
        </span>
      )}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-[0.08em] text-[1.15rem] sm:text-[1.28rem] font-bold uppercase transition-colors leading-none ${
            isDark ? "text-white group-hover:text-[#1E96E0]" : "text-[#0B2545] group-hover:text-[#1B4373]"
          }`}
        >
          {line1}
        </span>
        <span
          className="text-[9px] sm:text-[10px] font-bold tracking-[0.28em] uppercase text-[#1E96E0] mt-1 text-center sm:text-left"
        >
          {line2}
        </span>
      </div>
    </Link>
  );
}
