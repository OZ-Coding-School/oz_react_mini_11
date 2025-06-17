import { Link } from "react-router-dom";
import { useState } from "react";
import movieListData from "../data/movieListData.json";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movieList, setMovieList] = useState(movieListData);
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {movieList.results.map((movie) => (
        <Link to="/details">
          <MovieCard
            key={movie.id}
            title={movie.title}
            avg={movie.vote_average}
            imgSrc={movie.poster_path}
          />
        </Link>
      ))}
    </div>
  );
}

export default Home;
