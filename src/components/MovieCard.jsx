import { Link } from "react-router-dom";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function MovieCard({ title, poster, rating }) {
  return (
    <div>
      <Link to='/detail'> 
      {/* 요구사항: 더미데이터라 개별 링크 미지정 */}
        <img src={`${IMAGE_BASE_URL}${poster}`} alt={`${title} poster`} />
      </Link>
      <h2>{title}</h2>
      <p>⭐ Rating: {rating}</p>
    </div>
  );
}
