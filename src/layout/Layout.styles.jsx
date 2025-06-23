import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 100%;
  height: calc(100% - 100px);
  padding: 2rem 10rem;

  @media (max-width: ${(props) => props.theme.breakPoints.laptop}) {
    padding: 2rem 5%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
