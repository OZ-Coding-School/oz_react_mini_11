import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";
import movieListData from "../data/movieListData.json";
import MovieList from "./MovieList";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieDetail() {
  const { id } = useParams();
  const movie = movieListData.results.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <p>영화를 찾을 수 없습니다</p>;
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
        <div className="detail-genres">{movie.genre_ids.join(", ")}</div>
        <p className="detail-overview">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
