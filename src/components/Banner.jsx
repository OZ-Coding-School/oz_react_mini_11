import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { BASE_URL, API_KEY } from "../constant/index";

function Banner() {
  const [movieList, setMovieList] = useState([]);
  const [currontIndex, setcurrontIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const movie = movieList?.[currontIndex];
  const nodeRef = useRef(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=ko", //trending movies
      options
    )
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.results.filter((el) => !el.adult);
        setMovieList(fetchData);
        setLoading(false);
        console.log(fetchData);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const changeMovie = (newMovie) => {
      setIsVisible(false);
      setTimeout(() => {
        setcurrontIndex(newMovie % movieList.length);
        setIsVisible(true);
      }, 300);
    };

    const interval = setInterval(() => {
      changeMovie(currontIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currontIndex, movieList.length]);

  return !loading ? (
    <CSSTransition
      in={isVisible}
      timeout={1000}
      classNames="fade"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div ref={nodeRef} className="relative aspect-[2]">
        <div className="fixed w-full aspect-[2] z-0">
          <img
            className="w-full aspect-[2] object-cover "
            src={`${BASE_URL}${movie.backdrop_path}`}
            alt={movie.title}
          />
          <div
            className="absolute inset-0
                      bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.7)_0px,_rgba(0,0,0,0.3)_80px,_rgba(0,0,0,0.3)_calc(100%-80px),_rgba(0,0,0,1)_100%)]"
          />
        </div>

        <div className="flex flex-col gap-6 absolute bottom-[160px] z-20 w-[calc(50%-5vw)] mx-[5vw]">
          <p className="text-[3vw] font-black">{movie.title}</p>
          <div>
            <span className="mr-12">
              ★ {movie.vote_average.toFixed(1)}&nbsp;&nbsp;|&nbsp;&nbsp;{" "}
              {movie.vote_count}
            </span>
            <span className="text-gray-300">
              {movie.original_title}&nbsp;&nbsp;·&nbsp;&nbsp;
              {movie.release_date.split("-")[0]}
            </span>
          </div>
          <p className="text-gray-300 break-keep leading-6">{movie.overview}</p>
          <div>
            <button
              className="mr-4 py-3 px-8 rounded-xl bg-white text-xl text-black transition-all duration-3000
                              hover:text-white hover:bg-blue-600"
            >
              ▶&nbsp;&nbsp;재생
            </button>
            <button
              className="py-3 px-8 rounded-xl bg-[#90909080] text-xl transition-all duration-3000
                              hover:bg-[#909090bb]"
            >
              ⓘ&nbsp;&nbsp;상세 정보
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  ) : (
    <div>loading...</div>
  );
}

export default Banner;
