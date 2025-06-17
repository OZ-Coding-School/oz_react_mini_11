import { useState } from "react";
import movieDetailData from "../data/movieDetailData.json";

export default function Detail() {
  const [movieDetail, setMovieDetail] = useState(movieDetailData);
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="flex justify-between pt-[120px] max-w-[1200px] m-auto h-screen text-white">
        <div>
          <img src={`${baseUrl}${movieDetail.backdrop_path}`} />
        </div>
        <div className="w-[50%]">
          <h1>{movieDetail.title}</h1>
          <span>{movieDetail.vote_average}</span>
          <span>
            {movieDetail.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </span>
          <p>{movieDetail.overview}</p>
        </div>
      </div>
    </>
  );
}
