import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieSlider from "../components/MovieSlider";
import { TMDB_GET_OPTION } from "../constans";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko",
      TMDB_GET_OPTION
    )
      .then((res) => res.json())
      .then((data) => {
        const filteredMovies = data.results.filter((movie) => !movie.adult);
        setMovies(filteredMovies);
      })
      .catch((err) => console.error("영화 관람 제한:", err));
  }, []);

  return (
    <div className="movie-grid">
      <h2>🔥이번주 추천작</h2>
      <MovieSlider />
      {movies.map((movie) => (
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
