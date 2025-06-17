import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>home</div>} />
      <Route path="/details/:id" element={<div>details</div>} />
    </Routes>
  );
}

export default App;
