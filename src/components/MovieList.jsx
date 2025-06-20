import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieSlider from "../components/MovieSlider";
import SkeletonCard from "./SkeltonCard";
import { TMDB_POPULAR_API_URL, TMDB_GET_OPTION } from "../constants";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(TMDB_POPULAR_API_URL, TMDB_GET_OPTION)
      .then((res) => res.json())
      .then((data) => {
        const filteredMovies = data.results.filter((movie) => !movie.adult);
        setMovies(filteredMovies);
      })
      .catch((err) => console.error("❌ 영화 불러오기 실패:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#1e1e1e] min-h-screen p-6 text-white">
      {/* 인기 영화 슬라이더 먼저 배치 */}
      <MovieSlider />

      {/* 아래쪽에 본문 제목 */}
      <h2 className="text-2xl font-bold mt-10 mb-6 tracking-wide border-l-4 border-purple-500 pl-3">
        🎬 상영 중인 영화
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {loading
          ? Array(10)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          : movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                poster={movie.poster_path}
              />
            ))}
      </div>
    </div>
  );
}

export default MovieList;
