import Button from "../components/Button";

export default function Signup() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">회원가입</h1>
      <form className="flex flex-col space-y-2 p-2 mx-2 w-full max-w-[400px]">
        <div className="flex flex-col">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            placeholder="example@example"
            className="border-2 p-2 w-full rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">이름 </label>
          <input
            type="text"
            id="name"
            placeholder="2~8자 사이 숫자, 한글, 영어만 사용"
            className="border-2 p-2 w-full rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="대소문자와 숫자를 포함한 8자 이상"
            className="border-2 p-2 w-full rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password-confirmation">비밀번호 확인</label>
          <input
            type="password"
            id="password-confirmation"
            placeholder="대소문자와 숫자를 포함한 8자 이상"
            className="border-2 p-2 w-full rounded"
          />
        </div>
        <Button>회원가입</Button>
      </form>
    </div>
  );
}
