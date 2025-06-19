import { useState } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { useEffect } from "react";

export default function NavBar() {
  const [movieList, setMovieList] = useState([]);
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 500);

  useEffect(() => {
    if (debouncedInput) {
      const fetchSearchResults = async () => {
        const token = import.meta.env.VITE_API_TOKEN;
        const apiUrl = import.meta.env.VITE_API_URL;

        const response = await fetch(
          `${apiUrl}search/movie?query=${debouncedInput}&language=ko-KR&page=1`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        setMovieList(data);
      };

      fetchSearchResults();
    }
  }, [debouncedInput]);

  return (
    <div className="flex bg-emerald-800 h-[30px] flex-wrap">
      <Link to={`/`} className="pr-[50px] pl-[10px] text-[19px]">
        재은TV
      </Link>
      <div>
        <input
          className="w-[60%] mt-[2px] h-[25px] text-black bg-green-50 rounded-[10px] pr-[10px] pl-[10px]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {movieList.results && movieList.results.length > 0 && (
          <ul className="absolute top-[30px] left-0 w-full bg-white text-black rounded-md shadow-md z-10">
            {movieList.results.map((movie) => (
              <li key={movie.id} className="p-2 hover:bg-emerald-100">
                <Link
                  to={`/detail/${movie.id}`}
                  className="block w-full h-full"
                  onClick={() => {
                    setMovieList([]);
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="pl-[50px] text-[19px]">로그인</div>
      <div className="pl-[10px] text-[19px]">회원가입</div>
    </div>
  );
}
