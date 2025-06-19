import "./MovieCard.styles";
import { useNavigate } from "react-router-dom";
import { Container, Image, Rating, Title, Wrapper } from "./MovieCard.styles";

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
