import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import MovieCard from "./components/MovieCard";
import movieData from "./data/movieListData.json";
import { SwiperComponent } from "./components/Swiper";

const URL = "https://image.tmdb.org/t/p/w500";

function App() {
  const [movies] = useState(movieData.results);
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full h-[90vh] ">
        <div className="absolute z-1 w-full h-full bg-[rgba(34,34,34,0.69)]"></div>
        <img
          src="src/img/img01.jpg"
          alt=""
          className="absolute w-full overflow-hidden h-full"
        />
        <span className="flex absolute z-30 top-40 left-30 w-full text-white text-5xl font-[900]">
          Watch it, Will be happy
        </span>
        <SwiperComponent movies={movies.slice(0, 5)} URL={URL} />
      </div>
      <div className="p-5 flex flex-col gap-8 ">
        <span className="text-white text-center text-4xl pt-50 font-[900]">
          Bom TV 오리지널 시리즈
        </span>
        <span className="text-white text-center text-2xl pb-10 font-[400]">
          오직 봄TV에서만 만날 수 있는 <br /> 오리지널 콘텐츠를 감상해 보세요.
        </span>
        <div className="flex flex-wrap gap-5">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              rating={Math.ceil(movie.vote_average * 10) / 10}
              poster={`${URL}${movie.poster_path}`}
              onClick={() => {
                navigate(`/movies/${movie.id}`);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
