import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Burnt Terracotta ⭐ #6B3113 → Primary brand, CTA buttons, footer
        // Terracotta #8A3F19 (600 step) → Headings, secondary elements
        navy: {
          50: "#FBEDE6",
          100: "#F5D6C4",
          200: "#E9B08A",
          300: "#DC8A57",
          400: "#CB6935",
          500: "#B0511F",
          600: "#8A3F19", // Terracotta — headings, secondary elements
          700: "#6B3113", // Burnt Terracotta — Brand Primary
          800: "#4E240D",
          900: "#341809",
          950: "#200F05",
        },
        // Warm Cream #FBF3E4 → Main background
        marble: {
          50: "#FEFCF9",
          100: "#FBF3E4", // Main Background
          200: "#F3E5C8",
          300: "#E9D3A8",
          400: "#DCBC82",
        },
        // Warm Sand #E7CFA3 → Cards, borders, separators
        tuscan: {
          50: "#FCF8F1",
          100: "#F8EEDD",
          200: "#F1E1C4",
          300: "#E7CFA3", // Brand Card/Section
          400: "#D8B67B",
          500: "#C39A54",
          600: "#A17B3B",
          700: "#7C5E2E",
          800: "#593F1F",
          900: "#372714",
          950: "#21170C",
        },
        // Antique Gold ⭐ #C98A22 → Logo, highlights, prices, accents
        terracotta: {
          50: "#FDF6E7",
          100: "#FAE8BE",
          200: "#F3D385",
          300: "#EABD52",
          400: "#DEA435",
          500: "#C98A22", // Brand Gold Accent
          600: "#A66E17",
          700: "#815414",
          800: "#5D3C10",
          900: "#3B270B",
          950: "#241706",
        },
        // Soft Blush #EEDAC2 → Light sections and subtle backgrounds
        sky: {
          50: "#FDF9F5",
          100: "#F7EBDE",
          200: "#EEDAC2", // Brand Secondary UI / light sections
          300: "#E2C3A0",
          400: "#D3AA7C",
          500: "#C2905B",
          600: "#A0733F",
          700: "#7B592F",
          800: "#574020",
          900: "#372814",
          950: "#211809",
        },
        // Warm Charcoal #2B221D → Body text
        charcoal: {
          50: "#ADA6A2",
          100: "#98908B",
          200: "#837A74",
          300: "#6D645D",
          400: "#453D37",
          500: "#2B221D", // Body text
          600: "#241C18",
          700: "#1D1613",
          800: "#16110E",
          900: "#100C0A",
          950: "#0A0807",
        },
        // Aliases for compatibility
        olive: {
          50: "#FBEDE6",
          100: "#F5D6C4",
          200: "#E9B08A",
          300: "#DC8A57",
          400: "#CB6935",
          500: "#B0511F",
          600: "#8A3F19",
          700: "#6B3113",
          800: "#4E240D",
          900: "#341809",
          950: "#200F05",
        },
        cream: {
          50: "#FEFCF9",
          100: "#FBF3E4",
          200: "#F3E5C8",
          300: "#E9D3A8",
        },
        warmstone: {
          50: "#FCF8F1",
          100: "#F8EEDD",
          200: "#F1E1C4",
          300: "#E7CFA3",
          400: "#D8B67B",
          500: "#C39A54",
          600: "#A17B3B",
          700: "#7C5E2E",
          800: "#593F1F",
          900: "#372714",
        },
        sage: {
          50: "#FDF9F5",
          100: "#F7EBDE",
          200: "#EEDAC2",
          300: "#E2C3A0",
          400: "#D3AA7C",
          500: "#C2905B",
          600: "#A0733F",
          700: "#7B592F",
          800: "#574020",
          900: "#372814",
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
          "radial-gradient(circle at 15% 25%, rgba(107,49,19,0.25) 0, transparent 45%), radial-gradient(circle at 85% 15%, rgba(238,218,194,0.30) 0, transparent 45%), radial-gradient(circle at 50% 85%, rgba(201,138,34,0.30) 0, transparent 50%)",
        "renaissance-pattern":
          "radial-gradient(circle at 50% 0%, rgba(238,218,194,0.22) 0%, transparent 60%), radial-gradient(circle at 50% 100%, rgba(107,49,19,0.14) 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(107, 49, 19, 0.30)",
        "gold-glow": "0 0 35px -5px rgba(201, 138, 34, 0.35)",
        "blue-glow": "0 0 35px -5px rgba(107, 49, 19, 0.35)",
        "terracotta-glow": "0 0 35px -5px rgba(201, 138, 34, 0.40)",
      },
    },
  },
  plugins: [],
};
export default config;
