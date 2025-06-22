import React from "react";

const baseUrl = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie, onClick, large = false }) {
  const title = movie.title || movie.original_title || "제목 없음";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "평점 없음";

  return (
    <div
      style={{
        width: large ? "240px" : "180px", // ✅ 카드 크기 조정
        cursor: "pointer",
        transition: "transform 0.2s",
        marginBottom: "16px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onClick={onClick}
    >
      <img
        src={movie.poster_path ? `${baseUrl}${movie.poster_path}` : "https://via.placeholder.com/240x360?text=No+Image"}
        alt={title}
        style={{
          width: "100%",
          height: large ? "360px" : "270px", // ✅ 포스터 크기 조정
          objectFit: "cover",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          display: "block",
        }}
      />
      <h3
        style={{
          marginTop: "8px",
          fontSize: large ? "1.1rem" : "1rem", // ✅ 제목 크기 조정
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
            fontSize: large ? "1.35rem" : "1.25rem", // ✅ 별 크기 조정
            textShadow: "0 0 2px rgba(0,0,0,0.3)",
          }}
        >
          ★
        </span>
        <span
          style={{
            fontSize: large ? "0.95rem" : "0.85rem", // ✅ 평점 텍스트 크기 조정
            color: "#333",
          }}
        >
          {rating}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
