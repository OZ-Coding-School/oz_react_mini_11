import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../constants";

function MovieCard({ title, rating, poster, id, variant = "list" }) {
  const isSlider = variant === "slider";

  return (
    <Link
      to={`/movies/${id}`}
      className="block no-underline text-inherit hover:scale-105 transition-transform duration-300"
    >
      <div
        className={`relative rounded-xl overflow-hidden shadow-xl ring-2 ring-rose-400 hover:ring-pink-400
          ${
            isSlider ? "h-60" : "h-80"
          } bg-gradient-to-b from-black via-red-900 to-rose-800`}
      >
        <img
          src={`${IMAGE_BASE_URL}${poster}`}
          alt={title}
          className={`w-full object-cover ${
            isSlider ? "h-60" : "h-80"
          } opacity-90`}
        />
        <div
          className={`absolute bottom-0 left-0 w-full bg-black bg-opacity-60 px-2 py-1
            ${isSlider ? "text-xs" : "text-sm"}`}
        >
          <h3
            className={`font-serif font-bold text-pink-300 truncate ${
              isSlider ? "text-xs" : "text-base"
            }`}
          >
            {title}
          </h3>
          <p className="text-rose-200 text-xs">⭐ {rating}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
