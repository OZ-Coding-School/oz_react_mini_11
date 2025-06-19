import SearchMovie from "./SearchMovie";

export default function NavBar() {
    return (
        <>
            <div className="p-5 bg-neutral-900 h-25 flex justify-between items-center">
                <div className="">
                    <img className="" /> 로고
                </div>
                <SearchMovie />
                <div className="flex justify-end gap-3 pr-[1.875rem]">
                    <div> 로그인 </div>
                    <div> 회원가입 </div>
                </div>
            </div>
        </>
    );
}
