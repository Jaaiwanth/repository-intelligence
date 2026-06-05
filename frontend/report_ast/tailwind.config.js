/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0a0a0a",
        primary: "#39ff14", // Neon electric green
        secondary: "#ff00ff", // Hot pink
        "on-background": "#ffffff",
        "on-surface": "#e0e0e0",
        "on-primary": "#000000",
        "on-secondary": "#ffffff",
        outline: "#39ff14",
      },
      fontFamily: {
        heading: ["Anton", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        'neo': '8px 8px 0px 0px #39ff14',
        'neo-pink': '8px 8px 0px 0px #ff00ff',
      }
    }
  },
  plugins: [],
}
