import { useNavigate } from "react-router-dom";
import { baseUrl } from "../constant/constant";
export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${movie.id}`);
  };
  return (
    <>
      <div onClick={handleClick} className="lg:w-[25%] w-[50%] movie-card">
        <div>
          <img src={`${baseUrl}${movie.poster_path}`} />
          <div>
            <h2>{movie.title}</h2>
            <p>평점 : {movie.vote_average}</p>
          </div>
        </div>
      </div>
    </>
  );
}
