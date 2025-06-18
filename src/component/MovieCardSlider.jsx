import { Link } from "react-router-dom";
import { baseUrl } from "../constant/constant";
export default function MovieCardSlider({ movie }) {
  return (
    <>
      <div>
        <Link to="/details">
          <div
            className="main-slider"
            style={{
              background: `url(${baseUrl}${movie.poster_path}) center / cover no-repeat`,
            }}
          >
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
