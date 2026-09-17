import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/Logo.png";

export default function Logo({
  className = "",
  variant = "compact",
  theme = "light",
  src = "",
  logoImage = "",
  alt,
  logoAlt,
  line1 = "Thames River",
  line2 = "Cruise Tours",
}: {
  className?: string;
  variant?: "compact" | "stacked";
  theme?: "light" | "dark";
  src?: string;
  logoImage?: string;
  alt?: string;
  logoAlt?: string;
  line1?: string;
  line2?: string;
}) {
  const isDark = theme === "dark";
  const customSrc = (src || logoImage)?.trim();
  const altText = alt || logoAlt || "Thames River Cruise Tours";

  if (variant === "stacked") {
    return (
      <Link href="/" className={`inline-flex flex-col items-center gap-3.5 ${className}`}>
        {/* Sized to the London boat artwork's aspect ratio (~3.13:1) */}
        <span className="relative block h-20 w-[252px] sm:h-24 sm:w-[302px] transition-transform duration-300 hover:scale-105">
          <Image
            src={customSrc || logo}
            alt={altText}
            fill
            sizes="302px"
            className="object-contain"
            priority
          />
        </span>
        <div className="text-center leading-tight">
          <span
            className={`block font-display text-2xl font-black tracking-[-0.03em] uppercase ${
              isDark ? "text-white" : "text-[#0B2545]"
            }`}
          >
            {line1}
          </span>
          <span className="block font-display text-xs font-extrabold uppercase tracking-[0.32em] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            {line2}
          </span>
        </div>
      </Link>
    );
  }

  const image = (
    <span className="relative block h-9 w-[114px] shrink-0 overflow-hidden sm:h-10 sm:w-[126px] transition-transform duration-300 group-hover:scale-105">
      <Image
        src={customSrc || logo}
        alt={altText}
        fill
        priority
        sizes="126px"
        className="object-contain"
      />
    </span>
  );

  const wordmark = (
    <span className="flex min-w-0 items-center gap-3">
      <span
        className={`h-8 w-[1.5px] shrink-0 rounded-full ${
          isDark
            ? "bg-gradient-to-b from-sky-400/80 to-blue-600/30"
            : "bg-gradient-to-b from-blue-600/60 to-sky-400/20"
        }`}
        aria-hidden="true"
      />
      <div className="flex min-w-0 flex-col leading-[1.08]">
        <span
          className={`block truncate font-display text-[1.12rem] sm:text-[1.2rem] font-black tracking-[-0.02em] uppercase ${
            isDark ? "text-white" : "text-[#0B2545]"
          }`}
        >
          {line1}
        </span>
        <span className="block truncate font-display text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
          {line2}
        </span>
      </div>
    </span>
  );

  return (
    <Link href="/" className={`group inline-flex min-w-0 items-center gap-2.5 ${className}`}>
      {image}
      {wordmark}
    </Link>
  );
}
