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
          background: "linear-gradient(135deg, #123B27 0%, #092015 100%)",
          borderRadius: "16px",
          border: "2px solid #D6A33A",
        }}
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 48 48"
          fill="none"
        >
          {/* Base battlements & ground */}
          <path
            d="M4 42h40M7 42V31h4v11M11 31h4V22h4v20M19 22h6v20M25 24h4v18M29 27h6v15M35 30h6v12"
            stroke="#D6A33A"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Left Clock Tower & Spire */}
          <path
            d="M9 31V16l4-6 4 6v15"
            fill="#D6A33A"
            fillOpacity="0.25"
            stroke="#D6A33A"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M13 10V5M11 7h4" stroke="#D6A33A" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="13" cy="19" r="2" fill="#D6A33A" />
          
          {/* Central Pena Palace Onion Dome & Minaret */}
          <path
            d="M21 22V14c0-3 3-6 4-8 1 2 4 5 4 8v8"
            fill="#D6A33A"
            fillOpacity="0.35"
            stroke="#D6A33A"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <line x1="25" y1="4" x2="25" y2="6" stroke="#D6A33A" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="23.5" y1="5" x2="26.5" y2="5" stroke="#D6A33A" strokeWidth="1.5" strokeLinecap="round" />

          {/* Right Tower & Moorish Spire */}
          <path
            d="M31 27V15l3-3 3 3v12"
            fill="#D6A33A"
            fillOpacity="0.25"
            stroke="#D6A33A"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M34 12V8M32.5 9.5h3" stroke="#D6A33A" strokeWidth="1.5" strokeLinecap="round" />

          {/* Arches */}
          <path d="M11 37a2 2 0 0 1 4 0v5h-4v-5z" fill="#D6A33A" />
          <path d="M21 34a3 3 0 0 1 6 0v8h-6v-8z" fill="#D6A33A" />
          <path d="M31 36a2 2 0 0 1 4 0v6h-4v-6z" fill="#D6A33A" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
