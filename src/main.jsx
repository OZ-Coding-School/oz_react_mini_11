import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import App from "./pages/App";
import MovieDetail from "./pages/MovieDetail";

import { ThemeProvider } from "./contexts/ThemeContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="details/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);