import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import SkeletonCard from "./SkeltonCard";
import { searchMovies } from "../hooks/useSearchMovies";

function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    searchMovies(query)
      .then(setResults)
      .catch(() => setResults([]))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div className="bg-[#1e1e1e] min-h-screen p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">
        🔍 검색 결과: <span className="text-purple-400">{query}</span>
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
        <p className="text-gray-400">해당하는 영화가 없습니다.</p>
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
