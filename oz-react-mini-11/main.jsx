import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MovieDetail from './components/MovieDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/details" element={<MovieDetail />} />
    </Routes>
  </BrowserRouter>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import App from './pages/App';
import MovieDetail from './pages/MovieDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="details" element={<MovieDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);