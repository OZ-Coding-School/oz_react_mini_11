import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { fetchMovieDetail } from "../api/movieApi";
import { useTheme } from "../contexts/ThemeContext";
import useDebounce from "../hooks/useDebounce";

const baseUrl = "https://image.tmdb.org/t/p/w500";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  
  const [search, setSearch] = useState(query);
  const debouncedSearch = useDebounce(search, 500);

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { darkMode } = useTheme();
  
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
    return <div style={{ padding: "20px", color: darkMode ? "#f7fafc" : "#1a202c" }}>로딩 중...</div>;
  }
  if (error) {
    return <div style={{ padding: "20px", color: darkMode ? "#f7fafc" : "#1a202c" }}>{error}</div>;
  }
  if (!movie) {
    return <div style={{ padding: "20px", color: darkMode ? "#f7fafc" : "#1a202c" }}>영화를 찾을 수 없습니다.</div>;
  }

  const title = movie.title || movie.original_title;
  const imagePath = movie.poster_path || movie.backdrop_path;
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "평점 없음";

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#1a202c" : "#fff",
        color: darkMode ? "#f7fafc" : "#000",
        minHeight: "100vh",
        padding: "40px 24px",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        <img
          src={`${baseUrl}${imagePath}`}
          alt={title}
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "12px",
            boxShadow: darkMode ? "0 4px 10px rgba(255,255,255,0.2)" : "0 4px 10px rgba(0,0,0,0.2)",
            flexShrink: 0,
          }}
        />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "12px" }}>{title}</h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "20px",
                fontWeight: "bold",
                color: darkMode ? "#facc15" : "#facc15",
              }}
            >
              <span style={{ fontSize: "28px" }}>★</span>
              <span>{rating}</span>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "12px" }}>장르</h3>
            <ul
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                padding: 0,
                listStyle: "none",
              }}
            >
              {movie.genres && movie.genres.length > 0 ? (
                movie.genres.map((genre) => (
                  <li
                    key={genre.id}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "999px",
                      backgroundColor: darkMode ? "#374151" : "#e5e7eb",
                      color: darkMode ? "#f7fafc" : "#111827",
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

          <div>
            <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "12px" }}>줄거리</h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: darkMode ? "#d1d5db" : "#333",
              }}
            >
              {movie.overview || "줄거리 정보가 없습니다."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
