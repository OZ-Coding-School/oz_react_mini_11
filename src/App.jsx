import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Signup from "./pages/Signup";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/details/:id" element={<MovieDetail />} />
                <Route path="/search" element={<Search />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}

export default App;
