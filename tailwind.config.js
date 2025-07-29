/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./hobo.html"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'orange': {
          500: '#f97316',
          600: '#ea580c',
        }
      }
    },
  },
  plugins: [],
} 