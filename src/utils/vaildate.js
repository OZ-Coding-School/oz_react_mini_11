export function vaildateName(name) {
  const regex = /^[가-힣a-zA-Z0-9]{2,8}$/;
  if (!name) return "이름을 입력해주세요.";
  if (!regex.test(name)) return "2~8자, 한글/영어/숫자만 사용 가능";
  return "";
}

export function vaildateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "이메일을 입력해주세요.";
  if (!regex.test(email)) return "이메일 형식 사용";
  return "";
}

export function vaildatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!password) return "비밀번호를 입력해주세요.";
  if (!regex.test(password)) return "영어 대문자/소문자 + 숫자, 6자 이상";
  return "";
}

export function vaildateConfirmPassword(password, confirmPassword) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!confirmPassword) return "비밀번호를 다시한번 입력해주세요.";
  if (password !== confirmPassword) return "비밀번호가 일치하지 않습니다";
  return "";
}
