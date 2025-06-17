import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">OZ무비</h1>

      <input
        type="text"
        className="search-input"
        placeholder="영화를 검색해보세요"
      />

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/details">Detail</Link>
      </div>
    </nav>
  );
}

export default NavBar;
