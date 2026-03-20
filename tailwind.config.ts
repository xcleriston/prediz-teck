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
        background: "#0d1421",
        card: "#151c2c",
        border: "#242d40",
        primary: {
          DEFAULT: "#ADFF2F",
          dark: "#7CB518",
        },
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
