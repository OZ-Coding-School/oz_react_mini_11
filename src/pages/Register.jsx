import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import { REGEX_NAME, REGEX_EMAIL, REGEX_PW, REGISTER_FIELDS } from "../constant";
import Input from "../components/Input";
import AuthLayout from "../components/AuthLayout";

const initialState = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
  errors: {
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  }
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

function Register() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const validators = {
    email: { regex: REGEX_EMAIL, message: '유효하지 않은 이메일 주소입니다.' },
    name: { regex: REGEX_NAME, message: '2~8자, 숫자/한글/영어만 사용 가능' },
    password: { regex: REGEX_PW, message: '6자 이상, 영어 대/소문자 + 숫자 포함' },
    confirmPassword: { matchField: 'password', message: '비밀번호가 일치하지 않습니다.' },
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch({ type: 'SET_VALUE', field: id, value });

    const validator = validators[id];
    if (validator.regex && !validator.regex.test(value)) {
      dispatch({ type: 'SET_ERROR', field: id, error: validator.message });
    } else if (id === 'confirmPassword' && value !== state.password) {
      dispatch({ type: 'SET_ERROR', field: id, error: validator.message });
    } else {
      dispatch({ type: 'SET_ERROR', field: id, error: '' });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { email, name, password } = state;

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name }
        }
      });
      console.log('register success: ', data);

      if (error) {
        alert('[회원가입 실패] ' + error.message);
      } else {
        alert('회원가입 완료');
        navigate('/login');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="relative w-full min-h-screen h-full overflow-x-hidden">
      <AuthLayout />

      <form
        className="relative flex flex-col gap-4 w-full min-w-[340px] mt-14 mx-auto mb-20 p-[5vw] rounded-2xl bg-black
                  sm:w-[500px] sm:mt-24 sm:p-14 sm:bg-[#000000c1]"
      >
        <h2 className="mb-4 text-3xl font-bold sm:text-center">회원가입</h2>
        { REGISTER_FIELDS.map((field) => (
          <Input
            key={ field.id }
            id={ field.id }
            label={ field.label }
            type={ field.type }
            value={ state[field.id] }
            placeholder={ field.placeholder }
            error={ state.errors[field.id] }
            onChange={ handleChange }
            hideLabel={ field.hideLabel }
          />
        )) }

        <button
          className="w-full py-2 px-6 rounded-md bg-red-primary hover:bg-red-hover text-lg text-white
                      transition-all duration-300"
          onClick={ handleRegister }
        >
          가입하기
        </button>
      </form>
    </div>
  );
}

export default Register;
