import { Link, Navigate, useNavigate } from "react-router-dom";
import { TMDB_IMAGE_BASE_URL } from "../constants";

export default function MovieCard({ id, title, rating, movieImg }) {
    const navigate = useNavigate();

    return (
        // navigate 사용으로 페이지 이동
        // <>
        //     <div
        //         onClick={() => navigate(`/details/${id}`)}
        //         className="bg-neutral-600 rounded-xl overflow-hidden
        //         shadow-md hover:scale-105 transition-transform cursor-pointer"
        //     >
        //         <div className=" w-full h-64 overflow-hidden ">
        //             <img src={`${TMDB_IMAGE_BASE_URL}${movieImg}`} alt={title} className="w-full h-full " />
        //         </div>
        //         <div className="p-4 flex flex-col justify-between h-20">
        //             <h2 className="text-sky-50 text-lg font-semibold mb-1">{title}</h2>
        //             <p className="text-amber-400 text-sm"> 평점 :{rating}</p>
        //         </div>
        //     </div>
        // </>

        // Link 사용으로 페이지 이동
        <>
            <Link to={`/details/${id}`} className="black">
                <div className="relative rounded-xl overflow-hidden shadow-md transition-transform cursor-pointer group">
                    <img
                        src={`${TMDB_IMAGE_BASE_URL}${movieImg}`}
                        alt={title}
                        className="w-full h-72 object-contain scale-110 group-hover:scale-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                    />
                    <div
                        className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black via-black/100 to-black/5
                         text-white transform transition-all duration-150 
                         translate-y-full opacity-0 
                         group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <h2 className="text-lg font-semibold mb-1">{title}</h2>
                        <p className="text-xs text-amber-400 text-right">평점: {Number(rating).toFixed(2)}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
