const ACCESS_TOKEN = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

function getAuthHeaders() {
    return { 
     Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
  };
}
export async function fetchMoviesByGenre(genreId) {
  try {
    const response = await fetch (
      `${BASE_URL}/discover/movie?language=ko-KR&sort_by=popularity.desc&with_genres=${genreId}&page=1`,
      {method: "GET", 
      headers: getAuthHeaders() }
    );
    if (!response.ok) throw new Error("장르별 영화 조회 실패");
    const data = await response.json();
    
    return data.results?.filter((movie) => movie.adult === false);
  } catch (error) {
    console.error(`장르(${genreId}영화 로드 오류`, error);
    return [];
  }
}

export async function fetchPopularMovies() {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/popular?language=ko-KR&page=1`, 
        { method: "GET",
          headers: getAuthHeaders() 
        });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const filtered = data.results.filter(movie => movie.adult === false);
      return filtered;
    } catch (error) {
      console.error("영화 데이터 로드 실패", error);
      throw error;  // 호출한 곳에서 에러 처리 가능하도록 던짐
    }
  }

export async function fetchMovieDetail(id) {
  try{
    const response = await fetch(
      `${BASE_URL}/movie/${id}?language=ko-KR`, { 
        method: "GET",
        headers: getAuthHeaders()
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
        } catch (error) {
          console.error("영화 상세 데이터 로드 실패", error);
          throw error;
  }
}

export async function fetchSearchMovies(query) {
  try {
    if (!query.trim()){
      return [];
    }

    const response = await fetch(`${BASE_URL}/search/movie?language=ko-KR&query=` + encodeURIComponent(query), {
      method: "GET",
        headers: getAuthHeaders()
    });
    if (!response.ok) {
      throw new Error("검색 실패");
    }
    
    const data = await response.json();
    return data.results.filter((movie) => movie.adult === false);
  } catch (error) {
    console.error("영화 검색 오류", error);
    return [];
  }
}

