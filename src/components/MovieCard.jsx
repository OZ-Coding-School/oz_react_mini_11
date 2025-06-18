import { Navigate, useNavigate } from "react-router-dom";

export default function MovieCard({ id, title, rating, movieImg }) {
    const navigate = useNavigate();

    return (
        <>
            <div
                onClick={() => navigate(`details/${id}`)}
                className="bg-neutral-600 rounded-xl overflow-hidden 
                shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
                <div className=" w-full h-64 overflow-hidden ">
                    <img src={`https://image.tmdb.org/t/p/w500/${movieImg}`} alt={title} className="w-full h-full " />
                </div>
                <div className="p-4 flex flex-col justify-between h-20">
                    <h2 className="text-sky-50 text-lg font-semibold mb-1">{title}</h2>
                    <p className="text-amber-400 text-sm"> 평점 :{rating}</p>
                </div>
            </div>
        </>
    );
}
