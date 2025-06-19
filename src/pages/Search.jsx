import { Link } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import useFetchSearch from "../hooks/useFetchSearch";

function Search() {
  const mediaList = useFetchSearch();

  return (
    <div
      className="flex flex-wrap gap-8 absolute z-20 w-full pt-[100px] px-[5vw] pb-20
      bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,5)_30%,_rgba(0,0,0,1)_100%)]"
    >
      {!mediaList.length ? (
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
