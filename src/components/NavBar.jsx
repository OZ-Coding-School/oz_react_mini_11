import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentQuery = new URLSearchParams(location.search).get("query") || "";
  const [searchTerm, setSearchTerm] = useState(currentQuery);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (
      debouncedSearchTerm.trim() &&
      (location.pathname !== "/search" || currentQuery !== debouncedSearchTerm)
    ) {
      navigate(`/search?query=${debouncedSearchTerm}`, { replace: true });
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="w-full bg-black px-6 py-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-white">
        🎬 Movie App
      </Link>
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white hover:text-purple-400">
          홈
        </Link>
        <Link to="/movies/1" className="text-white hover:text-purple-400">
          상세페이지
        </Link>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="영화 이름을 입력하세요"
          className="px-3 py-1 rounded bg-white text-black w-48"
        />
      </div>
    </div>
  );
}

export default NavBar;
