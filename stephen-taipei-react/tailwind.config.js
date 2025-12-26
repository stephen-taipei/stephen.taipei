/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Blue 600
          light: '#60a5fa', // Blue 400
          dark: '#1e40af', // Blue 800
        },
        secondary: {
          DEFAULT: '#0ea5e9', // Sky 500
          light: '#38bdf8', // Sky 400
          dark: '#0369a1', // Sky 700
        },
        neutral: {
          light: '#f3f4f6', // Gray 100
          DEFAULT: '#9ca3af', // Gray 400
          dark: '#1f2937', // Gray 800
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
      })
    }
  ],
}
