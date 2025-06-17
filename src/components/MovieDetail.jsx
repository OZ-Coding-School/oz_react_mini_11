import DETAILDATA from "../data/movieDetailData.json";
import { StarRating } from "./StarRating";

function MovieDetail() {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2">
        <div className="flex items-center justify-center">
          <img
            src={`https://image.tmdb.org/t/p/w500/${DETAILDATA.poster_path}`}
            className=""
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col">
        <div className="flex mb-5">
          <h1 className="font-bold text-2xl">{DETAILDATA.title}</h1>
        </div>
        <div className="flex h-10 items-center">
          <StarRating score={DETAILDATA.vote_average} />
          <span className="text-sm text-gray-600 ml-3">
            ({DETAILDATA.vote_average}/10)
          </span>
        </div>
        <div className="flex h-10 items-center">
          <p className="font-semibold">
            {DETAILDATA.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
        <div className="mt-5 w-180 font-thin">{DETAILDATA.overview}</div>
      </div>
    </div>
  );
}

export default MovieDetail;
