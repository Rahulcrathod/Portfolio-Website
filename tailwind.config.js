/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
