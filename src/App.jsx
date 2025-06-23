import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import SearchResult from "./components/SearchResult";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { getUserInfo } = useAuth();

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MovieList />} />
        <Route path="search" element={<SearchResult />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
