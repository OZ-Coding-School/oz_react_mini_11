import React from "react";
import { useAuth } from "../contexts/AuthContext";

function SocialLoginButtons() {
  const { loginWithProvider } = useAuth();

  const handleLogin = async (provider) => {
    try {
      await loginWithProvider(provider);
    } catch (err) {
      alert(`소셜 로그인 실패: ${err.message}`);
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-4">
      <button
        onClick={() => handleLogin("google")}
        className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Google 로그인
      </button>
      <button
        onClick={() => handleLogin("kakao")}
        className="w-full py-2 px-4 bg-yellow-400 text-black rounded hover:bg-yellow-500"
      >
        Kakao 로그인
      </button>
    </div>
  );
}

export default SocialLoginButtons;
