import Banner from "../components/Banner";
import SkeletonCard from "../components/skeletons/SkeletonCard";
import SliderSection from "../components/SliderSection";
import useFetch from "../hooks/useFetch";

function Home() {
  const { data: popularMovieData, loading: popularMovieLoading } = useFetch(
    "movie/popular?include_adult=false&language=ko&page=1"
  );
  const { data: onTheAirData, loading: onTheAirLoading } = useFetch(
    "tv/on_the_air?language=ko&page=1"
  );
  const { data: seriesUSData, loading: seriesUSLoading } = useFetch(
    "discover/tv?include_adult=false&include_null_first_air_dates=false&language=ko&page=1&sort_by=popularity.desc&with_origin_country=US"
  );
  const { data: actionAnimeData, loading: actionAnimeLoading } = useFetch(
    "discover/tv?include_adult=false&include_null_first_air_dates=false&language=ko&page=1&sort_by=popularity.desc&with_genres=80,16&with_origin_country=JP"
  );

  const sliders = [
    {
      title: "인기 영화",
      data: popularMovieData?.results || [],
      loading: popularMovieLoading,
      type: "movie",
    },
    {
      title: "매주 공개! 이건 꼭 봐야 해",
      data: onTheAirData?.results || [],
      loading: onTheAirLoading,
      type: "tv",
    },
    {
      title: "미국 드라마",
      data: seriesUSData?.results || [],
      loading: seriesUSLoading,
      type: "tv",
    },
    {
      title: "범죄 아니메 시리즈",
      data: actionAnimeData?.results || [],
      loading: actionAnimeLoading,
      type: "tv",
    },
  ];

  return (
    <>
      <Banner />
      <div
        className="w-full absolute z-20 mt-[-9vw] pb-20
                    bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,5)_80px,_rgba(0,0,0,1)_100%)]"
      >
        {sliders.map((slider, idx) =>
          slider.loading ? (
            <div key={idx}>
              {Array.from({ length: 20 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <SliderSection
              key={idx}
              title={slider.title}
              datas={slider.data}
              type={slider.type}
            />
          )
        )}
      </div>
    </>
  );
}

export default Home;
