/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}", "**/index.html"],
  theme: {
    extend: {
      colors: {
        text: "#1A1A1B",
        background: "#F8F8F8",
        primary: "#2757FF",
        secondary: "",
        accent: "#8F9193",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50.5%)" },
        },
      },
      animation: {
        slide: "slide 20s linear infinite",
      },
    },
  },
  plugins: [],
};
