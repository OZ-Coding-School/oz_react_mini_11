import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./swiperCard.css";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
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
            <button className="custom-prev absolute left-4 z-10 text-white text-4xl transition hover:scale-150">
                {"<"}
            </button>
            <button className="custom-next absolute right-4 z-10 text-white text-4xl transition hover:scale-150">
                {">"}
            </button>

            {/*  두 개 겹쳐서 부드러운 페이드 */}
            <BlurBackground $visible={fadeIndex === 0} $img={bgImages[0]} />
            <BlurBackground $visible={fadeIndex === 1} $img={bgImages[1]} />
            <Swiper
                modules={[Pagination, Navigation]}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                slidesPerView="auto"
                centeredSlides
                spaceBetween={24}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {sortedMovies.map((movie, index) => (
                    <SwiperSlide key={movie.id} className="!w-[180px]">
                        <div className="group relative w-full h-[270px] rounded-xl overflow-hidden shadow-md border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                            <img
                                src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-300"
                            />
                            <span className="absolute bottom-2 left-2 text-white text-5xl font-bold px-2 py-1 text-shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:scale-110 group-hover:text-yellow-200 transition-all duration-300">
                                {index + 1}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
