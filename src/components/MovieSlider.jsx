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
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={10}
      slidesPerView={4}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            poster={movie.poster_path}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSlider;
