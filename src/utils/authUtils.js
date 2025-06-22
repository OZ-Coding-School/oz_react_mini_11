import { supabase } from "../constant/supabaseClient";

//Supabase에서 현재 로그인된 유저정보를 가져와 localStorage에저장, 호출한곳에 정보를 반환
export const getUserInfo = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) return null;

    const user = data.user;

    const userInfo = {
      id: user.id,
      email: user.email,
    };

    // localStorage에 저장
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    return userInfo;
  } catch (err) {
    console.error("유저 정보 가져오기 실패", err);
    return null;
  }
};
