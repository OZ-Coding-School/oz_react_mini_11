import React, { useState } from "react";
import movieDetailData from "../data/movieDetailData.json";

function MovieDetail() {
  const [movie, setMovie] = useState(movieDetailData);
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="flex gap-4">
      <img
        className="w-1/2"
        src={`${BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />

      <div className="flex flex-col gap-4 w-1/2">
        <div className="flex justify-between">
          <p>{movie.title}</p>
          <p>{movie.vote_average}</p>
        </div>
        <div className="flex gap-4">
          {movie.genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </div>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
