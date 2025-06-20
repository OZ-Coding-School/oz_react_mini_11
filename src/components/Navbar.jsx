import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
 
  const {darkMode, setDarkMode } = useTheme();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  return (
    <nav className="sticky top-0 z-50 flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md">

      <div style={{ flex: 1, textAlign: "center" }}>
        <input
          type="text"
          placeholder="영화 검색..."
          className="w-full sm:w-1/2 max-w-lg px-4 py-2 mb-3 sm:mb-0 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="flex gap-3 items-center">
        <button className="px-4 py-2 rounded-full text-sm font-medium transition bg-blue-600 hover:bg-blue-700 text-white">
          로그인
        </button>
        <button className="px-4 py-2 rounded-full text-sm font-medium transition bg-green-600 hover:bg-green-700 text-white">
          회원가입
        </button>
        <div className="flex gap-3 items-center">
          <button 
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-full text-sm font-medium transition bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white">
            {darkMode ? "☀️ 라이트모드" : "🌙 다크모드"}
          </button>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
