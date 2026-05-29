import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bashkir: {
          blue: "#0077B6",
          green: "#1B5E3B",
          gold: "#D4A017",
          cream: "#FBF7F0",
          ink: "#0F172A",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-onest)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      backgroundImage: {
        ornament: "url('/ornament.svg')",
        tricolor: "linear-gradient(90deg, #0077B6 33.33%, #FFFFFF 33.33% 66.66%, #1B5E3B 66.66%)",
      },
      boxShadow: {
        card: "0 4px 24px rgba(15, 23, 42, 0.06)",
        glow: "0 0 40px rgba(212, 160, 23, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
