import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
