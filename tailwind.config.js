/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: { primary: "#0029df", hover: "#002fff" },
      },
    },
  },
  plugins: [],
};
