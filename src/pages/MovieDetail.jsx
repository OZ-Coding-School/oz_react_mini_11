import { useState } from "react";
import DetailData from "../data/movieDetailData.json";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function MovieDetail() {
  const [details] = useState(DetailData);
  const { poster_path, title, genres, overview } = details;

  return (
    <div className="flex flex-row w-[60vw] justify-center pt-50">
      <img
        src={`${IMAGE_BASE_URL}${poster_path}`}
        alt={title}
        className="h-[500px] "
      />
      <div className="flex flex-col justify-between ml-4  h-[60vh]">
        <div className="flex w-full">
          <div className="flex-2">{title}</div>
          <div className="flex-1">
            {`평점: ${Math.ceil(details.vote_average * 10) / 10}`}
          </div>
        </div>
        <div>{genres.map((el) => el.name).join(", ")}</div>
        <div>{overview}</div>
      </div>
    </div>
  );
}
