import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Detail from "./component/Detail";
import Layout from "./component/Layout";
import Main from "./component/Main";
import Search from "./component/Search";
import Login from "./component/Login";
import Join from "./component/Join";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/details/:movieId" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
