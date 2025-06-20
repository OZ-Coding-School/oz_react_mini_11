import { Link } from 'react-router-dom';
import IMAGE_BASE_URL from '../data/imageURL.js';

export function MovieCard({ id, title, poster, rating }) {
  return (
    <div>
      <div className="m-2">
        <Link to={`/detail/${id}`}>
          <img
            src={`${IMAGE_BASE_URL}${poster}`}
            alt={`${title} poster`}
            className="
        w-[clamp(11.5rem,22vw,50rem)] aspect-[2/3]
        "
          />
        </Link>
      </div>
      <div className="p-3 bg-yellow-200 w-[clamp(11.5rem,22vw,50rem)] ml-2 aspect-[11/6] content-around">
        <h2 className="text-[clamp(0.9rem,1.5vw,2.2rem)] font-semibold">{title}</h2>
        <p className="text-[clamp(0.8rem,1.5vw,1.8rem)] font-medium text-cyan-600">
          ⭐ Rating: {rating}
        </p>
      </div>
    </div>
  );
}
