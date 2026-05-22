import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        hero: {
          bg: "var(--hero-bg)",
          navy: "var(--hero-navy)",
          "navy-bold": "var(--hero-navy-bold)",
          muted: "var(--hero-muted)",
          subtext: "var(--hero-subtext)",
          orange: "var(--hero-orange)",
          blue: "var(--hero-blue)",
          portal: "var(--hero-portal)",
          pill: "var(--hero-pill)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
