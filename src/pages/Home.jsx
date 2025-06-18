import MOVIELISTDATA from "../data/movieListData.json";
import MovieCard from "../components/movie/MovieCard";
import { Link } from "react-router-dom";
import { HighRatedSwiper } from "../components/HighRatedSwiper";
import TMDBApi from "../api/TMDM_api";
import { useEffect, useState } from "react";

function Home() {
  const [movies, setMoives] = useState([]);

  useEffect(() => {
    TMDBApi.get("/movie/popular?language=ko-KR&page=1")
      .then((res) => setMoives(res.data.results))
      .catch((err) => console.error("API 호출 Error: ", err));
  }, []);

  return (
    <div>
      <div className="w-screen h-100">
        <HighRatedSwiper />
      </div>
      <hr className="my-8 border-t-2 border-gray-200" />

      <h2 className="text-2xl font-bold mb-4 pl-5">영화 목록</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {movies
          .filter((item) => item.adult === false)
          .map((item) => (
            <Link to={`/details`} key={item.id}>
              <MovieCard
                key={item.id}
                title={item.title}
                posterPath={item.poster_path}
                voteAverage={item.vote_average}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Home;
