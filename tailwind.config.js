/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        red: "#EE5454",
        purple: "#A729F5",
        green: "#26D782",
        blue: "#306AFF",
      },
      backgroundColor: {
        primary: "#F4F6FA",
        secondary: "#FFF",
        darkPrimary: "#313E51",
        darkSecondary: "#3B4D66",
      },
      textColor: {
        primary: "#313E51",
        secondary: "#626C7F",
        darkPrimary: "#FFF",
        darkSecondary: "#ABC1E1",
      },
      fontFamily: { rubik: ["Rubik", "sans-serif"] },
    },
  },
  plugins: [],
};
