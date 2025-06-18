const API_URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR";
const TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

export async function fetchMovies() {
    const res = await fetch(API_URL, {
        //서버에 나 이 토큰 가진 사용자야~ 인증하기
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: "application/json",
        },
    });

    if (!res.ok) {
        throw new Error(" TMDB API 호출 실패");
    }
    return res.json();
}
