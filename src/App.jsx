import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Detail from "./component/Detail";
import Layout from "./component/Layout";
import Main from "./component/Main";
import Search from "./component/Search";
import Login from "./component/Login";
import SignUp from "./component/Signup";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/details/:movieId" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
