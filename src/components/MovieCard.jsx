import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Image = styled.img`
  width: 100%;
  aspect-ratio: 5/6;
  object-fit: cover;
  border-top-left-radius: 0.45rem;
  border-top-right-radius: 0.45rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
`;

const Title = styled.div`
  color: #eeeeee;
  font-size: 1.125rem;
  font-weight: 700;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  border-radius: 0.5rem;
  background-color: #2c2c2c;
  transition: filter 0.4s ease-out;
  &:hover {
    filter: brightness(1.2);
  }
`;

function MovieCard({ data }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${data.id}`);
  };

  return (
    <Container onClick={handleClick}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt="movie-image"></Image>
      <Wrapper>
        <Title>{data.title}</Title>
        <Rating>평점: {data.vote_average}</Rating>
      </Wrapper>
    </Container>
  );
}

export default MovieCard;
