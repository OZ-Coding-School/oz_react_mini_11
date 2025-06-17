import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Image = styled.img`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-top-left-radius: 0.45rem;
  border-top-right-radius: 0.45rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
`;

const Rating = styled.div`
  align-self: flex-end;
  font-size: 1rem;
  font-weight: 500;
  color: gray;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #d0d0d0;
  border-radius: 0.5rem;
  transition: filter 0.3s ease-out;

  &:hover {
    filter: brightness(0.75);
  }
`;

function MovieCard({ data }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details");
  };

  return (
    <Container onClick={handleClick}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
        alt="movie-image"></Image>
      <Wrapper>
        <Title>{data.title}</Title>
        <Rating>평점: {data.vote_average}</Rating>
      </Wrapper>
    </Container>
  );
}

export default MovieCard;
