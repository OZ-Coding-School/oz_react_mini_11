import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Swiper 8 이상 사용 시 modules 경로로 import
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import movieListData from "./movieListData.json";
import MovieCard from "./MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setMovies(movieListData.results);
  }, []);

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#fff",
        padding: "20px 30px"
      }}
    >
      <Swiper 
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        slidesPerGroup={5}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        style={{ paddingBottom: "40px" }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} onClick={() => handleClick(movie.id)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
