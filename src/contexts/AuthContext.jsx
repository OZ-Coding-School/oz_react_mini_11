// src/contexts/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (profile) => setUser(profile);
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");
  };

  const loginWithEmail = async (email, password) => {
    return await supabase.auth.signInWithPassword({ email, password });
  };

  const loginWithProvider = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
    });
    if (error) console.error("소셜 로그인 실패:", error.message);
  };

  // 로그인 상태 유지 (세션 복원)
  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      const user = data?.session?.user;
      if (user) {
        setUser({
          email: user.email,
          name: user.user_metadata?.name || "소셜 유저",
          thumbnail: "https://i.pravatar.cc/40?u=" + user.email,
        });
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const user = session?.user;
        if (user) {
          setUser({
            email: user.email,
            name: user.user_metadata?.name || "소셜 유저",
            thumbnail: "https://i.pravatar.cc/40?u=" + user.email,
          });
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loginWithEmail, loginWithProvider }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
