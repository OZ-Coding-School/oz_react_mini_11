import React from "react";
import { useAuth } from "../contexts/AuthContext";

function SocialLoginButtons() {
  const { loginWithProvider } = useAuth();

  return (
    <div className="mt-6 space-y-2">
      <button
        onClick={() => loginWithProvider("google")}
        className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Google로 로그인
      </button>
      <button
        onClick={() => loginWithProvider("kakao")}
        className="w-full py-2 px-4 bg-yellow-400 text-black rounded hover:bg-yellow-500"
      >
        Kakao로 로그인
      </button>
    </div>
  );
}

export default SocialLoginButtons;
