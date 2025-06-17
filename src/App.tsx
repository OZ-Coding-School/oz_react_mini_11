import { Route, Routes } from "react-router";
import Home from "./page/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<div>details</div>} />
    </Routes>
  );
}

export default App;
