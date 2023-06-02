/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
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
