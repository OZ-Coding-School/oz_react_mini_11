import React from "react";

const NavBar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#111",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div>
        <input
          type="text"
          placeholder="영화 검색..."
          style={{
            padding: "8px 12px",
            borderRadius: "5px",
            border: "none",
            width: "300px",
            fontSize: "16px",
          }}
          disabled 
        />
      </div>
      <div>
        <button
          style={{
            marginRight: "15px",
            padding: "8px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#444",
            color: "white",
          }}
        >
          로그인
        </button>
        <button
          style={{
            padding: "8px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#444",
            color: "white",
          }}
        >
          회원가입
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
