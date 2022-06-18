module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Varela Round"],
        serif: ["Roboto Slab"],
      },
      colors: {
        primary: "#3490DE",
        secondary: "#E1E2EF",
        "text-light": "#E1E2EF",
        "primary-dark": "#05204A",
        "secondary-dark": "#ADAEBA",
        "text-dark": "#02020A",
      },
    },
  },
  plugins: [],
};
