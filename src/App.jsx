import "./App.css";
import MovieCard from "./components/MovieCard";
import MOVIELISTDATA from "./data/movieListData.json";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {MOVIELISTDATA.results.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
}

export default App;
