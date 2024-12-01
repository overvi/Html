/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const colors = {
  ...defaultColors,
  ...{
    primary: {
      50: "#FFF7E6",
      100: "#FFEACD",
      200: "#FFDEB5",
      300: "#FBC690",
      400: "#F9B233",
      500: "#F28B0E",
      600: "#DD6C02",
      700: "#B55301",
      800: "#8D3D00",
    },
    storm: {
      50: "#f6f6f6",
      100: "#e7e7e7",
      200: "#d1d1d1",
      300: "#b0b0b0",
      400: "#888888",
      500: "#6d6d6d",
      600: "#616161",
      700: "#4f4f4f",
      800: "#454545",
      900: "#3d3d3d",
      950: "#262626",
    },
    green: {
      50: "#f1fcf5",
      100: "#dff9ea",
      200: "#c1f1d5",
      300: "#90e5b5",
      400: "#58d08d",
      500: "#2fac66",
      600: "#239656",
      700: "#1f7646",
      800: "#1e5d3b",
      900: "#1a4d32",
      950: "#092a19",
    },
    state: {
      error: "#DC2626",
    },
    gray: {
      500: "#767676",
    },
  },
};

module.exports = {
  content: ["./**/*.html", "./src/components/*.js", "./src/ts/*.ts"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        xxl: "1400px",
      },
      spacing: {
        13: "3.375rem",
        7.5: "1.875rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sens-serif"],
      },
      backgroundImage: {
        lines: "url('/public/assets/images/lines.png')",
        nature: "url('/public/assets/images/nature.png')",
      },
      borderRadius: {
        "3.5xl": "1.875rem",
        "2.5xl": "2rem",
      },
      fontWeight: {
        600: "600",
        750: "750",
      },

      fontSize: {
        "4.5xl": "2.375rem",
        x: ".875rem",
        "3.5xl": "2rem",
      },

      boxShadow: {
        tbody: `inset 0 0 0 1px ${colors.storm[200]}`,
        "tbody-dark": `inset 0 0 0 1px ${colors.storm[500]}`,
        "tbody-light": `inset 0 0 0 1px #ECECEC`,
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
    }),
  ],
};
