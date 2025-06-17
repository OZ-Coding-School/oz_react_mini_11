import { useState } from 'react';
import movieListData from './data/movieListData.json';
import { MovieCard } from './components/MovieCard';

function App() {
  const [movies, setMovies] = useState(movieListData.results);

  return (
    <>
      <h1>🎬 영화 목록 </h1>
      <div>
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
}

export default App;
