import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Detail from "./component/Detail";
import Layout from "./component/Layout";
import Main from "./component/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/details/:movieId" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
