import { Link } from "react-router";
import type { MovieData } from "../types";
import StarPoints from "./StarPoints";
import { IMAGE_BASE_URL } from "../constants";

interface MovieCardProps {
  movie: MovieData;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link
      to={`/details/${movie.id}`}
      className="w-[240px] flex bg-neutral-100 items-center flex-col p-2  shadow-lg shadow-purple-800 transition-transform hover:scale-105 space-y-1 rounded-xl"
    >
      <img
        src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
        alt={`${movie.title}-poster`}
        width={200}
        className="w-[200px] h-[300px] object-cover object-center rounded-xl"
      />
      <span className="text-lg">{movie.title}</span>
      <StarPoints point={movie.vote_average} />
    </Link>
  );
}
