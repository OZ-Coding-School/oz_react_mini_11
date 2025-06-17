import styled from "@emotion/styled";

const Image = styled.img``;

const Container = styled.div``;

const Title = styled.span``;

const Rating = styled.span``;

function MovieCard() {
  return (
    <Container>
      <Image src="https://image.tmdb.org/t/p/w500" alt="movie-image"></Image>
      <Title>혹성탈출: 새로운 시대</Title>
      <Rating>평점: 7.35</Rating>
    </Container>
  );
}

export default MovieCard;
