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
      .catch((err) => console.error("영화 관람 제한:", err));
    setLoading(false);
  }, []);

  return (
    <div className="movie-grid">
      <h2>🔥이번주 추천작</h2>
      <MovieSlider />
      {loading
        ? Array(8)
            .fill(0)
            .map((_, idx) => <SkeletonCard key={idx} />)
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
  );
}

export default MovieList;
