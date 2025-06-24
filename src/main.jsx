import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { MovieDetail } from "./pages/MovieDetail.jsx";
import Layout from "./components/Layout.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import "swiper/css";
import "swiper/css/navigation";
import SearchPage from "./pages/SearchPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/*Layout은 페이지 구조를 전체적으로 보여주는 녀석 */}
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        {/* path에 movieId를 받아서 MovieDetail넘겨줌 ,detail에서 params이용해서 사용함*/}
        <Route path="/movies/:movieId" element={<MovieDetail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
