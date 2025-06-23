import { Link, useNavigate } from "react-router";
import Button from "./Button";
import SearchInput from "./SearchInput";
import useSearchParamStore from "../hooks/zustand/useSearchParamStore";
import DarkModeSwitch from "./DarkModeSwitch";
import useDarkModeStore from "../hooks/zustand/useIsDarkStore";
import { useEffect, useState } from "react";
import UserMenu from "./UserMenu";
import supabase from "../utils/supabase";
import type { Session } from "@supabase/supabase-js";

export default function Navbar() {
  const isDark = useDarkModeStore((state) => state.isDark);
  const navigate = useNavigate();
  const updateSearchParam = useSearchParamStore(
    (state) => state.updateSearchParam
  );
  const [session, setSession] = useState<Session | null>(null);

  const handleLogoClick = () => {
    updateSearchParam("");
    navigate("/");
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <header
      className={`z-50 flex flex-col items-start justify-between fixed top-0 w-full  gap-5 p-5 border-b-2 border-neutral-700 md:flex-row md:items-center ${
        isDark
          ? "bg-neutral-900 text-neutral-50"
          : "bg-neutral-50 text-neutral-900"
      }`}
    >
      <div
        className="text-4xl font-semibold hover:cursor-pointer"
        onClick={handleLogoClick}
      >
        Movie Wiki
      </div>
      <SearchInput
        className={`bg-neutral-50 text-neutral-900 rounded-full focus:outline-none px-3 py-1 w-[90%] md:flex-1 md:max-w-2xl ${
          isDark ? "" : "border-2 border-neutral-900"
        }`}
      />
      <div className="flex items-center justify-center space-x-2">
        <DarkModeSwitch />
        {session ? (
          <UserMenu />
        ) : (
          <>
            <Link to="/signup">
              <Button theme="outline">회원가입</Button>
            </Link>
            <Link to="/login">
              <Button theme="default">로그인</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
