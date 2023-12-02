/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#202020',
        'secondary': '#181818',
        'border': '#282828',
        'purple': '#f588f9'
      }
    },
  },
  plugins: [],
}