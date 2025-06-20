import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import type { MovieListData } from "../types";
import axios from "axios";
import { getAxiosTMDBMovieSearchOption } from "../utils/axiosUtils";
import Loading from "../components/lodaing/Loading";
import MovieCard from "../components/MovieCard";
import useDarkModeStore from "../hooks/zustand/useIsDarkStore";

export default function Search() {
  const isDark = useDarkModeStore((state) => state.isDark);
  const searchParam = useSearchParams()[0].get("searchParam");

  const { data: movieList, isPending } = useQuery<MovieListData>({
    queryKey: ["movieList", "query", searchParam],
    queryFn: async () => {
      const response = await axios(
        getAxiosTMDBMovieSearchOption({ query: searchParam || "" })
      );

      return response.data;
    },
  });

  return (
    <>
      {isPending ? (
        <Loading />
      ) : movieList && movieList?.results.length > 0 ? (
        <div className="flex flex-wrap gap-5 justify-center">
          {movieList.results
            .filter((movie) => !movie.adult)
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      ) : (
        <div
          className={`text-xl ${
            isDark ? "text-neutral-50" : "text-neutral-900"
          }`}
        >
          해당 검색어에 맞는 영화가 없습니다.
        </div>
      )}
    </>
  );
}
