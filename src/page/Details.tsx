//실제 데이터 사용 시 주석 풀고 사용
//import { useParams } from "react-router";
import movieData from "../assets/data/movieDetailData.json";
import type { MovieDetailData } from "../types";

const movie = movieData as MovieDetailData;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Details() {
  //실제 데이터 사용 시 주석 풀고 사용
  //const { id } = useParams();
  return (
    <div className="text-neutral-100 flex">
      <img
        src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
        alt={`${movie.title}-poster`}
      />
      <div>
        <div>
          <span>{movie.title}</span>
          <span>{movie.vote_average.toFixed(1)} / 10</span>
        </div>
        <div>
          {movie.genres.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
