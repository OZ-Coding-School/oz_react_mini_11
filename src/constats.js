export const TMDB_MOIVE_API_BASE_URL = "https://api.themoviedb.org/3/movie";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const TMDB_POPULAR_API_URL =
  "https://api.themoviedb.org/3/movie/popular?language=ko";

export const TMDB_GET_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
  },
};
