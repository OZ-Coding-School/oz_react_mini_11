import { useState } from "react";

export default function UserMenu({ logout }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <img src="" alt="User" />
                {isOpen && (
                    <div>
                        <div> 관심목록</div>
                        <div onClick={logout}> 로그아웃 </div>
                    </div>
                )}
            </div>
        </>
    );
}
