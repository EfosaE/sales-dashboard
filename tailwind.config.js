/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        'primary-1': '#F5F7FA', // Define your custom color
        gray: '#B1B1B1',
        'primary-2': '#2D60FF',
      },
      fontFamily: {
        mont: ['Mont', 'sans-serif'], // Define your custom font family
      },
    },
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [],
};