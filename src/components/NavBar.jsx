import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { TMDB_GET_OPTION, TMDB_SEARCH_API_BASE_URL } from "../constants";

function NavBar() {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword);
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
        .catch((err) => console.error("검색 실패:", err));
    }
  }, [debouncedKeyword]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white text-gray-900 shadow-md">
      <h2 className="text-xl font-bold">🎬 Movie App</h2>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-purple-600 transition">
          홈
        </Link>
        <Link to="/movies/1" className="hover:text-purple-600 transition">
          상세페이지
        </Link>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="영화 이름을 입력하세요"
            className="bg-gray-100 text-gray-900 px-3 py-1 rounded focus:outline-none focus:ring focus:ring-purple-400"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
