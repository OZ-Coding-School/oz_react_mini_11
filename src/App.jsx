import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
