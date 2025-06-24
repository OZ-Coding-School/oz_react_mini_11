import { createContext, useState, useContext, useEffect } from "react";
import { getUserInfo } from "../utils/authUtils";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 컴포넌트 처음 렌더링 시 유저 정보 불러오기
  useEffect(() => {
    const initUser = async () => {
      const storedUser = localStorage.getItem("userInfo");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        const fetched = await getUserInfo();
        if (fetched) setUser(fetched);
      }
    };

    initUser();
  }, []);

  return (
    //하위 컴포넌트들이 user와 setUser에 접근할 수 있게 Provider로 감싸기
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
};

// 커스텀 훅
export const useUser = () => useContext(UserContext);
