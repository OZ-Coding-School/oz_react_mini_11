import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import styled from "@emotion/styled";

const Wrapper = styled.main`
  width: 100%;
  height: calc(100% - 100px);
  padding: 2rem 10rem 0;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

function Layout() {
  return (
    <Container>
      <NavBar />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
}

export default Layout;
