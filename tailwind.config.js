/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      //
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans - serif"],
      },
      colors: {
        "nedion-fuchsia1": "#f5d0fe",
        "nedion-fuchsia2": "#e879f9",
        "nedion-fuchsia3": "#a21caf",
        "nedion-grey": "#DDDDDD",
        "nedion-white": "#F7F7F7",
      },
    },
  },
  plugins: [],
};
