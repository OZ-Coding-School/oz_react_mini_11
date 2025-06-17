import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import movieListData from "./data/movieListData.json";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./pages/MovieDetail";

function App() {
  const [movieList, setMovieList] = useState(movieListData);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-wrap justify-center gap-4">
              {movieList.results.map((movie) => (
                <Link to="/details">
                  <MovieCard
                    key={movie.id}
                    title={movie.title}
                    avg={movie.vote_average}
                    imgSrc={movie.backdrop_path}
                  />
                </Link>
              ))}
            </div>
          }
        />
        <Route path="/details" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
