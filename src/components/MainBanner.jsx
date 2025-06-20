import { SwiperComponent } from "./Swiper";

export default function MainBanner({ movies, URL, navigate }) {
  return (
    <div className="relative w-full h-[40vh] md:h-[90vh]  ">
      <div className="absolute z-1 w-full h-full  bg-[rgba(34,34,34,0.69)]"></div>
      <img
        src="src/img/img01.jpg"
        alt=""
        className="absolute w-full h-[40vh] md:h-[90vh]"
      />
      <span className="flex absolute z-30 top-30 left-10 md:top-40 md:left-30 w-full text-white text-3xl md:text-5xl font-[600] md:font-[900]">
        Watch it, Will be happy
      </span>
      <SwiperComponent
        movies={movies.slice(0, 20)}
        URL={URL}
        navigate={navigate}
      />
    </div>
  );
}
