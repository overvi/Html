/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/components/*.js"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        lines: "url('../src/assets/lines.png')",
        nature: "url('../src/assets/nature.png')",
      },
      colors: {
        gray: {
          950: "#131313",
          900: "#181818",
          700: "#303030",
        },
        orange: {
          400: "#f9b233",
        },
      },
    },
  },
  plugins: [],
};
