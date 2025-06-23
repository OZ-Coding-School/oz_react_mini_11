import {
  TMDB_BASE_URL,
  TMDB_SEARCH_API_PATH,
  TMDB_GET_OPTION,
} from "../constants";

/**
 * 영화 검색 API 호출 함수
 * @param {string} keyword - 검색 키워드
 * @returns {Promise<Array>} - 검색된 영화 목록
 */
export async function searchMovies(keyword) {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}${TMDB_SEARCH_API_PATH}?query=${encodeURIComponent(
        keyword
      )}&language=ko`,
      TMDB_GET_OPTION
    );

    if (!response.ok) {
      throw new Error("검색 요청 실패");
    }

    const data = await response.json();
    const filtered = data.results.filter((movie) => !movie.adult);
    return filtered;
  } catch (err) {
    console.error("❌ 영화 검색 실패:", err);
    throw err;
  }
}
