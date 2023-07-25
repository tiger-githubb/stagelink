/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary' : '#130160',
        'secondary' : '#BA2D0B',
        'titlecolor' : '#0D0140',
        'textcolor' : '#524B6B',
        'third' : '#D6CDFE',
        'disable': 'rgba(19, 1, 96, 0.38)'
      }
    },
  },
  plugins: [],
}

