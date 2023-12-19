/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B3CC9",
        secondary: "#F28D35",
      },
      fontFamily: {
        Poppins: "Poppins",
        inter: "inter",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
      xxl: "1536px",
    },
  },
  plugins: [],
};
