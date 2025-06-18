import React from 'react';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ title, vote_average, poster_path }) => {
  return (
    <div className="movie-card">
      <img src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
      <h3>{title}</h3>
      <p>평점: {vote_average}</p>
    </div>
  );
};

export default MovieCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ title, vote_average, poster_path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/details');
  };

  return (
    <div className="movie-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
      <h3>{title}</h3>
      <p>평점: {vote_average}</p>
    </div>
  );
};

export default MovieCard;