import type { MovieData } from "../types";

interface MovieCardProps {
  movie: MovieData;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="flex flex-col">
      <img
        src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
        alt={`${movie.title}-poster`}
        width={200}
      />
      <span>{movie.title}</span>
      <span>{`${movie.vote_average.toFixed(1)}/10`}</span>
    </div>
  );
}
