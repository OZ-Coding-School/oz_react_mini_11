import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import "./swiperCard.css";
import BlurBackground from "./BlurBackground.jsx";
import { TMDB_IMAGE_BASE_URL } from "../constants.js";

export default function SwiperCard({ movies }) {
    const sortedMovies = [...movies].sort((a, b) => b.vote_count - a.vote_count).slice(0, 10); // 순위 1~10위까지

    const [activeIndex, setActiveIndex] = useState(0);
    const [bgImages, setBgImages] = useState([`${TMDB_IMAGE_BASE_URL}${sortedMovies[0]?.poster_path}`, null]);
    const [fadeIndex, setFadeIndex] = useState(1); // 0 또는 1

    useEffect(() => {
        const currentImg = `${TMDB_IMAGE_BASE_URL}${sortedMovies[activeIndex]?.poster_path}`;

        setFadeIndex((prev) => {
            const next = prev === 0 ? 1 : 0;

            setBgImages((prevImgs) => {
                const updated = [...prevImgs];
                updated[next] = currentImg;
                return updated;
            });

            return next;
        });
    }, [activeIndex]);

    return (
        <div className=" flex justify-center items-center relative w-full h-[300px] overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
                <div className="backdrop-blur-md bg-white/40 px-4 py-2 rounded-xl text-1xl  font-extrabold text-red-700 shadow-lg">
                    TOP 10
                </div>
            </div>
            {/*  두 개 겹쳐서 부드러운 페이드 */}
            <BlurBackground $visible={fadeIndex === 0} $img={bgImages[0]} />
            <BlurBackground $visible={fadeIndex === 1} $img={bgImages[1]} />
            <Swiper
                modules={[Pagination]}
                slidesPerView="auto"
                centeredSlides
                spaceBetween={24}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {sortedMovies.map((movie, index) => (
                    <SwiperSlide key={movie.id} className="!w-[180px]">
                        <div className="group relative w-full h-[270px]">
                            <img
                                src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300 grayscale group-hover:grayscale-0"
                            />
                            <span className="absolute bottom-2 left-2 text-white text-5xl font-bold px-2 py-1 text-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                                {index + 1}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
