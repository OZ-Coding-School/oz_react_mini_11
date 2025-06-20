import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/MovieCard";
import { useDraggableScroll } from "../hooks/useDraggableScroll";
import type { MovieData, MovieListData } from "../types";
import axios from "axios";
import { getAxiosTMDBMovieListOption } from "../utils/axiosUtils";
import Loading from "../components/lodaing/Loading";
import { useEffect, useState } from "react";
import useDarkModeStore from "../hooks/zustand/useIsDarkStore";

export default function Home() {
  const isDark = useDarkModeStore((state) => state.isDark);
  const [topTenMovies, setTopTenMoives] = useState<MovieData[]>([]);
  const { scrollRef, onDragStart, onDragEnd, onDragMove, isDrag } =
    useDraggableScroll();

  const { data: movieList, isPending: isMovieListPending } =
    useQuery<MovieListData>({
      queryKey: ["movieList", "now_playing"],
      queryFn: async () => {
        const response = await axios(
          getAxiosTMDBMovieListOption({ page: 1, order: "now_playing" })
        );

        return response.data;
      },
    });

  const { data: topRatedmovieList, isPending: isTopRatedMovieListPending } =
    useQuery<MovieListData>({
      queryKey: ["movieList", "top_rated"],
      queryFn: async () => {
        const response = await axios(
          getAxiosTMDBMovieListOption({ page: 1, order: "top_rated" })
        );

        return response.data;
      },
    });

  useEffect(() => {
    if (topRatedmovieList) {
      setTopTenMoives(
        topRatedmovieList.results.filter((movie) => !movie.adult).slice(0, 10)
      );
    }
  }, [topRatedmovieList]);

  return (
    <>
      {isMovieListPending && isTopRatedMovieListPending ? (
        <Loading />
      ) : movieList ? (
        <div
          className={`flex flex-col gap-5 justify-center
          ${
            isDark
              ? "bg-neutral-900 text-neutral-50"
              : "bg-neutral-50 text-neutral-900"
          }
        `}
        >
          <div className=" w-full">
            <h1 className=" font-semibold text-2xl">Top 10 Movies</h1>
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
                  <span>{`TOP ${i + 1}`}</span>
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
