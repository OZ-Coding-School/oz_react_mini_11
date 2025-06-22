import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from "../api/movieApi";

const baseUrl = "https://image.tmdb.org/t/p/w500";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchMovieDetail(id);
        setMovie(data);
      } catch (error) {
        setError("영화 정보를 불러오는데 실패했습니다.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadMovie();
  }, [id]);
  
  if (loading) {
    return <div style={{ padding: "20px", color: "#fff" }}>로딩 중...</div>
  }
  if (error) {
    return <div style={{ padding: "20px", color: "#fff" }}>{error}</div>;
  }

  if (!movie) {
    return <div style={{ padding: "20px", color: "#fff" }}>영화를 찾을 수 없습니다.</div>;
  }

  const title = movie.title || movie.original_title;
  const imagePath = movie.poster_path || movie.backdrop_path;
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "평점 없음";

  return (
    <div style={{ backgroundColor: "#fff", color: "#000", minHeight: "100vh", padding: "40px 24px" }}>
    <style>{`
      @media (prefers-color-scheme: dark) {
        body {
          background-color: #000;
          color: #fff;
        }
      }
    `}</style>

    <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>

        {/* 포스터 */}
        <img
          src={`${baseUrl}${imagePath}`}
          alt={title}
          style={{ width: "100%", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)", maxWidth: "600px" }}
        />

        {/* 제목 & 평점 */}
        <div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "12px" }}>{title}</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "20px", fontWeight: "bold" }}>
            <span style={{ color: "#facc15", fontSize: "28px" }}>★</span>
            <span>{rating}</span>
          </div>
        </div>

        {/* 장르 */}
        <div>
          <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "12px" }}>장르</h3>
          <ul style={{ display: "flex", gap: "8px", flexWrap: "wrap", padding: 0, listStyle: "none" }}>
            {movie.genres && movie.genres.length > 0 ? (
              movie.genres.map((genre) => (
                <li
                  key={genre.id}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "999px",
                    backgroundColor: "#e5e7eb",
                    fontSize: "14px",
                  }}
                >
                  {genre.name}
                </li>
              ))
            ) : (
              <li>장르 정보 없음</li>
            )}
          </ul>
        </div>

        {/* 줄거리 */}
        <div>
          <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "12px" }}>줄거리</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#333" }}>
            {movie.overview || "줄거리 정보가 없습니다."}
          </p>
        </div>

      </div>
    </div>
  </div>
);
}

export default MovieDetail;
