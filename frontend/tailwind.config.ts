import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bashkir: {
          blue: "#0080C6",
          green: "#006633",
          gold: "#C9A227",
        },
      },
      fontFamily: {
        serif: ["var(--font-pt-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        ornament: "url('/ornament.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
