const colors = require("tailwindcss/colors");
const typography = require("./tailwind.typography");

module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  // mode: "jit",
  darkMode: false,

  theme: {
    extend: {
      typography: { DEFAULT: typography },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography")({
      modifiers: ["sm", "lg"],
    }),
  ],
};
