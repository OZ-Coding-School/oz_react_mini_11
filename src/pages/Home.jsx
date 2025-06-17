import styled from "@emotion/styled";
import MovieCard from "../components/MovieCard";
import MOVIE_LIST_DATA from "../data/movieListData.json";

// const breakPoints = {
//   desktop: 1440,
//   laptop: 1024,
//   tablet: 768,
//   mobile: 480,
// }

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function Home() {
  return (
    <Container>
      {MOVIE_LIST_DATA.results.map((data) => (
        <MovieCard data={data} />
      ))}
    </Container>
  );
}

export default Home;
