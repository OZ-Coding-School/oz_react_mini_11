import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../constants";

function MovieCard({ title, rating, poster, id, variant = "list" }) {
  const isSlider = variant === "slider";

  return (
    <Link to={`/movies/${id}`} className="block no-underline text-inherit">
      <div
        className={`relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300
        ${isSlider ? "h-60" : "h-80"} bg-gray-800`}
      >
        <img
          src={`${IMAGE_BASE_URL}${poster}`}
          alt={title}
          className={`w-full object-cover ${isSlider ? "h-60" : "h-80"}`}
        />
        <div
          className={`absolute bottom-0 left-0 w-full bg-black bg-opacity-60 px-2 py-1 ${
            isSlider ? "text-xs" : "text-sm"
          }`}
        >
          <h3
            className={`font-semibold text-white truncate ${
              isSlider ? "text-xs" : "text-base"
            }`}
          >
            {title}
          </h3>
          <p className="text-pink-300 mt-1">🌸 {rating}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
