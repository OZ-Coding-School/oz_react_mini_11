const token = import.meta.env.VITE_TMDB_READ_TOKEN;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export function fetchMovieDetails(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}?language=ko-Korea`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch details");
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}
