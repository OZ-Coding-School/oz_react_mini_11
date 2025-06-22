import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import LOGIN_FIELDS from '../constant/loginFields';
import useFormReducer from "../hooks/useFormReducer";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";

const initialState = {
  email: '',
  password: '',
  errors: {
    email: '',
    password: '',
  }
};

function Login() {
  const { state, handleChange } = useFormReducer(initialState);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = state;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      console.log('login success: ', data);

      if (error) {
        alert('[로그인 실패] ' + error.message);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log('로그인 시도 값:', email, password);
    }
  };

  return (
    <div className="relative w-full min-h-screen h-full overflow-x-hidden">
      <AuthLayout />

      <form
        className="relative flex flex-col gap-4 w-full min-w-[340px] mt-14 mx-auto mb-20 p-[5vw] rounded-2xl bg-black
                  sm:w-[500px] sm:mt-24 sm:p-14 sm:bg-[#000000c1]"
        onSubmit={handleLogin}
      >
        <h2 className="mb-4 text-3xl font-bold sm:text-center">로그인</h2>
        {LOGIN_FIELDS.map((field) => (
          <Input
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            value={state[field.id]}
            placeholder={field.placeholder}
            error={state.errors[field.id]}
            onChange={handleChange}
            hideLabel={field.hideLabel}
          />
        ))}
        <button
          type="submit"
          className="w-full py-2 px-6 rounded-md bg-red-primary hover:bg-red-hover text-lg text-white
                      transition-all duration-300"
        >
          로그인
        </button>
        <div className="text-base">
          <span className="text-gray-300">
            오즈무비 회원이 아닌가요? &nbsp;
          </span>
          <Link to="/register">
            <span className="hover:underline">지금 가입하세요.</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
