import MOVIELISTDATA from "../data/movieListData.json";
import MovieCard from "../components/movie/MovieCard";
import { Link } from "react-router-dom";
import { HighRatedSwiper } from "../components/HighRatedSwiper";

function Home() {
  return (
    <div>
      <div className="w-screen h-100">
        <HighRatedSwiper />
      </div>
      <hr className="my-8 border-t-2 border-gray-200" />

      <h2 className="text-2xl font-bold mb-4 pl-5">영화 목록</h2>
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
    </div>
  );
}

export default Home;
