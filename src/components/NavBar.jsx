import { Link } from "react-router-dom";
import SearchMovie from "./SearchMovie";
import { Suspense, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import UserMenu from "./UserMenu";

export default function NavBar() {
    const [user, setUser] = useState(null);

    //로그인 / 로그아웃
    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            setUser(data.user);
        });
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    return (
        <div className="bg-neutral-900 px-4 py-4 md:px-8 md:py-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <Link to="/" className="flex justify-center md:justify-start items-center">
                    <img src="/logo.png" alt="로고" className="w-28 h-auto cursor-pointer" />
                </Link>

                <div className="flex justify-center md:justify-center w-full md:w-[400px]">
                    <SearchMovie />
                </div>

                <div className="flex justify-center md:justify-end gap-4">
                    {user ? (
                        <>
                            <UserMenu logout={handleLogout} />
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hover:underline">
                                로그인
                            </Link>
                            <Link to="/signup" className="hover:underline">
                                회원가입
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
