import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieSlider from "../components/MovieSlider";
import SkeletonCard from "./SkeltonCard";
import {
  TMDB_BASE_URL,
  TMDB_POPULAR_API_PATH,
  TMDB_GET_OPTION,
} from "../constants";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${TMDB_BASE_URL}${TMDB_POPULAR_API_PATH}`, TMDB_GET_OPTION)
      .then((res) => res.json())
      .then((data) => {
        const filteredMovies = data.results.filter((movie) => !movie.adult);
        setMovies(filteredMovies);
      })
      .catch((err) => {
        console.error("❌ 영화 불러오기 실패:", err);
        setError("영화 데이터를 불러오는 데 실패했습니다. 다시 시도해주세요.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#1e1e1e] min-h-screen p-6 text-white">
      <MovieSlider />

      <h2 className="text-2xl font-bold mt-10 mb-6 tracking-wide border-l-4 border-purple-500 pl-3">
        🎬 상영 중인 영화
      </h2>

      {error && <p className="text-red-400 text-center mb-6">{error}</p>}

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
