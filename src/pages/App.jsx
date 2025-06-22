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
  const { searchTerm, darkMode } = useOutletContext();
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { movies, genreMovies, loading, favoriteGenres } = useAppLogic(debouncedSearch);

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  const filteredMovies = movies.slice(0, 20);
  const MAX_SLIDES = 5;
  const slideCount = loading ? 1 : Math.min(MAX_SLIDES, filteredMovies.length);


  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#fff",
        color: darkMode ? "#f9f9f9" : "#333",
        minHeight: "100vh",
        padding: "40px 16px",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <style>{`
        @media (max-width: 1024px) {
          .swiper-slide {
            width: 80% !important;
          }
        }
        @media (max-width: 768px) {
          .swiper-slide {
            width: 100% !important;
          }
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: ${darkMode ? "#ccc" : "#333"};
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        .swiper-button-prev {
          left: -25px;
        }
        .swiper-button-next {
          right: -25px;
        }
        @media (max-width: 768px) {
          .swiper-button-prev {
            left: -15px;
          }
          .swiper-button-next {
            right: -15px;
          }
        }
      `}</style>

      <h2
        style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          marginBottom: "24px",
          textAlign: "center",
          color: darkMode ? "#f9f9f9" : "#000",
        }}
      >
        {debouncedSearch ? `"${debouncedSearch}" 검색 결과` : "인기 영화"}
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={slideCount}
        slidesPerGroup={slideCount}
        spaceBetween={16}
        navigation
        pagination={{ clickable: true }}
        loop={!loading && filteredMovies.length >= 5}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 12 },
          640: { slidesPerView: 2.2, spaceBetween: 14 },
          768: { slidesPerView: 3.2, spaceBetween: 16 },
          1024: { slidesPerView: 4.2, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {loading
          ? Array.from({ length: slideCount }).map((_, idx) => (
              <SwiperSlide key={idx}>
                <SkeletonMovieCard darkMode={darkMode} />
              </SwiperSlide>
            ))
          : filteredMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard
                  movie={movie}
                  onClick={() => handleClick(movie.id)}
                  large={true}
                  darkMode={darkMode}
                />
              </SwiperSlide>
            ))}
      </Swiper>

      {!debouncedSearch.trim() &&
        favoriteGenres.map((genre) => {
          const movies = (genreMovies[genre.name] || [])
            .filter((movie) => !movie.adult)
            .slice(0, 10);

          return (
            <GenreMovieList
              key={genre.id}
              title={genre.name}
              movies={movies}
              onClick={handleClick}
              darkMode={darkMode}
            />
          );
        })}
    </div>
  );
}

export default App;