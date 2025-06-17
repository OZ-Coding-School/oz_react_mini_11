import styled from "@emotion/styled";
import Home from "./pages/Home";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
