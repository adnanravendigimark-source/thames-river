import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B2545 0%, #030B16 100%)",
          borderRadius: "16px",
          border: "2px solid #1E96E0",
        }}
      >
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
          {/* River Thames waterline */}
          <path d="M2 42h44" stroke="#1E96E0" strokeWidth="1.8" strokeLinecap="round" />
          {/* Gentle wave ripples */}
          <path d="M6 45q3-2 6 0t6 0t6 0t6 0t6 0t6 0" stroke="#1E96E0" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

          {/* Tower Bridge — left tower */}
          <path d="M12 42V9l5-5 5 5v33" fill="#1E96E0" fillOpacity="0.18" stroke="#1E96E0" strokeWidth="1.6" strokeLinejoin="round" />
          {/* Tower Bridge — right tower */}
          <path d="M26 42V9l5-5 5 5v33" fill="#1E96E0" fillOpacity="0.18" stroke="#1E96E0" strokeWidth="1.6" strokeLinejoin="round" />

          {/* High-level walkway */}
          <rect x="17" y="14" width="14" height="3" fill="#1E96E0" fillOpacity="0.35" stroke="#1E96E0" strokeWidth="1.2" />

          {/* Bascule bridge deck (road level) */}
          <rect x="17" y="31" width="14" height="3" fill="#1E96E0" stroke="#1E96E0" strokeWidth="1.2" />

          {/* Suspension cable accents */}
          <path d="M14 14L17 31M34 14L31 31" stroke="#1E96E0" strokeWidth="1" strokeLinecap="round" />

          {/* Tower pinnacles */}
          <circle cx="17" cy="4" r="1.4" fill="#1E96E0" />
          <circle cx="31" cy="4" r="1.4" fill="#1E96E0" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
