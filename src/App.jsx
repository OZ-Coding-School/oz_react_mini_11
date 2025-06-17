import { useState } from 'react';
import { MovieCard } from './components/MovieCard';
import MovieListData from './data/movieListData.json';

function App() {
  const [Movie, setMovie] = useState(MovieListData.results);
  // const movie = MovieCard();

  return (
    <>
      <div>
        {Movie.map(movie => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
}

export default App;
