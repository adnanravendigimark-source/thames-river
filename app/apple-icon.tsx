import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6B3113 0%, #200F05 100%)",
          borderRadius: "40px",
          border: "4px solid #C98A22",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 48 48" fill="none">
          {/* Ground line */}
          <path d="M3 42h42" stroke="#C98A22" strokeWidth="1.8" strokeLinecap="round" />

          {/* Left wing */}
          <path d="M6 42V29h11v13" stroke="#C98A22" strokeWidth="1.8" strokeLinejoin="round" />
          <rect x="8.5" y="33" width="2.5" height="4" fill="#C98A22" />
          <rect x="13" y="33" width="2.5" height="4" fill="#C98A22" />

          {/* Right wing */}
          <path d="M31 42V29h11v13" stroke="#C98A22" strokeWidth="1.8" strokeLinejoin="round" />
          <rect x="32.5" y="33" width="2.5" height="4" fill="#C98A22" />
          <rect x="37" y="33" width="2.5" height="4" fill="#C98A22" />

          {/* Central corps de logis */}
          <path d="M15 42V18h18v24" stroke="#C98A22" strokeWidth="1.8" strokeLinejoin="round" />
          {/* Pediment */}
          <path d="M15 18l9-8 9 8" fill="#C98A22" fillOpacity="0.3" stroke="#C98A22" strokeWidth="1.8" strokeLinejoin="round" />

          {/* Sun King emblem above pediment */}
          <circle cx="24" cy="7" r="2" fill="#C98A22" />
          <path
            d="M24 1.5v2M24 10.5v2M18.5 7h2M27.5 7h2M20 3l1.4 1.4M26.6 8.6L28 10M28 3l-1.4 1.4M21.4 8.6L20 10"
            stroke="#C98A22"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Central facade arched windows */}
          <path d="M18.5 24a1.6 1.6 0 0 1 3.2 0v6h-3.2v-6z" fill="#C98A22" />
          <path d="M22.4 24a1.6 1.6 0 0 1 3.2 0v6h-3.2v-6z" fill="#C98A22" />
          <path d="M26.3 24a1.6 1.6 0 0 1 3.2 0v6h-3.2v-6z" fill="#C98A22" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
