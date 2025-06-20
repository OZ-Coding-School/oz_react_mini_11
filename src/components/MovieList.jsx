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
    <div className="bg-gradient-to-b from-rose-50 via-pink-100 to-rose-100 min-h-screen p-6 text-rose-900">
      <h2 className="text-3xl font-bold mb-6 tracking-wide border-l-4 border-pink-300 pl-3">
        🔥 이번 주 추천작
      </h2>
      <MovieSlider />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
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
