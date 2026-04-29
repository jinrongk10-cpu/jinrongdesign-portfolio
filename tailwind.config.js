/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        neon: "#DFFF00",
        dark: "#0b0b0b",
      },
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
        pixel: ['"DotGothic16"', "sans-serif"],
      },
      backgroundImage: {
        'dots': 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots-size': '24px 24px',
      }
    },
  },
  plugins: [],
};
