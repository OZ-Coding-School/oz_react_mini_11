import Index from './components/Index.jsx';
import MovieDetail from './components/MovieDetail.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SearchResults from './components/SearchResults.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="detail/:id" element={<MovieDetail />} />
        </Route>
        <Route path="*" element={<h3> 404 Not Found </h3>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
