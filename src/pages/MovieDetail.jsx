import { useState } from "react";
import movieDetailData from "../data/movieDetailData.json";
import baseUrl from "../constant/baseUrl";

function MovieDetail() {
  const [movie, setMovie] = useState(movieDetailData);

  return (
    <div className="flex gap-4">
      <img
        className="w-1/2"
        src={`${baseUrl}${movie.poster_path}`}
        alt={movie.title}
      />

      <div className="grid grid-rows-[1fr_1fr_2fr] gap-4 w-1/2">
        <div className="flex justify-between gap-4 text-xl">
          <p className="grow bg-amber-50">{movie.title}</p>
          <p className="bg-amber-100">{movie.vote_average}</p>
        </div>
        <div className="flex gap-4 bg-amber-300 text-xl">
          {movie.genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </div>
        <p className="bg-amber-500 text-xl">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
