import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="relative w-full min-h-screen h-full overflow-x-hidden">
      <div
        className="absolute inset-0 overflow-hidden bg-cover bg-center brightness-50"
        style={{ backgroundImage: `url(src/assets/bg.png)` }}
      />

      <div className="relative flex flex-col items-center pb-20">
        <Link to="/">
          <h1 className="pt-12 pb-20 text-3xl font-bold">OZMOVIE</h1>
        </Link>
        <div className="flex flex-col gap-4 w-[calc(280px+10vw)] p-8 rounded-3xl bg-[#000000c1]">
          <h2 className="mb-4 text-2xl font-bold text-center">Log In</h2>
          <input
            type="text"
            placeholder="id"
            className="w-full py-[calc(4px+0.75vw)] px-[calc(16px+0.75vw)] rounded-full outline-none bg-[#96969644] text-base text-white"
          />
          <input
            type="password"
            placeholder="password"
            className="w-full py-[calc(4px+0.75vw)] px-[calc(16px+0.75vw)] rounded-full outline-none bg-[#96969644] text-base text-white"
          />
          <button
            className="w-full py-[calc(4px+0.75vw)] px-[calc(16px+0.75vw)] rounded-full bg-blue-primary hover:bg-blue-hover text-base text-white
                      transition-all duration-300"
          >
            Log In
          </button>
          <p className="text-sm">
            회원이 아니신가요? &nbsp;
            <Link to="/">
              <span className="underline text-sm hover:text-blue-500 transition-all duration-300">
                회원가입하기
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
