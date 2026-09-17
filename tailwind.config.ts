import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Forest Green ⭐ #123B27 → Primary brand, CTA buttons, footer
        // Pine Green #1F5135 (600 step) → Headings, secondary elements
        navy: {
          50: "#EAF3EC",
          100: "#CFE4D5",
          200: "#A3CBAE",
          300: "#78B187",
          400: "#4C9563",
          500: "#2F7849",
          600: "#1F5135", // Pine Green — headings, secondary elements
          700: "#123B27", // Deep Forest Green — Brand Primary
          800: "#0D2E1E",
          900: "#081F14",
          950: "#05140D",
        },
        // Warm Ivory #F7F3EA → Main background
        marble: {
          50: "#FDFCFA",
          100: "#F7F3EA", // Main Background
          200: "#EDE6D5",
          300: "#E1D6BE",
          400: "#D3C4A4",
        },
        // Warm Sand #E9E1D3 → Cards, borders, separators
        tuscan: {
          50: "#FBF9F5",
          100: "#F7F2EA",
          200: "#F0E8DA",
          300: "#E9E1D3", // Brand Card/Section
          400: "#D4C7AF",
          500: "#BBA980",
          600: "#9C8961",
          700: "#7A6B4B",
          800: "#574C36",
          900: "#362F22",
          950: "#201C14",
        },
        // Palace Gold ⭐ #D6A33A → Logo, highlights, prices, accents
        terracotta: {
          50: "#FDF7E9",
          100: "#FBEDC9",
          200: "#F5DB98",
          300: "#EEC968",
          400: "#E4B64F",
          500: "#D6A33A", // Brand Gold Accent
          600: "#B3841F",
          700: "#8C671A",
          800: "#664B15",
          900: "#40300E",
          950: "#251C08",
        },
        // Soft Sage #DDE5D8 → Light sections and subtle backgrounds
        sky: {
          50: "#FAFCF9",
          100: "#F0F4EE",
          200: "#DDE5D8", // Brand Secondary UI / light sections
          300: "#C3D0BC",
          400: "#A8BC9E",
          500: "#8CA47F",
          600: "#708960",
          700: "#566C49",
          800: "#3E4F35",
          900: "#283322",
          950: "#171E13",
        },
        // Charcoal #26332B → Body text
        charcoal: {
          50: "#A9B2A9",
          100: "#939C93",
          200: "#7C857C",
          300: "#656E65",
          400: "#3F493F",
          500: "#26332B", // Body text
          600: "#202B24",
          700: "#19221D",
          800: "#131A16",
          900: "#0D120F",
          950: "#080B09",
        },
        // Aliases for compatibility
        olive: {
          50: "#EAF3EC",
          100: "#CFE4D5",
          200: "#A3CBAE",
          300: "#78B187",
          400: "#4C9563",
          500: "#2F7849",
          600: "#1F5135",
          700: "#123B27",
          800: "#0D2E1E",
          900: "#081F14",
          950: "#05140D",
        },
        cream: {
          50: "#FDFCFA",
          100: "#F7F3EA",
          200: "#EDE6D5",
          300: "#E1D6BE",
        },
        warmstone: {
          50: "#FBF9F5",
          100: "#F7F2EA",
          200: "#F0E8DA",
          300: "#E9E1D3",
          400: "#D4C7AF",
          500: "#BBA980",
          600: "#9C8961",
          700: "#7A6B4B",
          800: "#574C36",
          900: "#362F22",
        },
        sage: {
          50: "#FAFCF9",
          100: "#F0F4EE",
          200: "#DDE5D8",
          300: "#C3D0BC",
          400: "#A8BC9E",
          500: "#8CA47F",
          600: "#708960",
          700: "#566C49",
          800: "#3E4F35",
          900: "#283322",
        },
        // Admin-panel accent tokens, driven by the theme colors set on the
        // Homepage admin page (see app/layout.tsx, which writes these as
        // CSS variables). Used across every components/admin/* form.
        canal: {
          blue: "rgb(var(--color-canal-blue) / <alpha-value>)",
          primary: "rgb(var(--color-canal-primary) / <alpha-value>)",
          orange: "rgb(var(--color-canal-primary) / <alpha-value>)",
          ink: "rgb(var(--color-canal-ink) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cinzel", "Outfit", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        mosaic:
          "radial-gradient(circle at 15% 25%, rgba(18,59,39,0.25) 0, transparent 45%), radial-gradient(circle at 85% 15%, rgba(221,229,216,0.30) 0, transparent 45%), radial-gradient(circle at 50% 85%, rgba(214,163,58,0.30) 0, transparent 50%)",
        "renaissance-pattern":
          "radial-gradient(circle at 50% 0%, rgba(221,229,216,0.22) 0%, transparent 60%), radial-gradient(circle at 50% 100%, rgba(18,59,39,0.14) 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(18, 59, 39, 0.30)",
        "gold-glow": "0 0 35px -5px rgba(214, 163, 58, 0.35)",
        "blue-glow": "0 0 35px -5px rgba(18, 59, 39, 0.35)",
        "terracotta-glow": "0 0 35px -5px rgba(214, 163, 58, 0.40)",
      },
    },
  },
  plugins: [],
};
export default config;
