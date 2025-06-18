import { TMDB_IMAGE_BASE_URL } from "../constants";

export default function MovieDetailCard({ movie }) {
    return (
        <>
            <div className="flex gap-4 p-5 ">
                <div className="w-100 h-[600px] overflow-hidden rounded-2xl">
                    <img src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`} className="w-full h-full" />
                </div>
                <div className="flex flex-col flex-2 gap-6 ">
                    <div className="flex justify-between items-center ">
                        <h2 className="text-2xl font-bold">타이틀 : {movie.title}</h2>
                        <p className="text-lg font-semibold">평점 : {movie.vote_average}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {movie.genres.map((el) => (
                            <span key={el.id} className="bg-gray-600 text-white text-sm px-3 py-1 rounded-full">
                                {el.name}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-1 text-x leading-relaxed">
                        <p> 줄거리 </p>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
