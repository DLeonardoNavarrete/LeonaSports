/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'leona-gold': '#dcb64e',   // Un dorado elegante para detalles
        'leona-dark': '#1A1A1A',   // Negro mate para el fondo premium
        'leona-gray': '#d9d9d9',   // Gris claro para contraste
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}