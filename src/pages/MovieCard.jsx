import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MovieCard() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const token = import.meta.env.VITE_API_TOKEN;
      const apiUrl = import.meta.env.VITE_API_URL;
      // .env의 api,url 변수 설정

      const response = await fetch(
        `${apiUrl}movie/popular?language=ko-KR&page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        }
      );
      const data = await response.json(); //json 형태로 받아온걸 data에 저장

      const filtered = data.results.filter(
        (results) => results.adult === false
      ); // data.results.adult가 false한 것만 가져오기

      setMovieList(filtered); //골라낸것을 상태에 저장
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="p-2 gap-6 flex flex-wrap items-center justify-center bg-black ">
        {movieList.map((results) => (
          <Link
            to={`/detail/${results.id}`}
            key={results.id}
            className=" border-[1px] border-solid"
          >
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
