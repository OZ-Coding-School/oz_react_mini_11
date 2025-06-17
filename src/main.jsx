import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import MovieDetail from './components/MovieDetail.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/detail' element={<MovieDetail/>}/>
      <Route path='/' element={<h3> 404 Not Found </h3>}/>
    </Routes> 
  </BrowserRouter>
);
