/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'card-dark': '#000000',
        'card-light': '#000000',
      },
      textColor: {
        'card-text': '#FFFFFF',
      },
    },
  },
  plugins: [],
}