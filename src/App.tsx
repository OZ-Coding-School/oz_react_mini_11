import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";
import Loading from "./components/lodaing/Loading";

const Home = lazy(() => import("./page/Home"));
const Details = lazy(() => import("./page/Details"));

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
      </Route>
    </Routes>
  );
}

export default App;
