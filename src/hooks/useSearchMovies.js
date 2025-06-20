import { useEffect, useState } from "react";
import { TMDB_GET_OPTION, TMDB_SEARCH_API_BASE_URL } from "../constants";

function useSearchMovies(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    setLoading(true);

    fetch(
      `${TMDB_SEARCH_API_BASE_URL}?query=${query}&language=ko`,
      TMDB_GET_OPTION
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.results.filter((movie) => !movie.adult);
        setResults(filtered);
      })
      .catch((err) => console.error("검색 실패:", err))
      .finally(() => setLoading(false));
  }, [query]);

  return { results, loading };
}

export default useSearchMovies;
