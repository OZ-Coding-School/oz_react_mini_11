import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import MovieDetail from "./pages/Detail";
import MovieCard from "./pages/MovieCard";
import Layout from "./Components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MovieCard />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
