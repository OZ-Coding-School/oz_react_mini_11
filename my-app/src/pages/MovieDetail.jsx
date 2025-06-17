import movieDetailData from "../assets/data/movieDetailData.json";
import { IMAGE_BASE_URL } from "../constants/image";
import "./MovieDetail.css";

function MovieDetail() {
    const {
        title,
        overview,
        genres,
        vote_average,
        poster_path,
    } = movieDetailData;

    return (
        <div className="detail-container">
            <div className="detail-poster">
                <img src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
            </div>
            <div className="detail-content">
                <div className="detail-header">
                    <div className="detail-name">
                        <h2>{title}</h2>
                    </div>
                    <span className="rating">⭐ {vote_average}</span>
                </div>
                <div className="detail-genres">
                    <strong>장르: </strong>
                    {genres.map((g) => g.name).join(", ")}
                </div>
                <div className="detail-overview">
                    <h2>줄거리</h2>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;