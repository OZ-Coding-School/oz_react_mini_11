export default function Login() {
  return (
    <>
      <div className="login">
        <div>
          <h2>로그인</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <p>이메일 계정으로 로그인</p>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="이메일을 입력하세요"
              />
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <button type="submit">로그인</button>
          </form>
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
