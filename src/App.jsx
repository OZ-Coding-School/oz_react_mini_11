import { useState } from "react";
import MovieCard from "./components/MovieCard";
import movieListData from "./data/movieListData.json";
import "./App.css";

function App() {
  const [Movies] = useState(movieListData.results);

  return (
    <>
      <div className="movie=list">
        {Movies.map((movie) => (
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
