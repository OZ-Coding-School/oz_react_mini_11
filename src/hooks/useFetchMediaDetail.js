import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../constant";

export default function useFetchMediaDetail() {
  const [media, setMedia] = useState();
  const [loading, setLoading] = useState(true);
  const { type, id } = useParams();
  console.log(id);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    fetch(`https://api.themoviedb.org/3/${type}/${id}?language=ko`, options)
      .then((res) => res.json())
      .then((data) => {
        setMedia(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return { media, loading };
}
