import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lavender: {
          light: "#D1CCDC",
          DEFAULT: "#9D91B7",
          bright: "#A06CD5",
          dark: "#634F8E",
          darkest: "#3B2E57",
        },
        "hacker-green": {
          light: "#61cf5a",
          DEFAULT: "#63ad58",
          medium: "#50864c",
          dark: "#3e6a3d",
          darkest: "#3b4b33",
        },
        "favorite-color": "#6E44FF",
        night: "#00120B",
        "fp-green": "#31E981",
        "fp-purple": "#9055a2",
        sunglow: "#FFC857",

        primary: {
          DEFAULT: "#3B82F6",
          light: "#93C5FD",
          dark: "#1E40AF",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
          light: "#C4B5FD",
          dark: "#150023",
        },
      },
      // Add other theme extensions
      spacing: {
        "128": "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
