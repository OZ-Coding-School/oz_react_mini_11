import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";
import Loading from "./components/lodaing/Loading";

const Home = lazy(() => import("./page/Home"));
const Details = lazy(() => import("./page/Details"));
const Search = lazy(() => import("./page/Search"));
const Signup = lazy(() => import("./page/Signup"));
const Login = lazy(() => import("./page/Login"));

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/details/:id"
          element={
            <Suspense fallback={<Loading />}>
              <Details />
            </Suspense>
          }
        />
        <Route
          path="/search"
          element={
            <Suspense fallback={<Loading />}>
              <Search />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<Loading />}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
