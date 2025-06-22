import React from "react";

const baseUrl = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie, onClick, large }) {
  const title = movie.title || movie.original_title || "제목 없음";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "평점 없음";

  return (
    <div
      style={{
        width: large ? "240px" : "180px",
        minWidth: large ? "240px" : "180px", // ✅ 최소 너비 고정
        cursor: "pointer",
        transition: "transform 0.2s",
        marginBottom: "16px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onClick={onClick}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          display: "block",
        }}
      />
      <h3
        style={{
          marginTop: "8px",
          fontSize: "1rem",
          fontWeight: "500",
          color: "#000",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          marginTop: "4px",
          userSelect: "none",
        }}
      >
        <span
          style={{
            color: "#FFD700",
            fontSize: "1.25rem",
            textShadow: "0 0 2px rgba(0,0,0,0.3)",
          }}
        >
          ★
        </span>
        <span style={{ color: "#000" }}>{rating}</span>
      </div>
    </div>
  );
}

export default MovieCard;
