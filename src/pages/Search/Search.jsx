import styled from "@emotion/styled";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useState } from "react";
import "swiper/css/navigation";
import "swiper/css";
import { getSearchMovie } from "../../apis/searchMovieApi";
import MovieCardSkeleton from "../../components/MovieCard/MovieCardSkeleton";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakPoints.desktop}) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  @media (max-width: ${(props) => props.theme.breakPoints.laptop}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (max-width: ${(props) => props.theme.breakPoints.tablet}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

function Search() {
  const [movies, setMovies] = useState([]); // 검색된 영화 데이터
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useFetch(
    () => getSearchMovie(query),
    [searchParams],
    (data) => setMovies(data.results),
    setLoading,
    "searched movies"
  );

  return (
    <Container>
      {loading
        ? Array.from({ length: 1 }).map((_, i) => <MovieCardSkeleton key={i} />)
        : movies.map((data) => <MovieCard key={data.id} data={data} />)}
    </Container>
  );
}

export default Search;
