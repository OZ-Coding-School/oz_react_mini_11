import React, { useState } from "react";
import movieDetailData from "../data/movieDetailData.json";
import "./MovieDetail.css";

function MovieDetail() {
  const [movie] = useState(movieDetailData);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="detail-container">
      <div className="poster-section">
        <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
      </div>

      <div className="info-section">
        <div className="title-row">
          <h2>{movie.title}</h2>
          <span className="rating"> {movie.vote_average} </span>
        </div>
        <div className="genres">
          {movie.genres.map((g) => g.name).join(",")}
        </div>

        <div className="overview">{movie.overview}</div>
      </div>
    </div>
  );
}

export default MovieDetail;
