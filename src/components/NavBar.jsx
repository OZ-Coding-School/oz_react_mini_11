import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🎬 Movie App</h2>
      <div style={styles.menu}>
        <Link to="/" style={styles.link}>
          {" "}
          홈{" "}
        </Link>
        <Link to="/movies/1" style={styles.link}>
          {" "}
          상세페이지{" "}
        </Link>
        <input
          type="text"
          placeholder="영화 이름을 입력하세요"
          style={styles.search}
        />
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  menu: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
  search: {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "none",
  },
};

export default NavBar;
