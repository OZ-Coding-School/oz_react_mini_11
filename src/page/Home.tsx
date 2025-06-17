import movieListData from "../assets/data/movieListData.json";
import MovieCard from "../components/MovieCard";
import type { MovieListData } from "../types";

const movieList = movieListData as MovieListData;

export default function Home() {
  return (
    <div className="flex flex-wrap gap-5">
      {movieList.results.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
