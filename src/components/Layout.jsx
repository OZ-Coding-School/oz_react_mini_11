import { Link, Outlet } from "react-router-dom";

import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/tmdb";

export default function Layout() {
    const [allMoives, setAllMovies] = useState([]); // 항상 인기 순위 Swiper컴포넌트로 전달하기 위한 영화 데이터 관리
    const [searchResultMovies, setSearchResultMoives] = useState([]); // 검색결과를 보여주기 위한

    useEffect(() => {
        fetchMovies()
            .then((data) => {
                const safeMovies = data.results.filter((movie) => movie.adult === false);
                setAllMovies(safeMovies);
            })
            .catch((error) => console.error("api error", error));
    }, []);

    // console.log(movies);

    return (
        <>
            <NavBar setSearchResultMoives={setSearchResultMoives} />
            <main className="flex-grow px-4 py-6">
                <Outlet context={{ allMoives, searchResultMovies }} />
            </main>
            <Footer />
        </>
    );
}
