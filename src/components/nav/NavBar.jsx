import { useEffect, useRef, useState } from "react";
import HomeLogo from "../../assets/HomeLogo.png";
import { CiSearch } from "react-icons/ci";
import { Outlet, useNavigate } from "react-router-dom";
import useDebounce from "../../hook/useDebounce";
import popularData from "../../api/TMDM_api";

export function NavBar() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearch = useDebounce(search);
  const navigate = useNavigate();
  const inputRef = useRef(null); // enter 사용시 검색창이 focus가 되도록 할 ref 생성.

  useEffect(() => {
    const fetchMovie = async () => {
      if (!debouncedSearch.trim()) return;

      try {
        const res = await popularData.get("/search/movie", {
          params: {
            query: debouncedSearch,
            language: "ko-KR",
          },
        });
        setSearchResults(res.data.results);
      } catch (err) {
        console.error("검색 에러: ", err);
        setSearchResults([]);
      }
    };

    fetchMovie();
  }, [debouncedSearch]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchResults.length > 0) {
      navigate(`/details/${searchResults[0].id}`);
      setSearch("");
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const handleGlobalkeyDown = (e) => {
      if (e.key === "Enter" && document.activeElement !== inputRef.current) {
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleGlobalkeyDown);

    return () => window.removeEventListener("keydown", handleGlobalkeyDown);
  }, []);

  return (
    <div className="flex items-center justify-around w-screen h-22 bg-[#D6EAF8]">
      <div className="flex-1/4 flex justify-center items-center">
        <img src={HomeLogo} className="w-28 h-auto"></img>
      </div>
      <div className="flex-2/4 flex items-center relative">
        <CiSearch className="absolute left-3 text-3xl text-gray-500" />
        <input
          type="text"
          placeholder="영화 이름 ..."
          ref={inputRef}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border-none bg-white rounded-2xl p-3 pl-13 sm:w-80 md:w-96 lg:w-[50rem]"
        />
        {searchResults.length > 0 && (
          <ul className="absolute top-full mt-2 w-full bg-white rounded-md shadow-md z-10 max-h-60 overflow-y-auto">
            {searchResults.slice(0, 5).map((movie) => (
              <li
                key={movie.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  navigate(`/details/${movie.id}`);
                  setSearch("");
                  setSearchResults([]);
                }}
              >
                {movie.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex-1/4 justify-center items-center flex gap-3">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  );
}
