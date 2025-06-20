export default function Login() {
  return (
    <>
      <div className="login">
        <div>
          <h2>로그인</h2>
          <div>
            <p>계정으로 로그인</p>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
          </div>
          <button>로그인</button>
          <hr />
          <div className="kakao">
            <p>다른 계정으로 로그인</p>
            <button>카카오 계정 로그인</button>
          </div>
        </div>
      </div>
    </>
  );
}
