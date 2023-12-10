/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#090932",
        hoverBlue: "#065668",
        bgBlack: "#202124",
        cardBlack: "#282828",
        lightBlack: "#565656"
      },
    },
  },
  plugins: [],
}