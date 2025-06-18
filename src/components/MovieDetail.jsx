// src/components/MovieDetail.jsx
import React, { useState } from "react";
import movieDetailData from "../data/movieDetailData.json";
import "./MovieDetail.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieDetail() {
  const [movie] = useState(movieDetailData);

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
          <span className="vote">{movie.vote_average}</span>
        </div>
        <div className="detail-genres">
          {movie.genres.map((genre) => genre.name).join(", ")}
        </div>
        <p className="detail-overview">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
