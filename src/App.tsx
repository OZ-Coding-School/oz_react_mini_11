import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";
import Loading from "./components/lodaing/Loading";

const Home = lazy(() => import("./page/Home"));
const Details = lazy(() => import("./page/Details"));
const Search = lazy(() => import("./page/Search"));

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
      </Route>
    </Routes>
  );
}

export default App;
