import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  console.log("Search keyword: ", keyword);

  return <div className="text-white pt-20">{keyword}</div>;
}

export default Search;
