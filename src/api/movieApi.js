const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchPopularMovies() {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/popular?language=ko-KR&page=1&api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // 성인 영화 제외 필터링
      const filtered = data.results.filter(movie => movie.adult === false);
      return filtered;
    } catch (error) {
      console.error("영화 데이터 로드 실패", error);
      throw error;  // 호출한 곳에서 에러 처리 가능하도록 던짐
    }
  }

export async function fetchMovieDetail(id) {
    const response = await fetch(
        `${BASE_URL}/movie/${id}?language=ko-KR&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
}

