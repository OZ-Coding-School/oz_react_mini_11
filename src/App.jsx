import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/nav/NavBar";
import MovieDetail from "./components/movie/MovieDetail";
import Home from "./pages/Home";
import Layout from "./components/nav/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/details" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
