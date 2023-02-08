/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'homepage-grid-cols': '260px 1fr',
      },

      gridTemplateRows: {
        'homepage-grid-rows': 'auto 1fr',
      },
    },
  },
  plugins: [],
};