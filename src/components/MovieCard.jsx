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
                <div
                    className="bg-neutral-600 rounded-xl overflow-hidden 
                shadow-md hover:scale-105 transition-transform cursor-pointer"
                >
                    <div className="group w-full h-64 overflow-hidden ">
                        <img
                            src={`${TMDB_IMAGE_BASE_URL}${movieImg}`}
                            alt={title}
                            className="w-full h-full object-cover transition-all duration-300 grayscale group-hover:grayscale-0"
                        />
                    </div>
                    <div className="p-4 flex flex-col justify-between h-20 opacity-50">
                        <h2 className="text-sky-50 text-lg font-semibold mb-1">{title}</h2>
                        <p className="text-amber-400 text-sm"> 평점 :{Number(rating).toFixed(2)}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
