import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";
import {
  IMAGE_BASE_URL,
  TMDB_GET_OPTION,
  TMDB_MOIVE_API_BASE_URL,
} from "../constants";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(`${TMDB_MOIVE_API_BASE_URL}/${id}?language=ko`, TMDB_GET_OPTION)
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
      })
      .catch((err) => console.error("❌ 영화 데이터 요청 실패:", err));
  }, [id]);

  if (!movie) {
    return <p>로딩중</p>;
  }

  return (
    <div className="detail-container">
      <img
        className="detail-poster"
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="detail-info">
        <div className="detail-title-row">
          <h2>{movie.title}</h2>
          <span className="vote"> ⭐ {movie.vote_average}</span>
        </div>
        <div className="detail-genres">
          {movie.genres?.map((genre) => genre.name).join(", ")}
        </div>
        <p className="detail-overview">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
