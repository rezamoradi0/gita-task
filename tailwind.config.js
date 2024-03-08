/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform : "scale(1)" ,opacity:"1"},
          "50%": { transform : "scale(1.05)" ,opacity:"0.9"}
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      }
    },
  },
  plugins: [],
}

