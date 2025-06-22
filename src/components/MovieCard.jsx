import React from "react";

const baseUrl = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie, onClick, large, darkMode }) {
  const title = movie.title || movie.original_title || "제목 없음";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "평점 없음";

  return (
    <div
      style={{
        width: large ? "240px" : "180px",
        minWidth: large ? "240px" : "180px",
        cursor: "pointer",
        marginBottom: "16px",
        transition: "transform 0.3s ease",
        borderRadius: "8px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onClick={onClick}
    >
      <img
        src={`${baseUrl}${movie.poster_path}`}
        alt={title}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          boxShadow: darkMode
            ? "0 4px 10px rgba(255, 255, 255, 0.08)"
            : "0 4px 10px rgba(0, 0, 0, 0.12)",
          display: "block",
        }}
      />
      <h3
        style={{
          marginTop: "10px",
          fontSize: "1rem",
          fontWeight: 600,
          color: darkMode ? "#f0f0f0" : "#000",
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
          marginTop: "6px",
          userSelect: "none",
        }}
      >
        <span
          style={{
            color: "#FFD700",
            fontSize: "1.25rem",
            textShadow: darkMode
              ? "0 0 6px rgba(255, 215, 0, 0.9)"
              : "0 0 2px rgba(0,0,0,0.3)",
          }}
        >
          ★
        </span>
        <span
          style={{
            fontSize: "0.95rem",
            fontWeight: 500,
            color: darkMode ? "#eee" : "#000",
          }}
        >
          {rating}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
