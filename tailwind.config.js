/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      veryDarkBlue: "hsl(233, 47%, 7%)",
      veryDesaturatedBlue: "hsl(244, 38%, 16%)",
      softViolet: "hsl(277, 64%, 61%)",
      white: "hsl(0, 0%, 100%)",
      slightyTransWhite: "hsla(0, 0%, 100%, 0.75)",
      slightlyTransWhiteHeading: "hsla(0, 0%, 100%, 0.6)",
    },
    extend: {},
  },
  plugins: [],
}

