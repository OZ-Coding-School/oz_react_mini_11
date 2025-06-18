export const TMDB_MOIVE_API_BASE_URL = "https://api.themoviedb.org/3/movie";

export const TMDB_GET_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
  },
};
