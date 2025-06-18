
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MovieList from './components/MovieList';
import MovieDetail from './pages/MovieDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MovieList />} />
        <Route path="/details" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}
