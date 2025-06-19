import { useState, useEffect } from "react";
import { API_KEY } from "../constant";

export default function useFetch(query) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    fetch(`https://api.themoviedb.org/3/${query}`, options)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        console.log("fetch success ", resData);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [query]);

  return { data, loading };
}
