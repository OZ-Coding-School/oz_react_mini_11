export default function Join() {
  return (
    <>
      <div className="login join">
        <div>
          <h2>회원가입</h2>
          <form>
            <div>
              <div>
                <input type="text" name="id" placeholder="아이디를 입력하세요" />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  minLength={8}
                  placeholder="비밀번호 8자 이상"
                />
              </div>
            </div>
            <button type="submit">회원가입</button>
          </form>
        </div>
      </div>
    </>
  );
}
