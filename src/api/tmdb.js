const API_URL = "https://api.themoviedb.org/3/";
const TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

//인기영화 불러오기
export async function fetchMovies() {
    const res = await fetch(`${API_URL}/movie/popular?language=ko-KR`, {
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

//영화 패럼스에따른 디테일 정보 가져오기
export async function fetchMoviesDetail(id) {
    const res = await fetch(`${API_URL}/movie/${id}?language=ko-KR`, {
        //서버에 나 이 토큰 가진 사용자야~ 인증하기
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: "application/json",
        },
    });
    return res.json();
}
