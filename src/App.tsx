import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Layout from "./components/Layout";
import Details from "./page/Details";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
