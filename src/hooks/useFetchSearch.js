import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../constant";

export default function useFetchSearch() {
  const [mediaList, setMediaList] = useState([]);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  console.log("Search keyword: ", keyword);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
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
  }, [searchParams, keyword]);

  return mediaList;
}
