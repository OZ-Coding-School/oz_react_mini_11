import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular', {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
            accept: 'application/json',
          },
        });
        const data = await res.json();

        // 필터링: 성인영화 제외
        const safeMovies = data.results.filter((movie) => !movie.adult);
        setMovies(safeMovies);
      } catch (err) {
        console.error('영화 데이터를 불러오는 데 실패했습니다:', err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <div className="px-4 py-8">
              <h1 className="text-3xl font-bold mb-6">영화 목록</h1>
              <div className="flex flex-wrap gap-4 bg-gray-100 p-4 rounded-md min-h-[500px]">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    title={movie.title}
                    poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    rating={movie.vote_average}
                  />
                ))}
              </div>
            </div>
          }
        />
        <Route path="details" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}