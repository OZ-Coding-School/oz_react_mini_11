import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { Link } from "react-router-dom";

function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedSearchTerm.trim()) {
      navigate(`/search?query=${debouncedSearchTerm}`);
    }
  }, [debouncedSearchTerm, navigate]);

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
