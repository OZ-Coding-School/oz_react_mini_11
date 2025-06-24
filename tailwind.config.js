/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: { primary: "#df0000", hover: "#bd0101" },
      },
      backgroundImage: {
        auth: "url(src/assets/bg.png)",
      },
    },
  },
  plugins: [],
};
