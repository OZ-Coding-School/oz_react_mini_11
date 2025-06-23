import "swiper/css/navigation";
import "swiper/css";
import { getPopularMovies } from "../../apis/popularMovieApi";
import { Banner, Container } from "./Home.styles";
import MovieList from "../../components/MovieList/MovieList";
import { getTopRatedMovies } from "../../apis/topRatedMoviesApi";
import { getUpcomingMovies } from "../../apis/upcomingMoviesApi";
import { getTrendingNowMovies } from "../../apis/trendingMoviesApi";
import { getFantasyMovies } from "../../apis/fantasyMoviesApi";
import { getActionMovies } from "../../apis/actionMoviesApi";
import { getComedyMovies } from "../../apis/comedyMoviesApi";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { getMovieVideo } from "../../apis/movieVideoApi";

function Home() {
  const [movieId, setMovieId] = useState(null);
  const [videoKey, setVideoKey] = useState("");
  const [loading, setLoading] = useState(false);

  useFetch(
    () => getMovieVideo(movieId),
    [movieId],
    (data) =>
      setVideoKey(data.results.filter((v) => v.type === "Trailer")[0].key),
    setLoading,
    "trailers"
  );

  return (
    <Container>
      <Banner>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&playlist=${videoKey}`}
          title="Most Popluar Movie Trailer"
          allowFullScreen></iframe>
      </Banner>
      <MovieList api={getTrendingNowMovies} sectionTitle="Trending Now" />
      <MovieList
        api={getPopularMovies}
        setMovieId={setMovieId}
        sectionTitle="Popular"
      />
      <MovieList api={getTopRatedMovies} sectionTitle="Top Rated" />
      <MovieList api={getUpcomingMovies} sectionTitle="Upcoming" />
      <MovieList api={getFantasyMovies} sectionTitle="Fantasy 인기 영화" />
      <MovieList api={getActionMovies} sectionTitle="Action 인기 영화" />
      <MovieList api={getComedyMovies} sectionTitle="Comedy 인기 영화" />
    </Container>
  );
}

export default Home;
