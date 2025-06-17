import type { MovieData } from "../types";
import Star from "./icons/Star";

interface MovieCardProps {
  movie: MovieData;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const STAR_STANDARDS = [1, 2, 3, 4, 5];

export default function MovieCard({ movie }: MovieCardProps) {
  const stars = movie.vote_average / 2;

  return (
    <div className="flex bg-neutral-100 flex-col p-2  shadow-lg shadow-purple-800 transition-transform hover:scale-105 space-y-1 rounded-xl">
      <img
        src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
        alt={`${movie.title}-poster`}
        width={200}
        className="w-[200px] h-[300px] object-cover object-center rounded-xl"
      />
      <span className="text-lg">{movie.title}</span>
      <div className="flex items-center justify-end space-x-1">
        {STAR_STANDARDS.map((standard) => {
          let fillAmount: "full" | "half" | "none";

          if (stars < standard - 0.5) {
            fillAmount = "none";
          } else if (stars < standard) {
            fillAmount = "half";
          } else {
            fillAmount = "full";
          }

          return <Star fillAmount={fillAmount} />;
        })}
      </div>
    </div>
  );
}
