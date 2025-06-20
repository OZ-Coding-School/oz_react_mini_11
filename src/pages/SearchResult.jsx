import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { BASE_URL, IMAGE_URL } from "../constant/constant";

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      try {
        const res = await fetch(
          `${BASE_URL}/search/movie?query=${query}&language=ko-KR`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
              accept: "application/json",
            },
          }
        );
        const data = await res.json();
        setResults(data.results.filter((movie) => !movie.adult));
      } catch (err) {
        console.error("검색 실패:", err);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">🔍 "{query}" 검색 결과</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {results.length > 0 ? (
            results.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={`${IMAGE_URL}/w200${movie.poster_path}`}
                rating={movie.vote_average}
              />
            ))
          ) : (
            <p>검색 결과가 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
