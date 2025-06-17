import movieListData from "../assets/data/movieListData.json";
import type { MovieListData } from "../types";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const movieList = movieListData as MovieListData;

export default function Home() {
  return (
    <div className="flex flex-wrap gap-5">
      {movieList.results.map((movie) => (
        <div key={movie.id} className="flex flex-col">
          <img
            src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
            alt={`${movie.title}-poster`}
            width={200}
          />
          <span>{movie.title}</span>
          <span>{`${movie.vote_average.toFixed(1)}/10`}</span>
        </div>
      ))}
    </div>
  );
}
