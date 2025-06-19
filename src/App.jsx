import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MovieList />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="movies/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
