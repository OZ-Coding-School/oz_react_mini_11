import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import movieListData from './data/movieListData.json';

const App = () => {
  const [movies] = useState(movieListData); // 상태로 데이터 관리

  return (
    <div className="app">
      <h1>🎬 Movie List</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            vote_average={movie.vote_average}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <div className="App">
      <MovieDetail />
    </div>
  );
}

export default App;