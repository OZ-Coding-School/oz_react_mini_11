import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MovieCard from "../components/MovieCard";
import SkeletonMovieCard from "../components/SkeletonMovieCard";
import { fetchPopularMovies } from "../api/movieApi";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try{
        const movies = await fetchPopularMovies();
        setMovies(movies);
      } catch (error) {
        console.error("영화 데이터 로드 실패", error);
      } finally {
        setLoading(false);
      }
    }
    loadMovies();
  }, []);

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
    
  const slideCount = loading ? 5 :  Math.min(5, filteredMovies.length);

  return (
    <div
      style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff", padding: "20px 30px" }}>
      <h2 style={{ marginBottom: "20px" }}>영화 리스트</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={slideCount}
        slidesPerGroup={slideCount}
        navigation
        pagination={{ clickable: true }}
        loop={!loading && filteredMovies.length >=5}
        style={{ paddingBottom: "40px" }}>
          
          {loading
          ? Array.from({ length: slideCount}).map((_, idx) => (
          <SwiperSlide key={idx}>
            <SkeletonMovieCard />
          </SwiperSlide>
          ))
        : filteredMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} onClick={() => handleClick(movie.id)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
