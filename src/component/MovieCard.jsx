import { Link } from "react-router-dom";

export default function MovieCard({ id, title, poster_path, vote_average }) {
    const baseUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <Link to={`/details/${id}`}>
            <img src={`${baseUrl}${poster_path}`} alt={title} />
            <h3>{title}</h3>
            <p>평점: {vote_average}</p>
        </Link>
    );
}