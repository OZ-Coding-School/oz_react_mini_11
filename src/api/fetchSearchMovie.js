const token = import.meta.env.VITE_TMDB_READ_TOKEN;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export function fetchSearchMovie(query) {
  return fetch(
    `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=ko-KOR&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch search");
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}
