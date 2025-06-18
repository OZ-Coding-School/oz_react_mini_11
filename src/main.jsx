import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import MovieDetail from './components/MovieDetail.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App/>}/>
        <Route path='/detail' element={<MovieDetail/>}/>
        <Route path='*' element={<h3> 404 Not Found </h3>}/>
      </Route>
    </Routes> 
  </BrowserRouter>
);
