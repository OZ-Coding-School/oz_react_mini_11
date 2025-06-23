import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import { useTheme } from "../contexts/ThemeContext";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { darkMode, toggleDarkMode } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "#1a202c" : "#ffffff",
        color: darkMode ? "#f7fafc" : "#1a202c",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <NavBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Outlet context={{ searchTerm, darkMode, toggleDarkMode }} />
    </div>
  );
};

export default Layout;
