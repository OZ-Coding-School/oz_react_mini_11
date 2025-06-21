import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MediaCard from "./MediaCard";
import { useState } from "react";

function SliderSection({ title, datas, type }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(7);
  const containerRef = useRef(null);

  const totalPages = Math.ceil(datas.length / cardsPerPage);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 480) setCardsPerPage(3);
      else if (width < 600) setCardsPerPage(4);
      else if (width < 768) setCardsPerPage(5);
      else if (width < 1024) setCardsPerPage(6);
      else setCardsPerPage(7);

      setCurrentPage(0);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideTo = (page) => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const cardWidth = containerWidth / datas.length;

    const moveX = cardWidth * cardsPerPage * page;
    container.style.transform = `translateX(-${moveX}px)`;

    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) slideTo(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) slideTo(currentPage - 1);
  };

  return (
    <div className="relative w-full overflow-hidden mb-10 px-[4vw] group">
      <h3 className="mb-2 text-[calc(1vw+8px)] leading-[calc(2vw+4px)]">
        {title}
      </h3>

      <div
        className="flex transition-transform duration-1000 ease"
        ref={containerRef}
        style={{
          width: `${(datas.length / cardsPerPage) * 100}%`,
        }}
      >
        {datas?.map((data) => (
          <Link to={`/details/${type}/${data.id}`} key={data.id}>
            <div
              style={{
                flex: `0 0 ${100 / (cardsPerPage * totalPages)}%`,
                padding: "4px",
              }}
            >
              <MediaCard
                title={data.title}
                avg={data.vote_average}
                imgSrc={data.poster_path}
              />
            </div>
          </Link>
        ))}
      </div>

      <button
        className="absolute top-[calc(2vw+16px)] left-0 z-10 w-[4vw] h-[calc(100%-2vw-20px)]
                    rounded-r-sm bg-black/50 text-transparent text-3xl
                    transition-all duration-200 ease-in-out
                    group-hover:bg-black/80 group-hover:text-white hover:bg-black/80 hover:text-white hover:text-4xl
                  "
        onClick={handlePrev}
        style={{ opacity: currentPage === 0 ? "0" : "1" }}
      >
        &lt;
      </button>

      <button
        className="absolute top-[calc(2vw+16px)] right-0 z-10 w-[4vw] h-[calc(100%-2vw-20px)]
                    rounded-l-sm bg-black/50 text-transparent text-3xl
                    transition-all duration-200 ease-in-out
                    group-hover:bg-black/80 group-hover:text-white hover:bg-black/80 hover:text-white hover:text-4xl
                  "
        onClick={handleNext}
        style={{ opacity: currentPage === totalPages - 1 ? "0" : "1" }}
      >
        &gt;
      </button>
    </div>
  );
}

export default SliderSection;
