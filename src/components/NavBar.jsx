import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { useAuth } from "../contexts/AuthContext";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

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
    <nav className="w-full bg-black px-6 py-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-white">
        🎬 Movie App
      </Link>

      <input
        type="text"
        placeholder="영화 검색..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-3 py-1 rounded-md text-black w-52 bg-white"
      />

      {user ? (
        <div className="relative group">
          <img
            src={`https://avatars.dicebear.com/api/initials/${user.user_metadata.name}.svg`}
            alt="profile"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
          <div className="absolute hidden group-hover:flex flex-col right-0 mt-2 bg-white text-black rounded shadow p-2">
            <Link to="/mypage" className="hover:underline">
              마이페이지
            </Link>
            <button onClick={logout} className="text-red-500 hover:underline">
              로그아웃
            </button>
          </div>
        </div>
      ) : (
        <div className="space-x-4">
          <Link to="/signup" className="text-blue-400 hover:underline">
            회원가입
          </Link>
          <Link to="/login" className="text-blue-400 hover:underline">
            로그인
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
