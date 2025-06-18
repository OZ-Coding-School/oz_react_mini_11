import React from 'react';
import movieData from '../data/movieDetailData.json';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetail = () => {
  const {
    title,
    vote_average,
    genres,
    overview,
    poster_path,
    backdrop_path
  } = movieData;

  return (
    <div className="movie-detail">
      <img
        className="backdrop"
        src={`${IMAGE_BASE_URL}${backdrop_path || poster_path}`}
        alt={title}
      />

      <div className="info">
        <h2>{title}</h2>
        <p><strong>평점:</strong> {vote_average}</p>

        <div className="genres">
          <strong>장르:</strong>{" "}
          {genres.map((genre) => genre.name).join(', ')}
        </div>

        <p className="overview">{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;

import React from 'react';
import movieData from '../data/movieDetailData.json';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetail = () => {
  const {
    title,
    vote_average,
    genres,
    overview,
    poster_path,
    backdrop_path
  } = movieData;

  return (
    <div className="movie-detail">
      <img
        src={`${IMAGE_BASE_URL}${backdrop_path || poster_path}`}
        alt={title}
        className="backdrop"
      />
      <h2>{title}</h2>
      <p>평점: {vote_average}</p>
      <p><strong>장르:</strong> {genres.map((g) => g.name).join(', ')}</p>
      <p>{overview}</p>
    </div>
  );
};

export default MovieDetail;