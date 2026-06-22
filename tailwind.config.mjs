/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#0e0e0e",
        surface: "#0e0e0e",
        "surface-container-low": "#131313",
        "surface-container": "#1a1a1a",
        "surface-container-high": "#20201f",
        "surface-container-highest": "#262626",
        primary: "#ffc965",
        "primary-container": "#feb700",
        secondary: "#fcb812",
        tertiary: "#fff6ab",
        outline: "#767575",
        "outline-variant": "#484847",
        "on-surface": "#ffffff",
        "on-surface-variant": "#adaaaa",
        error: "#ff7351",
      },
      fontFamily: {
        headline: ['"Space Grotesk"', "sans-serif"],
        body: ["Lexend", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 48px rgba(0,0,0,0.4)",
        amber: "0 0 40px rgba(255,201,101,0.1)",
      },
      backgroundImage: {
        honey: "linear-gradient(135deg, #ffc965 0%, #feb700 100%)",
        buzz: "linear-gradient(135deg, #ffc965 0%, #feb700 100%)",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [],
};
