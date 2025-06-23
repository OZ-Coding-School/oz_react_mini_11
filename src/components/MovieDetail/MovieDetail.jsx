import { useParams } from "react-router-dom";
import { useState } from "react";
import { getMovieDetail } from "../../apis/movieDetailApi";
import {
  Container,
  ContentWrapper,
  Genres,
  GenresWrapper,
  Image,
  Overview,
  Rating,
  Title,
  TopWrapper,
  Wrapper,
} from "./MovieDetail.styles";
import MovieDetailSkeleton from "./MovieDetailSkeleton";
import { useFetch } from "../../hooks/useFetch";

function MovieDetail() {
  const { movieId } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useFetch(
    () => getMovieDetail(movieId),
    [movieId],
    setDetail,
    setLoading,
    "detail"
  );

  return (
    <>
      {loading ? (
        <MovieDetailSkeleton />
      ) : (
        <Container>
          <Wrapper>
            <Image
              src={`https://image.tmdb.org/t/p/w1280${detail.backdrop_path}`}
              alt="poster"
            />
            <ContentWrapper>
              <TopWrapper>
                <Title>{detail.title}</Title>
                <Rating>평점: {detail.vote_average}</Rating>
              </TopWrapper>
              <GenresWrapper>
                {detail.genres?.map(({ id, name }) => (
                  <Genres key={id}>{name}</Genres>
                ))}
              </GenresWrapper>
              <Overview>{detail.overview}</Overview>
            </ContentWrapper>
          </Wrapper>
        </Container>
      )}
    </>
  );
}

export default MovieDetail;
