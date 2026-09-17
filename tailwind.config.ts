import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Navy ⭐ #0B2545 → Primary brand, CTA buttons, footer
        // Slate Navy #1B4373 (600 step) → Headings, secondary elements
        navy: {
          50: "#EAF0F8",
          100: "#CBDCEF",
          200: "#9DBEE0",
          300: "#6D9CCE",
          400: "#4179B8",
          500: "#285C99",
          600: "#1B4373", // Slate Navy — headings, secondary elements
          700: "#0B2545", // Deep Navy — Brand Primary
          800: "#081B34",
          900: "#051222",
          950: "#030B16",
        },
        // Pale Sky White #F4F8FC → Main background
        marble: {
          50: "#FFFFFF",
          100: "#F4F8FC", // Main Background
          200: "#E7F0F9",
          300: "#D6E6F5",
          400: "#BFD7ED",
        },
        // Pale Steel Blue #CBDCED → Cards, borders, separators
        tuscan: {
          50: "#F7FAFD",
          100: "#EEF4FA",
          200: "#E1EBF5",
          300: "#CBDCED", // Brand Card/Section
          400: "#AFC7DE",
          500: "#8FACC9",
          600: "#6D8CAD",
          700: "#526B87",
          800: "#3A4C61",
          900: "#26313E",
          950: "#171E27",
        },
        // Sky Blue ⭐ #1E96E0 → Logo, highlights, prices, accents
        terracotta: {
          50: "#EAF6FD",
          100: "#C9E9FA",
          200: "#9ED6F5",
          300: "#6EC1F0",
          400: "#46AEEA",
          500: "#1E96E0", // Brand Sky-Blue Accent
          600: "#1678B4",
          700: "#115B8B",
          800: "#0C4165",
          900: "#082A42",
          950: "#05192A",
        },
        // Soft River Blue #D3E9F9 → Light sections and subtle backgrounds
        sky: {
          50: "#F5FAFE",
          100: "#E7F3FC",
          200: "#D3E9F9", // Brand Secondary UI / light sections
          300: "#B7DAF3",
          400: "#93C5EA",
          500: "#6CADDD",
          600: "#4C8FC0",
          700: "#386D97",
          800: "#274D6B",
          900: "#1A3346",
          950: "#101F2B",
        },
        // Slate Charcoal #1C2B3A → Body text
        charcoal: {
          50: "#A9B4BF",
          100: "#8D9AA8",
          200: "#71808F",
          300: "#566577",
          400: "#33465A",
          500: "#1C2B3A", // Body text
          600: "#17232F",
          700: "#121B24",
          800: "#0D1319",
          900: "#080C10",
          950: "#05080A",
        },
        // Aliases for compatibility
        olive: {
          50: "#EAF0F8",
          100: "#CBDCEF",
          200: "#9DBEE0",
          300: "#6D9CCE",
          400: "#4179B8",
          500: "#285C99",
          600: "#1B4373",
          700: "#0B2545",
          800: "#081B34",
          900: "#051222",
          950: "#030B16",
        },
        cream: {
          50: "#FFFFFF",
          100: "#F4F8FC",
          200: "#E7F0F9",
          300: "#D6E6F5",
        },
        warmstone: {
          50: "#F7FAFD",
          100: "#EEF4FA",
          200: "#E1EBF5",
          300: "#CBDCED",
          400: "#AFC7DE",
          500: "#8FACC9",
          600: "#6D8CAD",
          700: "#526B87",
          800: "#3A4C61",
          900: "#26313E",
        },
        sage: {
          50: "#F5FAFE",
          100: "#E7F3FC",
          200: "#D3E9F9",
          300: "#B7DAF3",
          400: "#93C5EA",
          500: "#6CADDD",
          600: "#4C8FC0",
          700: "#386D97",
          800: "#274D6B",
          900: "#1A3346",
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
          "radial-gradient(circle at 15% 25%, rgba(11,37,69,0.25) 0, transparent 45%), radial-gradient(circle at 85% 15%, rgba(211,233,249,0.30) 0, transparent 45%), radial-gradient(circle at 50% 85%, rgba(30,150,224,0.30) 0, transparent 50%)",
        "renaissance-pattern":
          "radial-gradient(circle at 50% 0%, rgba(211,233,249,0.22) 0%, transparent 60%), radial-gradient(circle at 50% 100%, rgba(11,37,69,0.14) 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(11, 37, 69, 0.30)",
        "gold-glow": "0 0 35px -5px rgba(30, 150, 224, 0.35)",
        "blue-glow": "0 0 35px -5px rgba(11, 37, 69, 0.35)",
        "terracotta-glow": "0 0 35px -5px rgba(30, 150, 224, 0.40)",
      },
    },
  },
  plugins: [],
};
export default config;
