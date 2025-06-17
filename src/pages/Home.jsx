import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
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
