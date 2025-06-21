import { Link } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden bg-black sm:bg-auth bg-cover bg-center brightness-50" />
      <Link to="/">
        <div className="absolute px-[5vw] py-5 z-20 text-[calc(1vw+16px)] text-red-primary font-bold">
          <h1>OZMOVIE</h1>
        </div>
      </Link>
    </>
  );
}

export default AuthLayout;
