/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'zen-green-800': '#03363D',
        'zen-white-100': '#F8F9F9',
        'zen-orange-500': '#E34F32',
        'zen-blue-400': '#144a75',
        'zen-blue-500': '#1F73B7',
        'zen-gray-200': '#D8DCDE',
        'zen-gray-300': '#D4D4D8',
        'zen-gray-500': '#68737D',
        'zen-gray-800': '#2F3941',
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
