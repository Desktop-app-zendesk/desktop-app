/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'zen-green-800': '#03363D',
        'zen-whitebg': '#F8F9F9',
        'zen-grayborder': '#D8DCDE',
        'zen-selectedbg': '#D4D4D8',
        'zen-open': '#E34F32',
        'zen-gray-text': '#2F3941',
        'zen-blue-text': '#1F73B7',
        'zen-border': '#D8DCDE',
        'zen-header-label': '#68737D',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
    },
  },
  plugins: [],
});
