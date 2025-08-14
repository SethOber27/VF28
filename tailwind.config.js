/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: "#f5faff",
          100: "#e0f2ff",
          200: "#b9e0ff",
          300: "#7fc7ff",
          400: "#36a5ff",
          500: "#0084ff",
          600: "#006be6",
          700: "#0052b4",
          800: "#003c7a",
          900: "#00254d"
        }
      },
      boxShadow: {
        'glass': '0 4px 32px 0 rgba(31, 41, 55, 0.20)'
      }
    },
  },
  plugins: [],
}