import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import useDebounce from "../hooks/useDebounce";

function NavBar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const debouncedKeyword = useDebounce(keyword, 500);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    if (debouncedKeyword.trim()) {
      const currentPath = location.pathname;
      const isOnSearch = currentPath.startsWith("/search");

      if (!isOnSearch) {
        navigate(
          `/search?query=${encodeURIComponent(debouncedKeyword.trim())}`
        );
      }
    }
  }, [debouncedKeyword]);

  return (
    <nav className="flex flex-col md:flex-row md:justify-between items-center px-6 py-3 bg-gray-100 shadow gap-2">
      <div className="flex justify-between w-full md:w-auto items-center">
        <Link to="/" className="text-xl font-bold text-black">
          🎬 Movie App
        </Link>
      </div>
      <div className="w-full md:w-auto flex items-center bg-white px-3 py-1 rounded shadow">
        <input
          type="text"
          placeholder="영화 제목 검색"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="bg-transparent outline-none text-sm text-black w-full"
        />
        <span className="text-sm text-gray-500 ml-2">🔍</span>
      </div>
      {user ? (
        <div className="relative mt-2 md:mt-0">
          <img
            src={user.thumbnail}
            alt="프로필"
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={toggleMenu}
          />
          {isMenuOpen && (
            <div className="absolute top-10 right-0 bg-white text-black shadow-lg rounded w-40 py-2 z-10">
              <p className="px-4 py-2 text-sm border-b">{user.name}님</p>
              <Link
                to="/mypage"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                마이 페이지
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                로그아웃
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-3 mt-2 md:mt-0">
          <Link to="/login" className="text-sm text-blue-500 hover:underline">
            로그인
          </Link>
          <Link to="/signup" className="text-sm text-blue-500 hover:underline">
            회원가입
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
