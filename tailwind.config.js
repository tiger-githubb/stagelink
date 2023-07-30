/** @type {import('tailwindcss').Config} */
export default {
  
  //content: ["./src/**/*.{html,js}"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#130160',
        'secondary' : '#BA2D0B;;',
        'titlecolor' : '#0D0140',
        'textcolor' : '#524B6B',
        'third' : '#D6CDFE',
        'greyIsh': '#f1f4f8',
        'disable': 'rgba(19, 1, 96, 0.38)',
      }
    },
  },
  plugins: [],
}

