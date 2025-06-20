import { useState, useEffect } from "react";
import { fetchPopularMovies, fetchSearchMovies, fetchMoviesByGenre } from "../api/movieApi";

const favoriteGenres = [
  { id: 28, name: "액션" },
  { id: 35, name: "코미디" },
  { id: 18, name: "드라마" },
  { id: 10749, name: "로맨스" },
  { id: 27, name: "공포" },
];

function useAppLogic(debouncedSearch) {
  const [movies, setMovies] = useState([]);
  const [genreMovies, setGenreMovies] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        if (debouncedSearch.trim()) {
          const data = await fetchSearchMovies(debouncedSearch);
          setMovies(data);
        } else {
          const data = await fetchPopularMovies();
          setMovies(data);
        }
      } catch (error) {
        console.error("영화 데이터 로드 실패", error);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [debouncedSearch]);

  useEffect(() => {
    const loadGenreMovies = async () => {
      const results = {};
      await Promise.all(
        favoriteGenres.map(async (genre) => {
          const data = await fetchMoviesByGenre(genre.id);
          results[genre.name] = data;
        })
      );
      setGenreMovies(results);
    };

    if (!debouncedSearch.trim()) {
      loadGenreMovies();
    } else {
      setGenreMovies({});
    }
  }, [debouncedSearch]);

  return { movies, genreMovies, loading, favoriteGenres };
}

export default useAppLogic;
