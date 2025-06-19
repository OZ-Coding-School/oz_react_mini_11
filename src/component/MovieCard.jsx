import { Link } from "react-router-dom";
import RatingBar from "./RatingBar";

export default function MovieCard({ id, title, poster_path, vote_average }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <Link
      to={`/details/${id}`}
      className="bg-[#1c1c1c] rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300"
    >
      <img src={`${baseUrl}${poster_path}`} alt={title} className="w-full object-cover h-99"/>
      <h3>{title}</h3>
      <RatingBar score={vote_average} />
    </Link>
  );
}
