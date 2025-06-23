import React from "react";
import { useAuth } from "../contexts/AuthContext";
import GoogleButton from "../assets/google_login.png";
import KakaoButton from "../assets/kakao_login.png";

function SocialLoginButtons() {
  const { loginWithProvider } = useAuth();

  return (
    <div className="space-y-3 mt-6">
      <img
        src={GoogleButton}
        alt="Sign in with Google"
        className="cursor-pointer w-full max-w-xs mx-auto"
        onClick={() => loginWithProvider("google")}
      />
      <img
        src={KakaoButton}
        alt="Sign in with Kakao"
        className="cursor-pointer w-full max-w-xs mx-auto"
        onClick={() => loginWithProvider("kakao")}
      />
    </div>
  );
}

export default SocialLoginButtons;
