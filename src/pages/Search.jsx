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
      className="w-full pt-[100px] px-[5vw] pb-20"
    >
      <p className="w-full mt-10 mb-8 text-[calc(12px+1vw)]">
        `{keyword}` 검색 결과: {len ? (len === 20 ? len + "+" : len) : 0}개
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-[calc(1vw+8px)]">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          <>
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
    </div>
  );
}

export default Search;
