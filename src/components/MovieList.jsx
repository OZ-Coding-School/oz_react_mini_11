
import movies from '../data/movieListData.json';
import MovieCard from './MovieCard';

export default function MovieList() {
  return (
    <div className="movie-list">
      {movies.map((m) => (
        <MovieCard key={m.id} {...m} />
      ))}
    </div>
  );
}
