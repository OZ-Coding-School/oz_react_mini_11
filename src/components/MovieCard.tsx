import { useNavigate } from "react-router";
import type { MovieData } from "../types";
import StarPoints from "./StarPoints";
import { IMAGE_BASE_URL } from "../constants";
import useSearchParamStore from "../hooks/zustand/useSearchParamStore";
import useDarkModeStore from "../hooks/zustand/useIsDarkStore";

interface MovieCardProps {
  movie: MovieData;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const isDark = useDarkModeStore((state) => state.isDark);
  const updateSearchParam = useSearchParamStore(
    (state) => state.updateSearchParam
  );
  const navigate = useNavigate();

  const handleClick = () => {
    updateSearchParam("");
    navigate(`/details/${movie.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-[240px] flex text-neutral-900 bg-neutral-100 items-center flex-col p-2  shadow-lg  transition-transform hover:scale-105 space-y-1 rounded-xl
        ${isDark ? "shadow-purple-800" : "shadow-purple-300"}
        `}
    >
      <img
        src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
        alt={`${movie.title}-poster`}
        width={200}
        className="w-[200px] h-[300px] object-cover object-center rounded-xl"
      />
      <p className="text-lg truncate w-full px-1">{movie.title}</p>
      <StarPoints point={movie.vote_average} />
    </div>
  );
}
