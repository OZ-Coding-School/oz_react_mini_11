import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import styled from "@emotion/styled";
import Lottie from "lottie-react";
import loadingAnimation from "./assets/animations/loading-animation.json";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const MovieDetail = lazy(() => import("./components/MovieDetail/MovieDetail"));

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee;
  font-size: 3rem;
  font-weight: 600;
`;

const StyledLottie = styled(Lottie)`
  width: 10rem;
  height: 10rem;
`;

function App() {
  return (
    <Suspense
      fallback={
        <Wrapper>
          <StyledLottie animationData={loadingAnimation} loop autoplay />
        </Wrapper>
      }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/detail/:movieId" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
