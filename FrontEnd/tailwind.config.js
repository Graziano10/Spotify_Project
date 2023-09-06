/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "300px",

      sm:	"640px",

      md: "768px",

      mdd: "857px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1451px",
    },
    extend: {
      colors: {
        primary: "#535353", // grey bg-main
        secondary: "#b3b3b3", // Grey 02 text
        tertiary: " #121212", // black ***
        fourth: "  black", // Black bg-nav
        invert: " #1ed760", // Greeen button
        colorText: "white" //white text
        // invert: " #1db954",
        
      },
    },
  },
  plugins: [],
};