import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { TMDB_GET_OPTION, TMDB_SEARCH_API_BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search?query=${encodeURIComponent(keyword)}`);
    }
  };

  useEffect(() => {
    if (debouncedKeyword) {
      fetch(
        `${TMDB_SEARCH_API_BASE_URL}?query=${debouncedKeyword}&language=ko`,
        TMDB_GET_OPTION
      )
        .then((res) => res.json())
        .then((data) => setSearchResults(data.results))
        .catch((err) => console.error("검색 실패:", err));
    } else {
      setSearchResults([]);
    }
  }, [debouncedKeyword]);

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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="영화 이름을 입력하세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            style={styles.search}
          />
        </form>
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
