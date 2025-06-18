import React from "react";
import { useParams } from "react-router-dom";
import movieListData from "./movieListData.json";
import movieDetailData from "./movieDetailData.json"

const baseUrl = "https://image.tmdb.org/t/p/w500";

function MovieDetail() {
  const { id } = useParams();
  const movie = movieListData.results.find((m) => m.id === Number(id)) || null;
  const genreList = movieDetailData.genres;

  const genreNames = 
    Array.isArray(movie.genre_ids)
    ? movie.genre_ids.map((genreId) => {
      const matched = genreList.find((g) => Number(g.id) === Number(genreId));
      return matched ? matched.name : ""
    })
    : Array.isArray(movie.genres)
    ? movie.genres.map((g) => g.name)
    : [];

  if (!movie) {
    return <div style={{ color: "white", padding: 20 }}>영화를 찾을 수 없습니다.</div>;
  }

  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "평점 없음";

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px 30px",
      }}
    >
      <div style={{ flex: 1, marginRight: "30px" }}>
        <img
          src={`${baseUrl}${movie.poster_path || movie.backdrop_path}`}
          alt={movie.title || movie.original_title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ flexBasis: "25%" }}>
          <h1>{movie.title || movie.original_title}</h1>
          <div style={{ display: "flex", alignItems: "center", color: "#FFD700", fontWeight: "600", gap: "8px" }}>
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
            <span style={{ color: "#fff", fontWeight: "normal", fontSize: "1.3rem" }}>{rating}</span>
          </div>
        </div>

        <div style={{ flexBasis: "25%" }}>
          <h3>장르</h3>
          <ul>
            {genreNames.length > 0 ? (
              genreNames.map((name, idx) => <li key={idx}>{name}</li>)
            ) : (
              <li>장르 정보 없음</li>
            )}
        
          </ul>
        </div>

        <div style={{ flexBasis: "50%" }}>
          <h3>줄거리</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
