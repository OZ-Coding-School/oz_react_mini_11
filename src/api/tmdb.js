// API 호출 코드를 컴포넌트 밖으로 분리해서 재사용 가능
// Home.jsx, MovieDetail.jsx 등에서 불러다 쓰기만 하면 됨
// 유지보수도 쉬움 (API 주소 바뀌어도 이 파일만 고치면 됨)

//공통상수
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

// 영화 검색 API
export async function fetchsearchMovies(query) {
    const res = await fetch(`${API_URL}/search/movie?query=${query}&language=ko-KR`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("TMDB 검색 API 호출 실패");
    }

    return res.json();
}
