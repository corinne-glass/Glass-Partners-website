import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        authority: {
          DEFAULT: "#0E1A2B",
          50: "#1e293b",
          100: "#334155",
        },
        cloud: {
          DEFAULT: "#dbd8cd",
          50: "#e5e2d8",
          100: "#d4d0c4",
          200: "#c8c3b6",
        },
        rebel: {
          DEFAULT: "#B03A32",
          50: "#fbe6e9",
          100: "#f3b8c0",
          700: "#A6342E",
        },
        metal: {
          DEFAULT: "#445064",
          50: "#6b7280",
          100: "#9ca3af",
        },
        /** Electric accent — use sparingly (Outlaw alternate) */
        spark: {
          DEFAULT: "#c026d3",
          muted: "#e879f9",
        },
      },
      backgroundImage: {
        "grain-light":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
