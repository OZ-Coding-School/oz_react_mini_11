import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import movieListData from './assets/movieListData.json';

export default function App() {
  const movies = movieListData.results;

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
