import movieListData from "../assets/data/movieListData.json";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">🎬 인기 영화</h1>
      <div className="movie-grid">
        {movieListData.results.map((movie) => (
          <div
            className="movie-wrapper"
            onClick={() => navigate("/details")}
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;