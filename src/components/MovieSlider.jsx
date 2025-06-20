import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import MovieCard from "./MovieCard";
import { TMDB_GET_OPTION, TMDB_POPULAR_API_URL } from "../constants";

function MovieSlider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(TMDB_POPULAR_API_URL, TMDB_GET_OPTION)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.results.filter((movie) => !movie.adult);
        setMovies(filtered);
      })
      .catch((err) => console.error("영화 로딩 실패:", err));
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
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide
              key={movie.id}
              className="pb-4"
              onClick={(e) => e.stopPropagation()}
            >
              <MovieCard
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                poster={movie.poster_path}
                variant="slider"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieSlider;
