import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New color theme
        primary: {
          DEFAULT: "#1E3A8A", // Primary blue
          hover: "#1D4ED8",
        },
        accent: {
          DEFAULT: "#14B8A6", // Teal
          hover: "#0D9488",
        },
        background: "#F8FAFC",
        surface: "#FFFFFF",
        "text-primary": "#0F172A",
        "text-secondary": "#475569",
        border: "#E2E8F0",
        success: "#16A34A",
        warning: "#F59E0B",
      },
    },
  },
  plugins: [],
};

export default config;

