import './App.css';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import { SearchProvider } from './components/SearchContext';
import { useEffect, useState } from 'react';
import useDebounce from './hooks/useDebounce';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromURL = searchParams.get('query') || '';
  const [inputValue, setInputValue] = useState(queryFromURL);
  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    setInputValue(queryFromURL);
  }, [queryFromURL]);

  useEffect(() => {
    if (debouncedValue) {
      setSearchParams({ query: debouncedValue });
    } else {
      setSearchParams({});
    }
  }, [debouncedValue, setSearchParams]);

  return (
    <div className="flex flex-col items-center">
      <SearchProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout inputValue={inputValue} setInputValue={setInputValue} />
            }
          >
            <Route index element={<Home searchParams={debouncedValue} />} />
            <Route path="detail/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </SearchProvider>
    </div>
  );
}

export default App;
