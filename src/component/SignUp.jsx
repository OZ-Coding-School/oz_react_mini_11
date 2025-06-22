import Input from "./Input";

export default function SignUp() {
  return (
    <>
      <div className="login join">
        <div>
          <h2>회원가입</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                label="이름"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <Input
                label="이메일"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="이메일을 입력하세요"
              />
              <Input
                label="비밀번호"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                placeholder="비밀번호를 입력하세요"
              />
              <Input
                label="비밀번호 확인"
                name="password2"
                type="password"
                value={formData.password2}
                onChange={handleChange}
                error={errors.password2}
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <button type="submit">회원가입</button>
          </form>
        </div>
      </div>
    </>
  );
}
