/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    fontFamily: {
      'header': ['"Playfair Display"'],
      'body': ['"Cambria"']
    },
    extend: {
      colors:{
        primaryRed: '#e44434'
      },
      backgroundImage:{
        batik: "url('/src/assets/images/smallBatikPattern.jpg')"
      },
      display:{
        inherit: 'inherit'
      }
    },
  },
  plugins: [],
}
