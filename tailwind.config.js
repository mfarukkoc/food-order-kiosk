/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--poppins-font)", ...fontFamily.sans],
        serif: ["var(--poppins-font)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
