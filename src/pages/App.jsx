import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MovieCard from "../components/MovieCard";
import SkeletonMovieCard from "../components/SkeletonMovieCard";
import GenreMovieList from "../components/GenreMovieList";

import useDebounce from "../hooks/useDebounce";
import useAppLogic from "../hooks/useAppLogic";


function App() {
  const navigate = useNavigate();
  
  const { searchTerm } = useOutletContext();
  const debouncedSearch = useDebounce(searchTerm, 500);

  const {movies, genreMovies, loading, favoriteGenres,} = useAppLogic(debouncedSearch);

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  const slideCount = loading ? 5 : Math.min(5, movies.length);

  return (
    <div
      style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff", padding: "20px 30px" }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        {debouncedSearch ? `"${debouncedSearch}" 검색 결과` : "인기 영화"}
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={slideCount}
        slidesPerGroup={slideCount}
        navigation
        pagination={{ clickable: true }}
        loop={!loading && movies.length >= 5}
        style={{ paddingBottom: "40px" }}
      >
        {loading
          ? Array.from({ length: slideCount }).map((_, idx) => (
              <SwiperSlide key={idx}>
                <SkeletonMovieCard />
              </SwiperSlide>
            ))
          : movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} onClick={() => handleClick(movie.id)} />
              </SwiperSlide>
            ))}
      </Swiper>
      {!debouncedSearch.trim() && favoriteGenres.map((genre) => (
        <GenreMovieList 
        key={genre.id} 
        title={genre.name}
        movies={genreMovies[genre.name] || []}
        onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default App;
