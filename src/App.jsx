import "./App.styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import loadingAnimation from "./assets/animations/loading-animation.json";
import { StyledLottie, Wrapper } from "./App.styles";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const MovieDetail = lazy(() => import("./components/MovieDetail/MovieDetail"));

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
