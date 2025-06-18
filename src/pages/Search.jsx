import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import MediaCard from "../components/MediaCard";

function Search() {
  const [mediaList, setMediaList] = useState([]);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  console.log("Search keyword: ", keyword);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDYxYTMzM2IxM2IzZTg0ZDM3ODQxNjk1M2JmN2M5OCIsIm5iZiI6MTc1MDIxOTQzOC43MDU5OTk5LCJzdWIiOiI2ODUyM2FhZTI4ZDYyY2EyZmY4N2JhNGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IW0v90fXcfWtOWhjGrwbUjS0CLAzWuNY-ytgwIxbYbU",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${keyword}&include_adult=false&language=ko`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.results.filter(
          (el) => !el.adult && el.backdrop_path
        );
        setMediaList(fetchData);
        console.log(fetchData);
      })
      .catch((err) => console.error(err));
  }, [searchParams]);

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
