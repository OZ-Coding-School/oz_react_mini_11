import { TMDB_BASE_URL } from './constants';

const token = import.meta.env.VITE_TMDB_TOKEN;

export async function fetchSearchMovies(query) {
  if (!query) return [];

  const encodedQuery = encodeURIComponent(query);
  const res = await fetch(
    `${TMDB_BASE_URL}/search/movie?language=ko-KR&query=${encodedQuery}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.status_message || 'API 요청 실패');
  }

  return data.results;
}
