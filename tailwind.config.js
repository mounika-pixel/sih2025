/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ECEEDF',
        'secondary': '#D9C4B0',
        'accent': '#CFAB8D',
      },
    },
  },
  plugins: [],
}