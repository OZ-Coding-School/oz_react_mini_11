import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <div>로딩 중...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: '300px' }}
      />
      <p>⭐ 평점: {movie.vote_average}</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieDetail;
