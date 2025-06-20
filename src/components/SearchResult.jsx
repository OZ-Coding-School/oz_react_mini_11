import React from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import SkeletonCard from "./SkeltonCard";
import useSearchMovies from "../hooks/useSearchMovies";

function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { results, loading } = useSearchMovies(query);

  return (
    <div className="bg-gradient-to-b from-rose-50 via-pink-100 to-rose-100 min-h-screen p-6 text-rose-900">
      <h2 className="text-2xl font-bold mb-6">
        🔍 검색 결과: <span className="text-pink-500">{query}</span>
      </h2>

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Array(8)
            .fill(0)
            .map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
        </div>
      ) : results.length === 0 ? (
        <p className="text-gray-500">해당하는 영화가 없습니다.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {results.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              poster={movie.poster_path}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResult;
