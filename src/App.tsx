import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<div>details</div>} />
      </Route>
    </Routes>
  );
}

export default App;
