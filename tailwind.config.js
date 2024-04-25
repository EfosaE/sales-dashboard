/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        'primary-2': '#343C6A', // Define your custom color
        'gray': '#B1B1B1'
      },
      fontFamily: {
        'mont': ['Mont', 'sans-serif'], // Define your custom font family
      },
    },
  },
  plugins: [],
}