// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
//   theme: {
//     extend: {
//       screens: {
//         content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,css}"],
//         theme: {
//           extend: {
//             screens: {
//               xs: "320px",
//               sm: "375px",
//               sml: "500px",
//               md: "667px",
//               mdl: "768px",
//               lg: "960px",
//               lgl: "1024px",
//               xl: "1280px",
//             },
//             fontFamily: {
//               bodyFont: ["Poppins", "sans-serif"],
//               titleFont: ["Montserrat", "sans-serif"],
//             },
//             colors: {
//               bodyColor: "rgb(12, 7, 41)",
//               lightText: "#c4cfde",
//               boxBg: "rgb(207, 37, 37)",
//               designColor: "rgb(53, 179, 214)",
//               lineColor: "rgb(8, 11, 16)",
//               primary: "#0B0C10",
//               secondary: "#1F2833",
//               tertary_I: "#45A29E",
//               cardOne: "rgb(23, 21, 55)",
//               cardTwo: "rgb(60, 78, 127)",
//               'dark-primary': 'rgb(12, 7, 41)',
//               'dark-secondary': 'rgb(20, 15, 50)',
//               'dark-accent': 'rgb(30, 25, 60)',
//               line: {
//                 DEFAULT: "#05265aff",   // default brand color (blue-500)
//                 hover: "#2563EB",     // darker on hover
//                 active: "#1D4ED8",    // even darker on active
//                 focus: "#60A5FA",     // lighter for focus
//               },
//             },
//             animation: {
//               'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
//               'slide-in-right': 'slideInRight 0.8s ease-out forwards',
//               'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
//               'scale-in': 'scaleIn 0.5s ease-out forwards',
//               'timeline-draw': 'timelineDraw 2s ease-out forwards',
//             },
//             keyframes: {
//               slideInLeft: {
//                 '0%': { transform: 'translateX(-100px)', opacity: '0' },
//                 '100%': { transform: 'translateX(0)', opacity: '1' },
//               },
//               slideInRight: {
//                 '0%': { transform: 'translateX(100px)', opacity: '0' },
//                 '100%': { transform: 'translateX(0)', opacity: '1' },
//               },
//               fadeInUp: {
//                 '0%': { transform: 'translateY(30px)', opacity: '0' },
//                 '100%': { transform: 'translateY(0)', opacity: '1' },
//               },
//               scaleIn: {
//                 '0%': { transform: 'scale(0.8)', opacity: '0' },
//                 '100%': { transform: 'scale(1)', opacity: '1' },
//               },
//               timelineDraw: {
//                 '0%': { strokeDashoffset: '1000' },
//                 '100%': { strokeDashoffset: '0' },
//               },
//             },
//             borderColor: {
//               line: "#29374dff",
//               "brand-hover": "#2563EB",
//               "brand-active": "#1D4ED8",
//               "brand-focus": "#60A5FA",
//             },

//             boxShadow: {
//               shadowOne: "0px 0px 5px rgb(112, 140, 171)",
//               shadowTwo: "0px 0px 5px rgb(112, 140, 171)",
//             },
//           },
//         },
//         variants: {
//           extend: {
//             borderColor: ["hover", "focus", "active"],
//           },
//         },
//         plugins: [
//         ],
//       }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      screens: {
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
        lineColor: "rgb(8, 11, 16)",
        primary: "#0B0C10",
        secondary: "#1F2833",
        tertary_I: "#45A29E",
        cardOne: "rgb(23, 21, 55)",
        cardTwo: "rgb(60, 78, 127)",
        'dark-primary': 'rgb(12, 7, 41)',
        'dark-secondary': 'rgb(20, 15, 50)',
        'dark-accent': 'rgb(30, 25, 60)',
        line: {
          DEFAULT: "#05265aff",
          hover: "#2563EB",
          active: "#1D4ED8",
          focus: "#60A5FA",
        },
      },
      animation: {
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'timeline-draw': 'timelineDraw 2s ease-out forwards',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        timelineDraw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      borderColor: {
        line: "#29374dff",
        "brand-hover": "#2563EB",
        "brand-active": "#1D4ED8",
        "brand-focus": "#60A5FA",
      },
      boxShadow: {
        shadowOne: "0px 0px 5px rgb(112, 140, 171)",
        shadowTwo: "0px 0px 5px rgb(112, 140, 171)",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["hover", "focus", "active"],
    },
  },
  plugins: [],
};
