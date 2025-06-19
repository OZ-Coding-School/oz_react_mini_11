import movieListData from "../data/movieListData.json"
import movieDetailData from "../data/movieDetailData.json"
const baseUrl = "https://image.tmdb.org/t/p/w500"

function MovieDetail () {
    return (
        <>
            <div className="movie-grid">
                {movieListData.results.slice(0,20).map(el => 
                    <div className="movie-card2" key={el.id}>
                        <img src={baseUrl+el.poster_path}/>
                        <MovieDetailed el={el}/>
                    </div>
                )}
            </div>
        </>
    )
}

function MovieDetailed ({el}) {
    
    return(
        <div className = "movie-detail">
            <div className = "movie-title_average2">
                <div>{el.title}</div>
                <div>평점 : {el.vote_average}</div>
            </div>
            <div className = "movie-genres">
                
                    <ul className="genre-list">
                        {movieDetailData.genres.map(el=>
                            <li key={el.id}>장르 {el.name}</li>
                        )}
                    </ul>
                    
            </div>
            <div className = "movie-overview">
                {el.overview}
            </div>
        </div>
    )
}
export default MovieDetail;