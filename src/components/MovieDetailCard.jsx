import { TMDB_IMAGE_BASE_URL } from "../constants";

export default function MovieDetailCard({ movie }) {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-6 p-5">
                <div className="w-full md:w-[300px] max-h-[500px] overflow-hidden rounded-2xl mx-auto md:mx-0">
                    <img
                        src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col flex-1 gap-6">
                    <div className="flex flex-col sm:flex-row justify-between gap-2 sm:items-center">
                        <h2 className="text-xl md:text-2xl font-bold break-keep">타이틀 : {movie.title}</h2>
                        <p className="text-base md:text-lg font-semibold">
                            평점 : {Number(movie.vote_average).toFixed(2)}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {movie.genres.map((el) => (
                            <span key={el.id} className="bg-gray-600 text-white text-sm px-3 py-1 rounded-full">
                                {el.name}
                            </span>
                        ))}
                    </div>

                    <div className="leading-relaxed text-sm md:text-base whitespace-pre-line">
                        <p className="font-semibold mb-2">줄거리</p>
                        <p>{movie.overview || "줄거리 정보가 없습니다."}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
