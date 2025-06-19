import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../constant";

export default function useFetchMovies(endpoint) {
  const [movieList, setMovieList] = useState();
  const [loading, setLoading] = useState(true);
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({});

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${endpoint}?language=ko&page=1`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.results.filter((el) => !el.adult);
        setMovieList(fetchData);
        setLoading(false);
        console.log(fetchData);
      })
      .catch((err) => console.error(err));
  }, []);

  return { movieList, loading };
}
