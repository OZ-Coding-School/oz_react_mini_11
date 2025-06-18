import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { BASE_URL } from "../constant/index";
import movieListData from "../data/movieListData.json";

function Banner() {
  const [movieList, setMovieList] = useState(movieListData.results);
  const [currontIndex, setcurrontIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const movie = movieList[currontIndex];
  const nodeRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      changeMovie(currontIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currontIndex, movieList.length]);

  const changeMovie = (newMovie) => {
    setIsVisible(false);
    setTimeout(() => {
      setcurrontIndex(newMovie % movieList.length);
      setIsVisible(true);
    }, 300);
  };

  return (
    <CSSTransition
      in={isVisible}
      timeout={1000}
      classNames="fade"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className="relative mb-10 aspect-[2.1]">
        <div className="fixed w-full aspect-[2] z-0">
          <img
            className="w-full aspect-[2] object-cover "
            src={`${BASE_URL}${movie.backdrop_path}`}
            alt={movie.title}
          />
          <div
            className="absolute inset-0 
                      bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.6)_0px,_rgba(0,0,0,0.1)_80px,_rgba(0,0,0,0.1)_calc(100%-80px),_rgba(0,0,0,1)_100%)]"
          />
        </div>

        <div
          className="flex gap-[5vw] absolute bottom-5 z-20 w-[calc(100% - 10vw)] mx-[5vw]
                  md:w-3/4 lg:w-4/5"
        >
          <img
            className="w-1/4 rounded-md"
            src={`${BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="flex flex-col gap-[3vw] text-xs lg:text-sm">
            <p className="text-gray-200">{movie.release_date.split("-")[0]}</p>
            <p className="text-[3vw] font-black">{movie.title}</p>
            <p className="text-gray-200 break-keep">{movie.overview}</p>
            <p className="text-gray-200">★ {movie.vote_average.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Banner;
