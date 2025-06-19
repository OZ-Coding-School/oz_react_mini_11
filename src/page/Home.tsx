import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/MovieCard";
import { useDraggableScroll } from "../hooks/useDraggableScroll";
import type { MovieData, MovieListData } from "../types";
import axios from "axios";
import { getAxoiosTMDBMovieListOption } from "../utils/axiosUtils";
import Loading from "../components/lodaing/Loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [topTenMovies, setTopTenMoives] = useState<MovieData[]>([]);
  const { scrollRef, onDragStart, onDragEnd, onDragMove, isDrag } =
    useDraggableScroll();

  const { data: movieList, isPending } = useQuery<MovieListData>({
    queryKey: ["movieList", "popular"],
    queryFn: async () => {
      const response = await axios(
        getAxoiosTMDBMovieListOption({ page: 1, order: "now_playing" })
      );

      return response.data;
    },
  });

  useEffect(() => {
    if (movieList) {
      setTopTenMoives(
        movieList.results.filter((movie) => !movie.adult).slice(0, 10)
      );
    }
  }, [movieList]);

  return (
    <>
      {isPending ? (
        <Loading />
      ) : movieList ? (
        <div className="flex flex-col gap-5 justify-center">
          <div className=" w-full">
            <h1 className="text-neutral-100 font-semibold text-2xl">
              Top 10 Movies
            </h1>
            <div
              ref={scrollRef}
              onMouseDown={onDragStart}
              onMouseMove={onDragMove}
              onMouseUp={onDragEnd}
              onMouseLeave={onDragEnd}
              className={`flex flex-row justify-start items-center overflow-x-scroll ${
                isDrag ? "hover:cursor-grabbing" : "hover:cursor-grab"
              }`}
            >
              {topTenMovies.map((movie, i) => (
                <div key={movie.id} className="p-5 flex flex-col space-y-5">
                  <span className="text-neutral-100">{`TOP ${i + 1}`}</span>
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-5 justify-center">
            {movieList.results
              .filter((movie) => !movie.adult)
              .map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
