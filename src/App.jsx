import React from 'react';
import './App.css';
import { Route, Routes, Outlet} from 'react-router-dom';
import MovieDetail from './page/MovieDetail.jsx'
import Main from './page/Main.jsx';
import NavBar from '../src/component/NavBar.jsx'

function Layout(){
  return(
      <div>
        <nav>
          <NavBar />
        </nav>
        <Outlet />
      </div>
  )
}

function App() {
  return(
    <>
      <Routes>  
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/details/:id" element={<MovieDetail />} />
          </Route>
      </Routes>
    </>
  )
}



export default App;