import { useState } from "react";
import baseUrl from "../constant/baseUrl";
import movieListData from "../data/movieListData.json";

function Banner({ movie }) {
  const [movieList, setMovieList] = useState(movieListData.results);

  return (
    <div className="relative mb-10 aspect-[2.1]">
      <div className="fixed w-full z-0">
        <img
          className="w-full object-cover"
          src={`${baseUrl}${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.6),_rgba(0,0,0,0)_80%,_rgba(0,0,0))]" />
      </div>

      <div
        className="flex gap-[5vw] absolute bottom-5 z-20 w-[calc(100% - 10vw)] mx-[5vw]
                  md:w-3/4 lg:w-3/5"
      >
        <img
          className="w-1/4 rounded-md"
          src={`${baseUrl}${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="flex flex-col gap-[3vw] text-xs lg:text-sm">
          <p className="text-gray-300">{movie.release_date.split("-")[0]}</p>
          <p className="text-[3vw] font-black">{movie.title}</p>
          <p className="break-keep">{movie.overview}</p>
          <p>★ {movie.vote_average.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
