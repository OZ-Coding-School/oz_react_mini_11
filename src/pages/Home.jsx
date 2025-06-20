import Banner from "../components/Banner";
import SkeletonCard from "../components/skeletons/SkeletonCard";
import SliderSection from "../components/SliderSection";
import useFetch from "../hooks/useFetch";

function Home() {
  const { data, loading } = useFetch("movie/popular?language=ko&page=1");

  const popularMovieList = data?.results.filter((el) => !el.adult);

  return (
    <>
      <Banner />
      <div
        className="w-full absolute z-20 mt-[-9vw] pb-20
                    bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,5)_80px,_rgba(0,0,0,1)_100%)]"
      >
        {loading ? (
          Array.from({ length: 20 }).map((_, i) => <SkeletonCard key={i} />)
        ) : (
          <SliderSection title={"인기 영화"} datas={popularMovieList} />
        )}
      </div>
    </>
  );
}

export default Home;
