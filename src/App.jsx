import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MovieCard from "./MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try{
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // 성인 영화 제외 부분
        const filtered = data.results.filter(movie => movie.adult === false);
        setMovies(filtered);
      } catch (error) {
        console.error("영화 데이터 로드 실패", error);
      }
    }
    fetchPopularMovies();
  }, []);

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
      
  return (
    <div
      style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff", padding: "20px 30px" }}>
      <h2 style={{ marginBottom: "20px" }}>영화 리스트</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        slidesPerGroup={5}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        style={{ paddingBottom: "40px" }}>
        {filteredMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} onClick={() => handleClick(movie.id)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
