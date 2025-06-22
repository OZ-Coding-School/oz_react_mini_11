import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
`;

function Signup() {
  return (
    <Container>
      <LoginHeader>Signup</LoginHeader>
    </Container>
  );
}

export default Signup;
