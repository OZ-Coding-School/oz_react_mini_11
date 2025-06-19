import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import {
  TMDB_MOIVE_API_BASE_URL,
  TMDB_GET_OPTION,
  TMDB_SEARCH_API_BASE_URL,
} from "../constants";

function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(
        `${TMDB_SEARCH_API_BASE_URL}?query=${query}&language=ko`,
        TMDB_GET_OPTION
      )
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.results.filter((movie) => !movie.adult);
          setResults(filtered);
        })
        .catch((err) => console.error("❌ 검색 실패:", err));
    }
  }, [query]);

  return (
    <div className="movie-grid">
      <h2>🔍 검색 결과: {query}</h2>
      {results.length === 0 ? (
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
