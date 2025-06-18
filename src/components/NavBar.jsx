export default function NavBar() {
    return (
        <>
            <div className="bg-slate-500 h-10 flex justify-between items-center">
                <div>
                    <img /> 로고
                </div>
                <input className="bg-white rounded-2xl w-72" type="text" />
                <div className="flex justify-end gap-3 pr-[1.875rem]">
                    <div> 로그인 </div>
                    <div> 회원가입 </div>
                </div>
            </div>
        </>
    );
}
