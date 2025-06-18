import React, { useState } from "react";
import movieListData from "../data/movieListData.json";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies] = useState(movieListData.results);

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          poster={movie.poster_path}
        />
      ))}
    </div>
  );
}

export default MovieList;
