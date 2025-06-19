import { Link, useSearchParams } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import useFetch from "../hooks/useFetch";

function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const { data, loading } = useFetch(
    `search/multi?query=${keyword}&include_adult=false&language=ko`
  );

  console.log("Search keyword: ", keyword);

  const mediaList = data?.results.filter((el) => !el.adult && el.backdrop_path);

  return (
    <div
      className="flex flex-wrap gap-8 absolute z-20 w-full pt-[100px] px-[5vw] pb-20
      bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,5)_30%,_rgba(0,0,0,1)_100%)]"
    >
      {loading ? (
        <div className="w-full py-[30vh] text-2xl text-center">
          검색 결과가 없습니다.
        </div>
      ) : (
        mediaList?.map((media) => (
          <Link to={`/details/${media.media_type}/${media.id}`} key={media.id}>
            <MediaCard
              title={media.title}
              avg={media.vote_average}
              imgSrc={media.poster_path}
            />
          </Link>
        ))
      )}
    </div>
  );
}

export default Search;
