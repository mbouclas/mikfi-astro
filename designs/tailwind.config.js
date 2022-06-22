module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#53c0fe",
        secondary: "#ffffff",
        accent: "#605c5c",
        deepSaphire: "#00366F",
      },
      screens:{
        xs: "400px",
        xll: "1310px"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
}
