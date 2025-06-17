import MOVIELISTDATA from "../data/movieListData.json";
import MovieCard from "./../components/MovieCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {MOVIELISTDATA.results.map((movie) => (
        <Link to={`/details`} key={movie.id}>
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
          />
        </Link>
      ))}
    </div>
  );
}

export default Home;
