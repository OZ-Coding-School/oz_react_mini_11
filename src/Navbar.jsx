import React, { useState } from "react";

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <nav
      style={{ 
        backgroundColor: "#111",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "10px 30px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>

      <div style={{ flex: 1, textAlign: "center" }}>
        <input
          type="text"
          placeholder="영화 검색..."
          style={{ 
            padding: "8px 12px",
            borderRadius: "20px",
            border: "none",
            width: "50%", 
            maxWidth: "400px",
            fontSize: "16px",
            outline: "none",
            backgroundColor: "#fff",
            color: "#000",
          }}
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          style={{ 
            marginRight: "15px",
            padding: "8px 15px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
          }}>
          로그인
        </button>
        <button
          style={{ 
            padding: "8px 15px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
          }}>
          회원가입
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
