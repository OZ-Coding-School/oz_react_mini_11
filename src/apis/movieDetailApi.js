import axios from "axios";

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export async function getMovieDetail(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("영화 상세 정보 불러오기 실패 : ", error);
    throw error;
  }
}
