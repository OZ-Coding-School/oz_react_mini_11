import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 1rem 10rem;
`;

function Layout() {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}

export default Layout;
