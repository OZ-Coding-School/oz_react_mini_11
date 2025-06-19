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
    <div className="movie-grid">
      <h2>🔍 검색 결과: {query}</h2>
      {loading ? (
        Array(8)
          .fill(0)
          .map((_, idx) => <SkeletonCard key={idx} />)
      ) : results.length === 0 ? (
        <p>해당하는 영화가 없습니다.</p>
      ) : (
        results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            poster={movie.poster_path}
          />
        ))
      )}
    </div>
  );
}

export default SearchResult;
