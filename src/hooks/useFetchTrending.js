import { useState, useEffect } from "react";
import { API_KEY } from "../constant";

export default function useFetchTrending() {
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    fetch("https://api.themoviedb.org/3/trending/all/day?language=ko", options)
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.results.filter(
          (el) =>
            !el.adult && (el.media_type === "tv" || el.media_type === "movie")
        );
        setMediaList(fetchData);
        setLoading(false);
        console.log(fetchData);
      })
      .catch((err) => console.error(err));
  }, []);

  return { mediaList, loading };
}
