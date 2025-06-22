import React from "react";
import MovieCard from "./MovieCard";

const GenreMovieList = ({ title, movies, onClick, darkMode }) => {
  if (!movies || movies.length === 0) return null;

  const filteredMovies = movies.filter((movie) => !movie.adult).slice(0, 10);

  return (
    <div style={{ marginBottom: "40px" }}>
      <style>{`
        .genre-movie-list-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .genre-movie-list-scroll::-webkit-scrollbar-thumb {
          background-color: ${darkMode ? "#555" : "#ccc"};
          border-radius: 3px;
        }
        .genre-movie-list-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>

      <h3
        style={{
          fontSize: "1.5rem",
          marginBottom: "16px",
          color: darkMode ? "#f0f0f0" : "#000",
        }}
      >
        {title}
      </h3>
      <div
        className="genre-movie-list-scroll"
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "8px",
          scrollbarWidth: "thin",
          scrollbarColor: darkMode ? "#555 transparent" : "#ccc transparent",
        }}
      >
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            style={{ minWidth: "180px", flexShrink: 0 }}
          >
            <MovieCard
              movie={movie}
              onClick={() => onClick && onClick(movie.id)}
              darkMode={darkMode}
              large={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreMovieList;
