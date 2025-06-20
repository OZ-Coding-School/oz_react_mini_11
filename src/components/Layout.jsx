import { Link, Outlet } from "react-router-dom";

import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/tmdb";

export default function Layout() {
    const [allMovies, setAllMovies] = useState([]); // 항상 인기 순위 Swiper컴포넌트로 전달하기 위한 영화 데이터 관리
    const [searchResultMovies, setSearchResultMovies] = useState([]); // 검색결과를 보여주기 위한
    const [isSearching, setIsSearching] = useState(false);

    // console.log(movies);

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <NavBar />
                <main className="flex-grow px-4 py-6">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </>
    );
}
