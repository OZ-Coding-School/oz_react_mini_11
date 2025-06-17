import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
