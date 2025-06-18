import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ width: '200px', margin: '10px' }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: '100%' }}
        />
        <h3>{movie.title}</h3>
        <p>⭐ {movie.vote_average}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
