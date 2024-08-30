/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./*.html"],
  theme: {
    extend: {
      colors:{
        "bookmark-purple":"#5267DF",
        "bookmark-red":"#EA5959",
        "bookmark-blue":"#242945",
        "bookmark-grey":"#919A42",
        "bookmark-blue":"#f7f7f7",
      },
    },
    fontFamily:{
      Poppins:['Poppins, sans-serif']
    },
    container:{
      center:true,
      padding:"1rem",
      screens:{
        lg:"1124px",
        xl:"1124px",
        "2xl":"1124px",
      }
    }
  },
  plugins: [],
}