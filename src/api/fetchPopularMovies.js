const token = import.meta.env.VITE_TMDB_READ_TOKEN;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export function fetchPopularMovies() {
  return fetch(`${BASE_URL}/movie/popular?language=en-US&page=1`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch movies");
      return res.json();
    })

    .then((res) => res.results);
}
