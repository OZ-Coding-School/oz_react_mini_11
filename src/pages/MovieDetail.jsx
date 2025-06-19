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
    return <div style={{color: "white", padding: 20 }}>로딩 중...</div>
  }
  if (error) {
    return <div style={{ color: "white", padding: 20 }}>{error}</div>;
  }

  if (!movie) {
    return <div style={{ color: "white", padding: 20 }}>영화를 찾을 수 없습니다.</div>;
  }

  const title = movie.title || movie.original_title;
  const imagePath = movie.poster_path || movie.backdrop_path;
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
          src={`${baseUrl}${imagePath}`}
          alt={title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ flexBasis: "25%" }}>
          <h1>{title}</h1>
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
            {movie.genres && movie.genres.length > 0 ? (
              movie.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)
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
