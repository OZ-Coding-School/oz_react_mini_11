import "swiper/css/navigation";
import "swiper/css";
import { getPopularMovies } from "../../apis/popularMovieApi";
import { Container } from "./Home.styles";
import MovieList from "../../components/MovieList/MovieList";
import { getTopRatedMovies } from "../../apis/topRatedMoviesApi";
import { getUpcomingMovies } from "../../apis/UpcomingMoviesApi";
import { getTrendingNowMovies } from "../../apis/trendingMoviesApi";
import { getFantasyMovies } from "../../apis/fantasyMoviesApi";
import { getActionMovies } from "../../apis/actionMoviesApi";
import { getComedyMovies } from "../../apis/comedyMoviesApi";

function Home() {
  return (
    <Container>
      <MovieList api={getTrendingNowMovies} sectionTitle="Trending Now" />
      <MovieList api={getPopularMovies} sectionTitle="Popular" />
      <MovieList api={getTopRatedMovies} sectionTitle="Top Rated" />
      <MovieList api={getUpcomingMovies} sectionTitle="Upcoming" />
      <MovieList api={getFantasyMovies} sectionTitle="Fantasy 인기 영화" />
      <MovieList api={getActionMovies} sectionTitle="Action 인기 영화" />
      <MovieList api={getComedyMovies} sectionTitle="Comedy 인기 영화" />
    </Container>
  );
}

export default Home;
