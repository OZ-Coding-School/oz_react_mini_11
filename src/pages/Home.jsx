import MovieList from '@/components/MovieList';
import MovieSlide from '@/components/MovieSlide';
import { useEffect, useState } from 'react';
import { fetchMovie } from '../api/tmdbApi';
import { IMG_BASE_URL } from '../api/constants';

export default function Home({ searchParams }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie()
      .then((data) => {
        const moviesData = data.results
          .filter((movie) => movie.adult === false)
          .map((movie) => ({
            id: movie.id,
            title: movie.title,
            score: movie.vote_average,
            poster: IMG_BASE_URL + movie.poster_path,
          }));
        setMovies(moviesData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <MovieList movies={movies} searchParams={searchParams} />
      <MovieSlide movies={movies} />
    </>
  );
}
