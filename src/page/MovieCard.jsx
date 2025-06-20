import { Link } from "react-router-dom";
import movieListData from "../data/movieListData.json"

const baseUrl = "https://image.tmdb.org/t/p/w500"

function MovieCard () {
    return(
        <>
            <div className="movie-grid">
                <div className="movie-grid-grid">
                    {movieListData.results.slice(0,20).map(el => 
                    <div className="movie-card" key={el.id}>
                        <Link to='/panda'>
                            <img src={baseUrl+el.poster_path}/>
                            <MovieDetailed el={el}/>
                        </Link>
                    </div>
                )}    
                </div>
                
            </div>
        </>
    );
};

function MovieDetailed ({el}) {
    return(
        <div className = "movie-detail">
            <div className = "movie-title_average">
                <div>{el.title}</div>
                <div>평점 : {el.vote_average}</div>
            </div>
        </div>
    )
}
export default MovieCard;