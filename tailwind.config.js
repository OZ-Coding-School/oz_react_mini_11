export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        colors: {
          gold: '#FFD700',
        }
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
