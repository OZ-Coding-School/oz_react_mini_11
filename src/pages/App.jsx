import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MovieCard from "../components/MovieCard";
import SkeletonMovieCard from "../components/SkeletonMovieCard";
import { fetchPopularMovies, fetchSearchMovies } from "../api/movieApi";
import useDebounce from "../hooks/useDebounce";

import { fetchMoviesByGenre } from "../api/movieApi";
import GenreMovieList from "../components/GenreMovieList";

const favoriteGenres = [
  { id: 28, name: "액션" },
  { id: 35, name: "코미디" },
  { id: 18, name: "드라마" },
  { id: 10749, name: "로맨스" },
  { id: 27, name: "공포" },
];



function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const { searchTerm } = useOutletContext();
  const debouncedSearch = useDebounce(searchTerm, 500);

  const [genreMovies, setGenreMovies] = useState({})

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        let data;
        if (debouncedSearch.trim()) {
          data = await fetchSearchMovies(debouncedSearch);
        } else {
          data = await fetchPopularMovies();
        }
        setMovies(data);
      } catch (error) {
        console.error("영화 데이터 로드 실패", error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, [debouncedSearch]);

useEffect(() => {
  const loadGenreMovies = async () => {
   const results = {};
   await Promise.all(
    favoriteGenres.map(async (genre) => {
      const data = await fetchMoviesByGenre(genre.id);
      results[genre.name] = data;
    })
   )
   setGenreMovies(results);
  };

  if (!debouncedSearch.trim()) {
    loadGenreMovies();
  } else {
    setGenreMovies({});
  }
}, [debouncedSearch]);

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
        ket={genre.id} 
        title={genre.name}
        movies={genreMovies[genre.name] || []}
        onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default App;
