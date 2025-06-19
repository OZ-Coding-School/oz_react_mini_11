import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../constants";

function MovieCard({ title, rating, poster, id }) {
  return (
    <Link
      to={`/movies/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="movie-card">
        <img src={`${IMAGE_BASE_URL}${poster}`} alt={title} width={200} />
        <h3>{title}</h3>
        <p>⭐{rating}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
