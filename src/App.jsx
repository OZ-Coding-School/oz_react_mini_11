import { useState } from 'react';
import { MovieCard } from './components/MovieCard';
import MovieListData from './data/movieListData.json';

function App() {
  const [Movie, setMovie] = useState(MovieListData.result);
  const movie = MovieCard();

  return (
    <>
      <div>{movie.map(el => el.id)}</div>
    </>
  );
}

export default App;
