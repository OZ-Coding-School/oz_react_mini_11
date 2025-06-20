/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Vite는 이거 필요
    "./src/**/*.{js,jsx,ts,tsx}", // React 컴포넌트 경로
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e50914", // 넷플릭스 느낌
        dark: "#141414",
        light: "#f5f5f1",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [], // 이거 꼭 넣어야 Tailwind 플러그인 정상 작동
};
