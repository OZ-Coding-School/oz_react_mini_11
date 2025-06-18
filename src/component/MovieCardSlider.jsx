import { Link } from "react-router-dom";
import { baseUrl } from "../constant/constant";
export default function MovieCardSlider({ movie }) {
  return (
    <>
      <div>
        <Link to="/details">
          <div className="main-slider">
            <img
              src={`${baseUrl}${movie.poster_path}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div>
              <h2>{movie.title}</h2>
              <p>평점 : {movie.vote_average}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
