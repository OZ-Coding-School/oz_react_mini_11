import movieListData from "../assets/data/movieListData.json";
import MovieCard from "../components/MovieCard";
import { useDraggableScroll } from "../hooks/useDraggableScroll";
import type { MovieListData } from "../types";

const movieList = movieListData as MovieListData;

export default function Home() {
  const topTenMovies = [...movieList.results]
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 10);

  const { scrollRef, onDragStart, onDragEnd, onDragMove, isDrag } =
    useDraggableScroll();

  return (
    <div className="flex flex-col gap-5 justify-center">
      <div className=" w-full">
        <h1 className="text-neutral-100 font-semibold text-2xl">
          Top 10 Movies
        </h1>
        <div
          ref={scrollRef}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          className={`flex flex-row justify-start items-center overflow-x-scroll ${
            isDrag ? "hover:cursor-grabbing" : "hover:cursor-grab"
          }`}
        >
          {topTenMovies.map((movie, i) => (
            <div key={movie.id} className="p-5 flex flex-col space-y-5">
              <span className="text-neutral-100">{`TOP ${i + 1}`}</span>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {movieList.results.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
