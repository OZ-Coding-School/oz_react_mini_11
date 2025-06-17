import { useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import movieListData from "./data/movieListData.json";

function App() {
  const [movieList, setMovieList] = useState(movieListData);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {movieList.results.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          avg={movie.vote_average}
          imgSrc={movie.backdrop_path}
        />
      ))}
    </div>
  );
}

export default App;
