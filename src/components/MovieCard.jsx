
import { useNavigate } from 'react-router-dom';
const IMG_BASE = 'https://image.tmdb.org/t/p/w500';

export default function MovieCard({ title, vote_average, poster_path }) {
  const navigate = useNavigate();
  return (
    <div className="movie-card" onClick={() => navigate('/details')} style={{ cursor: 'pointer' }}>
      <img src={IMG_BASE + poster_path} alt={title} />
      <h3>{title}</h3>
      <p>⭐ {vote_average}</p>
    </div>
  );
}
