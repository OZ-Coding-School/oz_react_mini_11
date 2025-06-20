import { useEffect, useState } from "react";
import { fetchMovies } from "../api/tmdb";

export default function LoginBackground() {
    const [bgImgs, setbgImgs] = useState([]);

    useEffect(() => {
        fetchMovies()
            .then((data) => {
                const safeMovies = data.results.filter((movie) => movie.adult === false && movie.poster_path);
                const shuffled = [...safeMovies].sort(() => 0.5 - Math.random());
                const selected = shuffled.slice(0, 3);
                setbgImgs(selected);
            })
            .catch((error) => console.error("api error", error));
    }, []);
    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
            {bgImgs.map((movie, index) => {
                let style = "";
                if (index === 0) {
                    // 왼쪽 포스터
                    style = "transform -rotate-[15deg]  scale-150 translate-x-[-120%] translate-y-[-20%] opacity-40";
                } else if (index === 1) {
                    // 가운데 포스터
                    style = "transform scale-150 opacity-40 z-20";
                } else if (index === 2) {
                    // 오른쪽 포스터
                    style = "transform  scale-150 rotate-[15deg] translate-x-[120%] translate-y-[20%] opacity-40";
                }

                return (
                    <img
                        key={index}
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt=""
                        className={`absolute w-[300px] h-[450px] object-cover rounded-lg shadow-xl transition-all duration-700 ${style}`}
                        style={{ zIndex: index === 1 ? 10 : 5 }}
                    />
                );
            })}
        </div>
    );
}
