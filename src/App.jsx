import './App.css'
import { Route, Routes } from "react-router-dom"
import MovieCard from './page/MovieCard'
import MovieDetail from './page/MovieDetail'
import Layout from './page/Layout'
function App () {
  return (
    <>
      <Routes>
        <Route path = "/"  element = {<Layout />}>
          <Route index  element = {<MovieCard />}></Route>
          <Route path = "/detail"  element = {<MovieDetail />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
