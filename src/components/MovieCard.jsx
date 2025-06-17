import React from "react";

function MovieCard({ title, avg, imgSrc }) {
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="w-30">
      <img
        className="aspect-[0.7] object-cover"
        src={`${BASE_URL}${imgSrc}`}
        alt={title}
      />
      <div>{title}</div>
      <div>{avg}</div>
    </div>
  );
}

export default MovieCard;
