/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "rgb(12, 7, 41)",
        lightText: "#c4cfde",
        boxBg: "rgb(207, 37, 37)",
        designColor: "rgb(53, 179, 214)",
        lineColor:"rgb(8, 11, 16)",
        primary:"#0B0C10",
        secondary:"#1F2833",
        // tertary:"rgb(120, 170, 236)",
        tertary_I:'#45A29E',
        cardOne:'rgb(23, 21, 55)',
        cardTwo:"rgb(60, 78, 127)"
        
      },
      boxShadow: {
        shadowOne: "0px 0px 5px rgb(112, 140, 171) ",
        shadowTwo: "0px 0px 5px rgb(112, 140, 171) ",

      },
    },
  },
  plugins: [],
};
