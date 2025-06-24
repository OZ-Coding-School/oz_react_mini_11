import React from "react";
import MovieCard from "./MovieCard";
import SkeletonMovieCard from "./SkeletonMovieCard";

export default function SearchResultList({ movies, loading, onClick, darkMode }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px 0",
      }}
    >
      {loading
        ? Array.from({ length: 8 }).map((_, idx) => (
            <SkeletonMovieCard key={idx} darkMode={darkMode} />
          ))
        : movies.length > 0
        ? movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => onClick(movie.id)}
              large={true} 
              darkMode={darkMode}
            />
          ))
        : (
          <p
            style={{
              color: darkMode ? "#ddd" : "#555",
              fontSize: "1.2rem",
              marginTop: "40px",
              width: "100%",
              textAlign: "center",
            }}
          >
            검색 결과가 없습니다.
          </p>
        )}
    </div>
  );
}
