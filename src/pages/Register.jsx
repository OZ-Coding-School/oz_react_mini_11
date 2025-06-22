import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";
import REGISTER_FIELDS from '../constant/registerFields';
import useFormReducer from "../hooks/useFormReducer";
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

function Register() {
  const { state, handleChange } = useFormReducer(initialState);
  const navigate = useNavigate();

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
        onSubmit={handleRegister}
      >
        <h2 className="mb-4 text-3xl font-bold sm:text-center">회원가입</h2>
        {REGISTER_FIELDS.map((field) => (
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
          가입하기
        </button>
      </form>
    </div>
  );
}

export default Register;
