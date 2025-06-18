import React, { useState } from "react";
import MovieCard from "./components/MovieCard";
import movieListData from "./data/movieListData.json";
import "./App.css";

function App() {
  const [movies] = useState(movieListData.results);

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default App;
