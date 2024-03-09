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
        },
        hideAndSeek:{
          "0%%":{transform:"translateY(-100%)"},
          "50%":{transform:"translateY(100%)"},
          "100%":{transform:"translateY(10%)"},
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        hideAndSeek:"hideAndSeek 500ms ease-in-out forwards"
      },
      colors:{
        'primary':{
          light: '#334155',
          DEFAULT: '#334155',
          dark: '#27272a',
        },
        'secondary':{
          light: '#111827',
          DEFAULT: '#111827',
          dark: '#cbd5e1',
        }
      }
    },
  },
  plugins: [],
}

