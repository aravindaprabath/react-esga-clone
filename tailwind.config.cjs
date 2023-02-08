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
        'dashboardChart-grid-3cols': 'repeat(auto-fit, minmax(600px, 1fr))',
        'dashboardChart-grid-2cols': 'repeat(auto-fit, minmax(800px, 1fr))',
      },

      gridTemplateRows: {
        'dashboardChart-grid-rows': 'auto',
        'homepage-grid-rows': 'auto 1fr',
      },
    },
  },
  plugins: [],
};
