import { SwiperComponent } from "./Swiper";

export default function MainBanner({ movies, URL }) {
  return (
    <div className="relative w-full h-[90vh] ">
      <div className="absolute z-1 w-full h-full bg-[rgba(34,34,34,0.69)]"></div>
      <img
        src="src/img/img01.jpg"
        alt=""
        className="absolute w-full overflow-hidden h-full"
      />
      <span className="flex absolute z-30 top-40 left-30 w-full text-white text-5xl font-[900]">
        Watch it, Will be happy
      </span>
      <SwiperComponent movies={movies.slice(0, 5)} URL={URL} />
    </div>
  );
}
