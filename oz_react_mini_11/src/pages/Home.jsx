import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movieListData.json')
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} style={{ color: 'white', textDecoration: 'none' }}>
          <div className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;

