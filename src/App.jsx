import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import useLenisScroll from "./hooks/useLenisScroll";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import Login from "./pages/Login";

function App() {
  useLenisScroll();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:type/:id" element={<MovieDetail />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
