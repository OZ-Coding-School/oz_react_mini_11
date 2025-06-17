import React from "react";

function MovieCard({ title, poster_path, vote_average }) {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-card">
      <img src={`${imageBaseUrl}${poster_path}`} alt={title} />
      <h3>{title}</h3>
      <p>평점 : {vote_average}</p>
    </div>
  );
}

export default MovieCard;
