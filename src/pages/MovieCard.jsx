import { useEffect } from "react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function MovieCard() {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchMovies = async () => {
      const token = import.meta.env.VITE_API_TOKEN;
      const apiUrl = import.meta.env.VITE_API_URL;

      let url = "";
      //url을 빈 문자열로 만들어 놓은 후

      if (query && query.trim() !== "") {
        url = `${apiUrl}search/movie?query=${encodeURIComponent(
          query
        )}&language=ko-KR&page=1`;
        // encodeURIComponent는 url에 포함될 수 없는 문자들을 안전하게 변환해주는 함수이다.
        //
      } else {
        url = `${apiUrl}movie/popular?language=ko-KR&page=1`;
        // 쿼리스트링을 받지 못했다면 인기ㅍㅔ이지로 이동
      }

      const response = await fetch(
        `${apiUrl}movie/popular?language=ko-KR&page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        }
      );
      const data = await response.json();

      const filtered = data.results.filter(
        (results) => results.adult === false
      );

      setMovieList(filtered);
    };

    fetchMovies();
  }, [query]);

  return (
    <>
      <div className="p-2 gap-6 flex flex-wrap items-center justify-center bg-gray-900 ">
        {movieList.map((results) => (
          <Link to={`/detail/${results.id}`} key={results.id} className=" ">
            <div className="transition-transform duration-300 hover:scale-105">
              <img
                src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
                alt={results.title}
                className="w-[200px] aspect-[2/3] object-cover rounded-t-xl"
              />
              <nav className="text-[12px] p-[2px] border-t-[1px] bg-amber-50">
                {results.title}
              </nav>
              <nav className="text-[10px] p-[2px] rounded-b-xl bg-amber-50">
                {results.vote_average}
              </nav>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
