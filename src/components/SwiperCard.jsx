import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import "./swiperCard.css";
import BlurBackground from "./BlurBackground.jsx";

export default function SwiperCard({ movies }) {
    // const swiperWrappedRef = useRef(null);

    // function adjustMargin() {
    //     const screenWidth = window.innerWidth;

    //     if (swiperWrappedRef.current) {
    //         swiperWrappedRef.current.style.marginLeft =
    //             screenWidth <= 520 ? "0px" : screenWidth <= 650 ? "-50px" : screenWidth <= 800 ? "-100px" : "-150px";
    //     }
    // }

    // useEffect(() => {
    //     adjustMargin();
    //     window.addEventListener("resize", adjustMargin);
    //     return () => window.removeEventListener("resize", adjustMargin);
    // }, []);

    // const srotMovies = [...movies.results].sort((a, b) => b.vote_count - a.vote_count);

    // const [activeIndex, setActiveIndex] = useState(0);

    // const bgImage = `https://image.tmdb.org/t/p/w500/${srotMovies[activeIndex]?.poster_path}`;

    // console.log(srotMovies);
    // return (
    //     <div className="flex justify-center items-center h-80">
    //         <BlurBackground style={{ backgroundImage: `url(${bgImage})` }} />
    //         <Swiper
    //             slidesPerView="auto"
    //             centeredSlides={true}
    //             spaceBetween={20}
    //             pagination={{ clickable: true }}
    //             modules={[Pagination]}
    //             // modules={[Pagination]}
    //             grabCursor
    //             initialSlide={0}
    //             // centeredSlides
    //             // slidesPerView={7}
    //             speed={800}
    //             slideToClickedSlide
    //             // pagination={{ clickable: true }}
    //             // spaceBetween={10} //
    //             breakpoints={{
    //                 100: { spaceBetween: 10 },
    //                 320: { spaceBetween: 20 },
    //                 650: { spaceBetween: 30 },
    //                 800: { spaceBetween: 20 },
    //                 1024: { spaceBetween: 30 },
    //             }}
    //             // onSwiper={(swiper) => {
    //             //     swiperWrappedRef.current = swiper.wrapperEl;
    //             // }}
    //         >
    //             {srotMovies.map((slide, index) => (
    //                 <SwiperSlide key={slide.id} className="!w-[200px] transition-all duration-300 ease-in-out">
    //                     <div className="relative w-full h-[270px] swiper-zoom  rounded-xl shadow-xl shadow-amber-950">
    //                         <img
    //                             src={`https://image.tmdb.org/t/p/w500/${slide.poster_path}`}
    //                             alt={`${slide.title}`}
    //                             className="w-full h-[270px] object-cover rounded-xl"
    //                         />
    //                         <span
    //                             className={`absolute top-2 left-2 px-3 py-1 rounded-full shadow-md font-extrabold
    //       ${index < 3 ? "bg-red-500 text-white text-2xl" : "bg-gray-300 text-black text-sm"}`}
    //                         >
    //                             {index + 1}
    //                         </span>
    //                     </div>
    //                 </SwiperSlide>
    //             ))}
    //         </Swiper>
    //     </div>
    // );
    const sortedMovies = [...movies.results].sort((a, b) => b.vote_count - a.vote_count);

    const [activeIndex, setActiveIndex] = useState(0);
    const [bgImages, setBgImages] = useState([`https://image.tmdb.org/t/p/w500/${sortedMovies[0]?.poster_path}`, null]);
    const [fadeIndex, setFadeIndex] = useState(1); // 0 또는 1

    useEffect(() => {
        const currentImg = `https://image.tmdb.org/t/p/w500/${sortedMovies[activeIndex]?.poster_path}`;

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
        <div className="relative w-full h-auto overflow-hidden">
            {/* ✅ 두 개 겹쳐서 부드러운 페이드 */}
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
                        <div className="relative w-full h-[270px]">
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-full object-cover rounded-xl shadow-lg"
                            />
                            <span className="absolute top-2 left-2 bg-yellow-400 text-black text-sm font-bold px-2 py-1 rounded-full">
                                {index + 1}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
