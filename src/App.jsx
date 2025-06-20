import { useEffect, useState } from "react";
import "./App.css";

import MainBanner from "./components/MainBanner";
import SubTitle from "./components/SubTitle";
import Main from "./pages/Main";
import { useNavigate } from "react-router";

function App() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  //useNavigate는 조건/이벤트 기반 이동
  const URL = "https://image.tmdb.org/t/p/w500";

  const token = import.meta.env.VITE_TMDB_READ_TOKEN;

  //useEffect안에 api 넣어서 처음 렌더링시 마운트 될때만 ,[]
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((data) => (console.log(data), setMovies(data.results)))
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
