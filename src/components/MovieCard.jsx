import React from "react";
import { IMAGE_BASE_URL } from "../constants/imageBaseUrl";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>평점 : {movie.vote_average}</p>
    </div>
  );
}

export default MovieCard;
