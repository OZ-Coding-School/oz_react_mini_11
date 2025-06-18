export default function Skeleton() {
    return (
        <div className="w-full py-20 text-center text-white animate-pulse">
            <h2 className="text-xl font-semibold mb-4">영화 목록 불러오는 중...</h2>
            <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-6">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-[270px] bg-gray-700 rounded-xl" />
                ))}
            </div>
        </div>
    );
}
