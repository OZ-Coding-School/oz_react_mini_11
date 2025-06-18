import { Link } from "react-router-dom";
import movieListData from "../DB/movieListData.json";

export default function MovieCard() {
  return (
    <>
      <div className="p-2 gap-6 flex flex-wrap items-center justify-center bg-emerald-950">
        {movieListData.results.map((results) => (
          <Link
            to={`/detail/${results.id}`}
            key={results.id}
            className=" border-[1px] border-solid"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
              alt={results.title}
              className="w-[180px] h-[270px] object-cover"
            />
            <nav className="text-[12px] p-[2px] border-t-[1px] bg-amber-50">
              {results.title}
            </nav>
            <nav className="text-[10px] p-[2px] bg-amber-50">
              {results.vote_average}
            </nav>
          </Link>
        ))}
      </div>
    </>
  );
}
