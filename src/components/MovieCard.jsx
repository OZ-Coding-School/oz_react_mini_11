import React from "react";

function MovieCard({ movie, onClick }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "평점 없음";

  return (
    <div style={{ cursor: "pointer" }} onClick={onClick}>
      <img
        src={`${baseUrl}${movie.poster_path}`}
        alt={movie.title || movie.original_title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 style={{ color: "#fff", marginTop: "8px", fontSize: "1rem" }}>
        {movie.title || movie.original_title || "제목 없음"}
      </h3>

      <div style={{ color: "#FFD700", fontWeight: "600", display: "flex", alignItems: "center", gap: "5px" }}>
      <span
        style={{
            color: "#FFD700", 
            fontSize: "1.2rem", 
            textShadow: "0 0 3px #B8860B",
            userSelect: "none", 
            marginRight: "6px", 
            lineHeight: 1,
        }}
        >
        ★
        </span>
        <span style={{ color: "#fff", fontWeight: "normal" }}>{rating}</span>
      </div>
    </div>
  );
}

export default MovieCard;
