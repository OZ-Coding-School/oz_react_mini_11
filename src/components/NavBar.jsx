import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [query, setQuery] = useState([]);

  const handleSearch = () => {
    window.location.href = `/searchresults?query=${query}`;
  };

  return (
    <>
      <nav className="flex bg-black bg-contain justify-around items-center">
        <Link to="/">
          <h3
            className="
              bg-lime-100
                font-extrabold
                text-4xl
                text-violet-500
                rounded-xs
                bg-cover
                m-[5px]
                p-3
            "
          >
            OZ 무비
          </h3>
        </Link>
        <input
          type="text"
          placeholder="검색..."
          className="
              bg-white
                m-[15px]
                rounded-s
                w-[50%]
                p-3
            "
          onChange={e => setQuery(e.target.value)}
        />
        <div
          onClick={handleSearch}
          div
          className="p-2 hover:bg-gray-200 rounded-full transition bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
            />
          </svg>
        </div>

        <Link to="/login">
          <div
            className="
                bg-lime-200
                text-gray-800
                font-semibold
                text-[18px]
                p-3
                rounded-xs
            "
          >
            로그인
          </div>
        </Link>
        <Link to="/signin">
          <div
            className="
             bg-lime-200
                text-gray-700
                font-semibold
                text-[18px]
                p-3
                rounded-xs
            "
          >
            회원가입
          </div>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
