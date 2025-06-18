import { Link } from "react-router-dom";
import { useState } from "react";
import movieListData from "../data/movieListData.json";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movieList, setMovieList] = useState(movieListData.results);

  return (
    <>
      <Banner movie={movieList[6]} />
      <div
        className="flex flex-wrap gap-8 absolute z-20 px-[5vw] pb-20
      bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,5)_30%,_rgba(0,0,0,1)_100%)]"
      >
        {movieList.map((movie) => (
          <Link to="/details" key={movie.id}>
            <MovieCard
              title={movie.title}
              avg={movie.vote_average}
              imgSrc={movie.poster_path}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
