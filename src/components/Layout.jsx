import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";

//layout은 페이지 구조를 나타내고, outlet은 자식 라우트들이 들어오는 자리 navbar는 모든페이지에 항상 표시된다
export default function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main>
        {/* //outlet이 없다면 navbar, footer등 대부분의 페이지에 중복되는 컴포넌트들을 매번 중복해서 넣어야한다. */}
        <Outlet context={{ isLoggedIn, setIsLoggedIn }} />
      </main>
      <Footer />
    </>
  );
}
