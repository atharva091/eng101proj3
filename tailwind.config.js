/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'natgeo-yellow': '#FFCC00',
        'natgeo-brown': '#3D2B1F',
        'natgeo-orange': '#F39C12',
        'lab-white': '#FFFFFF',
        'lab-light': '#F8F9FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
