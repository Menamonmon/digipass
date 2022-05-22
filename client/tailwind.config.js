module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Varela Round"],
    },
    extend: {
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
