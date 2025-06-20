import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { Container, Wrapper } from "./Layout.styles";

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
