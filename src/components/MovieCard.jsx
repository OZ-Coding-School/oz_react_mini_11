import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../constants";

function MovieCard({ title, rating, poster, id, variant = "list" }) {
  const isSlider = variant === "slider";
  const imageWrapperClass = isSlider
    ? "aspect-[2/3] overflow-hidden"
    : "aspect-[2/3] overflow-hidden";

  return (
    <Link
      to={`/movies/${id}`}
      className="block no-underline text-inherit hover:scale-105 transition-transform duration-300"
    >
      <div
        className={`flex flex-col bg-[#2b2b2b] rounded-xl overflow-hidden shadow-lg`}
      >
        <div className={imageWrapperClass}>
          <img
            src={`${IMAGE_BASE_URL}${poster}`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-3">
          <h3 className="text-sm font-semibold text-white truncate">{title}</h3>
          <div className="flex items-center justify-between text-xs text-gray-300">
            <span>⭐ {rating}</span>
            <button className="px-2 py-1 bg-purple-600 text-white rounded hover:bg-purple-700">
              예매
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
