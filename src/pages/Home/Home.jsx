import "swiper/css/navigation";
import "swiper/css";
import { getPopularMovies } from "../../apis/popularMovieApi";
import { Container } from "./Home.styles";
import MovieList from "../../components/MovieList/MovieList";

function Home() {
  return (
    <Container>
      <MovieList api={getPopularMovies} sectionTitle="Trending Now" />
    </Container>
  );
}

export default Home;
