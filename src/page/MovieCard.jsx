import { Link, useNavigate } from "react-router-dom";
import movieListData from "../data/movieListData.json"

const baseUrl = "https://image.tmdb.org/t/p/w500"

function MovieCard () {
    return(
        <>
            <div className="movie-grid">
                    {movieListData.results.slice(0,20).map(el => 
                    <div className="movie-card" key={el.id}>
                        <Link to='/panda'>
                            <img src={baseUrl+el.poster_path}/>
                            <MovieDetailed el={el}/>
                        </Link>
                    </div>
                )}    
                
            </div>
        </>
    );
};

function MovieDetailed ({el}) {
    const navigate = useNavigate();
    return(
        <div className = "movie-detail">
            <div className = "movie-title_average">
                <div>{el.title}</div>
                <div>평점 : {el.vote_average}</div>
                <button onClick={()=> {navigate('/detail')}}>MovieDetail</button>
            </div>
        </div>
    )
}
export default MovieCard;