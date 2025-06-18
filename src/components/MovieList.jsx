import React, { useState } from "react";
import movieListData from "../data/movieListData.json";
import MovieCard from "./MovieCard";
import MovieSlider from "../components/MovieSlider";

function MovieList() {
  const [movies] = useState(movieListData.results);

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
