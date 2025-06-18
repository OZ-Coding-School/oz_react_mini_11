import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout() {
    return (
        <>
            <Header />
            <NavBar />
            <main className="flex-grow px-4 py-6">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
