import { useState } from "react";
import movieDetailData from "../data/movieDetailData.json";
import { baseUrl } from "../constant/constant";

export default function Detail() {
  const [movieDetail, setMovieDetail] = useState(movieDetailData);
  return (
    <>
      <div className="flex justify-between pt-[120px] max-w-[1200px] m-auto h-screen text-white">
        <div>
          <img src={`${baseUrl}${movieDetail.backdrop_path}`} />
        </div>
        <div className="w-[50%]">
          <div className="flex justify-between">
            <h1 className="font-bold text-[2rem]">{movieDetail.title}</h1>
            <span>{movieDetail.vote_average}</span>
          </div>
          <div className="text-[.8rem] text-[#888888] mb-[10px]">
            {movieDetail.genres.map((genre) => (
              <span key={genre.id} className="mr-[5px]">
                {genre.name}
              </span>
            ))}
          </div>
          <p>{movieDetail.overview}</p>
        </div>
      </div>
    </>
  );
}
