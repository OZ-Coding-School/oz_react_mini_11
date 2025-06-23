import "./App.styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import loadingAnimation from "./assets/animations/loading-animation.json";
import { StyledLottie, Wrapper } from "./App.styles";
import { FormProvider } from "./contexts/FormContext";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const Search = lazy(() => import("./pages/Search/Search"));
const MovieDetail = lazy(() => import("./components/MovieDetail/MovieDetail"));
const Login = lazy(() => import("./pages/Login/Login"));
const Signup = lazy(() => import("./pages/Signup/Signup"));

function App() {
  return (
    <Suspense
      fallback={
        <Wrapper>
          <StyledLottie animationData={loadingAnimation} loop autoplay />
        </Wrapper>
      }>
      <BrowserRouter>
        <FormProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/detail/:movieId" element={<MovieDetail />} />
            </Route>

            <Route path="/login" element={<Login />}></Route>

            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </FormProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
