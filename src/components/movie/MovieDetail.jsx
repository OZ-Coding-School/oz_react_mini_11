import { useParams } from "react-router-dom";
import { StarRating } from "./StarRating";
import { useEffect, useState } from "react";
import TMDBApi from "../../api/TMDM_api";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMoive] = useState(null);

  useEffect(() => {
    TMDBApi.get(`/movie/${id}?language=ko-KR`)
      .then((res) => setMoive(res.data))
      .catch((err) => console.error("Detail Page API 에러: ", err));
  }, [id]);

  if (!movie) return <div>Loding...</div>;

  return (
    <div className="flex w-screen h-screen gap-5">
      <div className="w-1/2">
        <div className="flex items-center justify-center">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className=""
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col">
        <div className="flex mb-5">
          <h1 className="font-bold text-2xl">{movie.title}</h1>
        </div>
        <div className="flex h-10 items-center">
          <StarRating score={movie.vote_average} />
          <span className="text-sm text-gray-600 ml-3">
            ({movie.vote_average}/10)
          </span>
        </div>
        <div className="flex h-10 items-center">
          <p className="font-semibold">
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
        <div className="mt-5 font-thin max-w-150">{movie.overview}</div>
      </div>
    </div>
  );
}

export default MovieDetail;
