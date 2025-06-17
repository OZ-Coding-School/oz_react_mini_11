import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  box-shadow: 0px 0px 20px 10px #00000020;
`;

const Image = styled.img`
  flex: 1;
  margin: 1.5rem;
  max-height: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  position: relative;
  bottom: 4rem;
  box-shadow: 0 15px 20px 5px #00000025;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 3rem 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TopWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.div`
  padding: 0 2rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const Rating = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
  font-size: 1.25rem;
  font-weight: 500;
  color: #b0b0b0;
`;

const GenresWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Genres = styled.div`
  padding: 0.75rem 1rem;
  border: 3px solid #ff98aa;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #fd8599;
  box-shadow: 0 0 5px 3px #ff98aa50;
`;

const Overview = styled.div`
  flex: 1;
  font-size: 1.125rem;
  line-height: 1.5;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MovieDetail({ data }) {
  console.log(data.backdrop_path);
  return (
    <Container>
      <Wrapper>
        <Image
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt="poster"
        />
        <ContentWrapper>
          <TopWrapper>
            <Title>{data.title}</Title>
            <Rating>평점: {data.vote_average}</Rating>
          </TopWrapper>
          <GenresWrapper>
            {data.genres.map(({ id, name }) => (
              <Genres key={id}>{name}</Genres>
            ))}
          </GenresWrapper>
          <Overview>{data.overview}</Overview>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
}

export default MovieDetail;
