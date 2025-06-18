//실제 데이터 사용 시 주석 풀고 사용
//import { useParams } from "react-router";
import movieData from "../assets/data/movieDetailData.json";
import StarPoints from "../components/StarPoints";
import type { MovieDetailData } from "../types";

const movie = movieData as MovieDetailData;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Details() {
  //실제 데이터 사용 시 주석 풀고 사용
  //const { id } = useParams();
  return (
    <div className="text-neutral-100 w-full flex justify-center space-y-10 flex-col items-center md:flex-row md:items-start md:space-x-5">
      <img
        src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
        alt={`${movie.title}-poster`}
        width={400}
        className="w-[400px] max-h-[600px] object-cover object-center rounded"
      />
      <div className="max-w-[600px] space-y-2">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-5xl">{movie.title}</h1>
          <StarPoints point={movie.vote_average} />
        </div>
        <div className="space-x-1">
          {movie.genres.map((genre) => (
            <span
              className="text-sm px-2 py-1 rounded-full bg-neutral-600"
              key={genre.id}
            >
              {genre.name}
            </span>
          ))}
        </div>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
