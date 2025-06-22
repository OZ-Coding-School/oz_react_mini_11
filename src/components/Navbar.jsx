import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { darkMode, toggleTheme } = useTheme();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: darkMode ? "#1a202c" : "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        padding: "16px 24px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        flexWrap: "wrap",
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "1.25rem", color: darkMode ? "#f7fafc" : "#1a202c" }}>
        🎬 MovieIcon
      </div>

      {/* Search */}
      <div style={{ flex: 1, textAlign: "center", minWidth: isMobile ? "100%" : "300px" }}>
        <input
          type="text"
          placeholder="영화 검색..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "8px 16px",
            borderRadius: "9999px",
            border: "none",
            backgroundColor: darkMode ? "#2d3748" : "#f3f4f6",
            color: darkMode ? "#f7fafc" : "#000000",
            outline: "none",
            fontSize: "1rem",
          }}
          onFocus={(e) => {
            e.target.style.boxShadow = "0 0 0 2px #3b82f6";
          }}
          onBlur={(e) => {
            e.target.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: isMobile ? "center" : "flex-end",
        }}
      >
        <button
          style={{
            padding: "8px 16px",
            borderRadius: "9999px",
            fontSize: "0.875rem",
            fontWeight: "500",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e40af")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
        >
          로그인
        </button>
        <button
          style={{
            padding: "8px 16px",
            borderRadius: "9999px",
            fontSize: "0.875rem",
            fontWeight: "500",
            backgroundColor: "#16a34a",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#15803d")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
        >
          회원가입
        </button>
        <button
          onClick={toggleTheme}
          style={{
            padding: "8px 16px",
            borderRadius: "9999px",
            fontSize: "0.875rem",
            fontWeight: "500",
            backgroundColor: darkMode ? "#4a5568" : "#e5e7eb",
            color: darkMode ? "#f7fafc" : "#1f2937",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = darkMode ? "#2d3748" : "#d1d5db")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = darkMode ? "#4a5568" : "#e5e7eb")
          }
        >
          {darkMode ? "☀️ 라이트모드" : "🌙 다크모드"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
