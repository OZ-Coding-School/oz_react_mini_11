import { Link } from "react-router-dom";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function MovieCard({ title, poster, rating }) {
  return (
  <div>
    <div className="m-3">
      <Link to='/detail'> 
      {/* 요구사항: 더미데이터라 개별 링크 미지정 */}
        <img src={`${IMAGE_BASE_URL}${poster}`} alt={`${title} poster`} className="
        w-[22vw] aspect-[2/3]
        "/>
      </Link>
    </div>
    <div className="p-3 bg-yellow-200 w-[22vw] ml-3 aspect-[11/5] content-around">
      <h2 className="text-[clamp(1rem,1.5vw,2rem)] font-semibold">{title}</h2>
      <p className="text-[clamp(0.8rem,1.5vw,1.6rem)] font-medium text-cyan-600">⭐ Rating: {rating}</p>
    </div>
  </div>  
  );
}
