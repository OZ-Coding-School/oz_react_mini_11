import { MovieCard } from './components/moviecard';

function App() {
  const movie = MovieCard();

  return (
    <>
      <div>{movie.map(el => el.id)}</div>
    </>
  );
}

export default App;
