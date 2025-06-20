import React from "react";
import MovieCard from "./MovieCard";

const GenreMovieList = ({ title, movies, onClick }) => {
    if (!movies || movies.length === 0) 
        return null;

    return (
        <div style={{ marginBottom: "40px" }}>
      <h3 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>{title}</h3>
      <div style={{ display: "flex", gap: "20px", overflowX: "auto" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ minWidth: "180px", flexShrink: 0 }}>
            <MovieCard movie={movie} onClick={() => onClick(movie.id)} />
          </div>
        ))}
      </div>
    </div>
    )
}

export default GenreMovieList;
