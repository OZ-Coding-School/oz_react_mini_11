import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MainBanner from "./components/MainBanner";
import SubTitle from "./components/SubTitle";

function App() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const URL = "https://image.tmdb.org/t/p/w500";

  const token = import.meta.env.VITE_TMDB_READ_TOKEN;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: token,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((data) => (setMovies(data.results), console.log(data.results)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <MainBanner movies={movies} URL={URL} />
      <div className="p-5 flex flex-col gap-8 ">
        <SubTitle />
        <div className="flex flex-wrap gap-5">
          {movies
            .filter((movie) => !movie.adult)
            .map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  rating={Math.ceil(movie.vote_average * 10) / 10}
                  poster={`${URL}${movie.poster_path}`}
                  onClick={() => {
                    navigate(`/movies/${movie.id}`);
                  }}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
