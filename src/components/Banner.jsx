import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { BASE_URL, API_KEY } from "../constant/index";
import SkeletonBanner from "./skeletons/SkeletonBanner";

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
      <div
        ref={nodeRef}
        className="relative aspect-[1] sm:aspect-[1.4] lg:aspect-[1.8]"
      >
        <div className="fixed w-full aspect-[1] sm:aspect-[1.4] lg:aspect-[1.8] z-0">
          <img
            className="w-full aspect-[1] sm:aspect-[1.4] lg:aspect-[1.8] object-cover "
            src={`${BASE_URL}${movie.backdrop_path}`}
            alt={movie.title}
          />
          <div
            className="absolute inset-0
                      bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.7)_0px,_rgba(0,0,0,0.3)_80px,_rgba(0,0,0,0.3)_calc(100%-80px),_rgba(0,0,0,1)_100%)]"
          />
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 absolute bottom-[20vw] md:bottom-[14vw] z-20 w-[calc(100%-5vw)] mx-[5vw]">
          <p className="text-[3vw] font-black">{movie.title}</p>
          <div className="text-[calc(1vw+4px)]">
            <span className="mr-12">
              ★ {movie.vote_average.toFixed(1)}&nbsp;&nbsp;|&nbsp;&nbsp;{" "}
              {movie.vote_count}
            </span>
            <span className="text-gray-300">
              {movie.original_title}&nbsp;&nbsp;·&nbsp;&nbsp;
              {movie.release_date.split("-")[0]}
            </span>
          </div>
          <p className="w-[calc(100%-5vw)] md:w-[calc(50%-5vw)] text-[calc(1vw+4px)] text-gray-300 break-keep leading-[calc(1vw+10px)]">
            {movie.overview.split(". ").length > 3
              ? movie.overview.split(". ").slice(0, 3).join(". ") + "..."
              : movie.overview}
          </p>
          <div>
            <button
              className="mr-4 py-[1.5vw] px-[3vw] rounded-xl bg-white text-[calc(1.25vw+4px)] text-black transition-all duration-3000
                              hover:text-white hover:bg-blue-600"
            >
              ▶&nbsp;&nbsp;재생
            </button>
            <button
              className="py-[1.5vw] px-[3vw] rounded-xl bg-[#c0c0c070] text-[calc(1.25vw+4px)] transition-all duration-3000
                              hover:bg-[#c0c0c0a7]"
            >
              ⓘ&nbsp;&nbsp;상세 정보
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  ) : (
    <SkeletonBanner />
  );
}

export default Banner;
