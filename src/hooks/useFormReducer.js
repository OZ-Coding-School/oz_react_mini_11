import { useReducer } from "react";
import { REGEX_EMAIL, REGEX_NAME, REGEX_PW } from "../constant";

const VALIDATORS = {
  email: { regex: REGEX_EMAIL, message: '유효하지 않은 이메일 주소입니다.' },
  name: { regex: REGEX_NAME, message: '2~8자, 숫자/한글/영어만 사용 가능' },
  password: { regex: REGEX_PW, message: '6자 이상, 영어 대/소문자 + 숫자 포함' },
  confirmPassword: { matchField: 'password', message: '비밀번호가 일치하지 않습니다.' },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return { ...state, errors: { ...state.errors, [action.field]: action.error } };
    default:
      return state;
  }
};

export default function useFormReducer(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch({ type: 'SET_VALUE', field: id, value });

    const validator = VALIDATORS[id];
    if (validator.regex && !validator.regex.test(value)) {
      dispatch({ type: 'SET_ERROR', field: id, error: validator.message });
    } else if (id === 'confirmPassword' && value !== state.password) {
      dispatch({ type: 'SET_ERROR', field: id, error: validator.message });
    } else {
      dispatch({ type: 'SET_ERROR', field: id, error: '' });
    }
  };

  return { state, handleChange };
}