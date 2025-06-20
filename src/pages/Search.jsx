import { Link, useSearchParams } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import useFetch from "../hooks/useFetch";
import SkeletonCard from "../components/skeletons/SkeletonCard";

function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const { data, loading } = useFetch(
    `search/multi?query=${keyword}&include_adult=false&language=ko`
  );

  console.log("Search keyword: ", keyword);

  const mediaList = data?.results.filter((el) => !el.adult && el.backdrop_path);
  const len = mediaList?.length;

  return (
    <div
      className="flex flex-wrap gap-8 absolute z-20 w-full pt-[100px] px-[5vw] pb-20
      bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,5)_30%,_rgba(0,0,0,1)_100%)]"
    >
      {loading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        <>
          <p className="w-full mt-10 text-2xl">
            `{keyword}` 검색 결과: {len ? (len === 20 ? len + "+" : len) : 0}개
          </p>
          {mediaList?.map((media) => (
            <Link
              to={`/details/${media.media_type}/${media.id}`}
              key={media.id}
            >
              <MediaCard
                title={media.title}
                avg={media.vote_average}
                imgSrc={media.poster_path}
              />
            </Link>
          ))}
        </>
      )}
    </div>
  );
}

export default Search;
