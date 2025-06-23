import { useEffect, useState } from "react";

const validators = {
  name: {
    regex: /^[A-Za-z0-9가-힣]{2,8}$/,
    message: "2~8자 사이의 한글, 영문, 숫자만 입력 가능합니다.",
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "유효한 이메일 형식이 아닙니다.",
  },
  password: {
    regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message:
      "비밀번호는 최소 8자이며, 대문자·소문자·숫자를 모두 포함해야 합니다.",
  },
};

export const useValid = (text, textType, confirmText = "") => {
  const [validText, setValidText] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (textType === "passwordConfirm") {
      const valid = text === confirmText;
      setIsValid(valid);
      setValidText(valid ? "" : "비밀번호와 일치하지 않습니다.");
    } else {
      const type = validators[textType];
      if (!type) return;

      const valid = type.regex.test(text);
      setIsValid(valid);
      setValidText(valid ? "" : type.message);
    }
  }, [text, textType, confirmText]);

  return { isValid, validText };
};
