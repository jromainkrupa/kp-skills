const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./app/**/*.html.erb", "./app/javascript/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aquamarine: {
          50: "#f3fffc",
          100: "#e7fffa",
          200: "#c3fff2",
          300: "#9fffea",
          400: "#58ffdb",
          500: "#10ffcb",
          600: "#0ee6b7",
          700: "#0cbf98",
          800: "#0a997a",
          900: "#087d63",
        },
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
