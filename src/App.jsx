import { useEffect, useState } from "react";
import "./App.css";

import MainBanner from "./components/MainBanner";
import SubTitle from "./components/SubTitle";
import Main from "./pages/Main";
import { useNavigate } from "react-router";
import { fetchPopularMovies } from "./api/fetchPopularMovies";

function App() {
  const [movies, setMovies] = useState([]);
  //useNavigate는 조건/이벤트 기반 이동
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_TMDB_IMAGE_URL;

  //useEffect안에 api 넣어서 처음 렌더링시 마운트 될때만 ,[]
  useEffect(() => {
    fetchPopularMovies()
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <MainBanner movies={movies} URL={URL} navigate={navigate} />
      <div className="p-5 flex flex-col gap-8 ">
        <SubTitle />
        <Main movies={movies} navigate={navigate} URL={URL} />
      </div>
    </>
  );
}

export default App;
