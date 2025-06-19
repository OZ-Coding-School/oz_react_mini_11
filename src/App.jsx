import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import Login from "./pages/Login";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/details/:id" element={<MovieDetail />} />
            </Route>

            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
