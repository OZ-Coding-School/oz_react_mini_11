import styled from "@emotion/styled";

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

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: pink;
  border: 1px solid gray;
`;

function Home() {
  return (
    <Container>
      <CardWrapper>Test Card 1</CardWrapper>
      <CardWrapper>Test Card 2</CardWrapper>
      <CardWrapper>Test Card 3</CardWrapper>
      <CardWrapper>Test Card 4</CardWrapper>
      <CardWrapper>Test Card 5</CardWrapper>
      <CardWrapper>Test Card 6</CardWrapper>
      <CardWrapper>Test Card 7</CardWrapper>
      <CardWrapper>Test Card 8</CardWrapper>
      <CardWrapper>Test Card 9</CardWrapper>
      <CardWrapper>Test Card 10</CardWrapper>
    </Container>
  );
}

export default Home;
