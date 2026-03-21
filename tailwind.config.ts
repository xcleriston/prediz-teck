import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f4f5f7",
        card: "#ffffff",
        "card-border": "#e8eaed",
        primary: {
          DEFAULT: "#00c74d",   // SatoshiMKT green
          dark: "#009e3d",
          light: "#e6fff0",
        },
        danger: {
          DEFAULT: "#ff4d4d",
          light: "#fff0f0",
        },
        brand: "#00c74d",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        spartan: ["var(--font-spartan)"],
        fredoka: ["var(--font-fredoka)"],
      },
      borderRadius: {
        xl: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
