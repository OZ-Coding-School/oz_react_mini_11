export const BASE_URL = "https://image.tmdb.org/t/p/w500";
export const BASE_URL_ORIGIN = "https://image.tmdb.org/t/p/original";
export const API_KEY = import.meta.env.VITE_API_KEY;

export const SUPABASE_URL = import.meta.env.VITE_PROJECT_URL;
export const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

export const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 사용
export const REGEX_NAME = /^[가-힣a-zA-Z0-9]{2,8}$/;  // 2~8자 사이 숫자, 한글, 영어만 사용
export const REGEX_PW = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/; // 영어 대문자/소문자 + 숫자, 6자 이상

export const REGISTER_FIELDS = [
  { id: 'email', label: '이메일', type: 'email', placeholder: '이메일 주소' },
  { id: 'name', label: '이름', type: 'text', placeholder: '2~8자, 숫자, 한글, 영어만 사용' },
  { id: 'password', label: '비밀번호', type: 'password', placeholder: '영문 대/소문자 + 숫자' },
  { id: 'confirmPassword', label: '비밀번호 확인', type: 'password', placeholder: '비밀번호 확인', hideLabel: true },
];