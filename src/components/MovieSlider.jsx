import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { TMDB_BASE_URL, TMDB_GET_OPTION, IMAGE_BASE_URL } from "../constants";

function MovieSlider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${TMDB_BASE_URL}/movie/top_rated?language=ko`, TMDB_GET_OPTION)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.results.filter((movie) => !movie.adult);
        setMovies(filtered);
      })
      .catch((err) => console.error("🔥 추천 영화 로딩 실패:", err));
  }, []);

  return (
    <div className="my-6 px-2 md:px-4 lg:px-6">
      <div className="bg-[#2b2b2b] rounded-xl p-4 shadow">
        <h2 className="text-xl font-bold text-purple-400 mb-4">
          🔥 인기 상영작
        </h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={15}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`${IMAGE_BASE_URL}${
                    movie.backdrop_path || movie.poster_path
                  }`}
                  alt={movie.title}
                  className="rounded-lg object-cover w-full h-40 md:h-52 shadow hover:scale-105 transition-transform duration-200"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieSlider;
