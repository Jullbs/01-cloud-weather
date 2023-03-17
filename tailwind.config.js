/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'lilac-300': '#9D99E4',
        'lilac-400': '#8E87FA',
        'lilac-450': '#6D67D0',
        'lilac-500': '#6660C8',
        'light-pink-200': '#F7C8FF'
      },
      colors: {
        'lilac-100': '#E7E6FB',
        'lilac-150': '#DAD8F7',        
        'lilac-200': '#C2BFF4',
        'cyan-300': '#87EBCD',
      },
      fontFamily: {
        'default': 'Lato',
      },
      maxHeight: {
        '15': '3.75rem',
        '120': '30rem',
      },
      maxWidth: {
        '36': '9.25rem',
        '120': '30rem',
      }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}
