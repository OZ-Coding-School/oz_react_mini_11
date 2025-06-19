import { Link } from "react-router-dom";
import SearchMovie from "./SearchMovie";

export default function NavBar({ setSearchResultMovies, setIsSearching }) {
    return (
        <div className="bg-neutral-900 px-4 py-4 md:px-8 md:py-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <Link to="/" className="flex justify-center md:justify-start items-center">
                    <img src="/logo.png" alt="로고" className="w-28 h-auto cursor-pointer" />
                </Link>

                <div className="flex justify-center md:justify-center w-full md:w-[400px]">
                    <SearchMovie setSearchResultMovies={setSearchResultMovies} setIsSearching={setIsSearching} />
                </div>

                <div className="flex justify-center md:justify-end gap-4">
                    <Link to="/login" className="hover:underline">
                        로그인
                    </Link>
                    <button className="text-white text-sm hover:underline">회원가입</button>
                </div>
            </div>
        </div>
    );
}
