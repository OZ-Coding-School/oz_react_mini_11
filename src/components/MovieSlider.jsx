import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import MovieCard from "./MovieCard";
import movieListData from "../data/movieListData.json";

function MovieSlider() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={10}
      slidesPerView={4}
    >
      {movieListData.results.map((movie) => (
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
