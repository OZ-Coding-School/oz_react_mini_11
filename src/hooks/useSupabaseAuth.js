import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export function useSupabaseAuth() {
  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) console.error("Google 로그인 실패:", error.message);
  };

  const loginWithKakao = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
    });
    if (error) console.error("Kakao 로그인 실패:", error.message);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("userInfo");
    window.location.reload();
  };

  const getUserInfo = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const user = session?.user;
    if (user) {
      const { name, email, picture } = user.user_metadata;
      const userInfo = {
        name,
        email,
        thumbnail: picture,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      return userInfo;
    }
    return null;
  };

  return {
    loginWithGoogle,
    loginWithKakao,
    logout,
    getUserInfo,
  };
}
