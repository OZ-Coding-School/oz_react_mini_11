import { useState } from "react";
import movieDetailData from "../data/movieDetailData.json";

export default function Detail() {
  const [movieDetail, setMovieDetail] = useState(movieDetailData);
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="flex">
        <div>
          <img src={`${baseUrl}${movieDetail.backdrop_path}`} />
        </div>
        <div>
          <h1>{movieDetail.title}</h1>
        </div>
      </div>
    </>
  );
}
