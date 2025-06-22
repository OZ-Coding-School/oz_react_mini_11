import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import { useTheme } from "../contexts/ThemeContext";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { darkMode } = useTheme();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "#1a202c" : "#ffffff",
        color: darkMode ? "#f7fafc" : "#1a202c",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <NavBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <Outlet context={{ searchTerm }} />
    </div>
  );
};

export default Layout;
