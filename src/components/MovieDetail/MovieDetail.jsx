import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

function MovieDetail() {
  const { movieId } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMovieDetail(movieId);
        setDetail(data);
      } catch (error) {
        console.error("getMovieDetail 실행 실패 : ", error);
        throw error;
      } finally {
        setLoading(false);
      }
    })();
  }, [movieId]);

  console.log(detail);

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
