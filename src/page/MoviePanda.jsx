import movieListData from "../data/movieListData.json"
import movieDetailData from "../data/movieDetailData.json"
const baseUrl = "https://image.tmdb.org/t/p/w500"


function MoviePanda () {
    return (
        <>
            <div className="movie-grid3"> 
                <img src={baseUrl+movieListData.results[6].poster_path}/>
                <PandaDetail/>
            </div>
        </>
    )
}

function PandaDetail () {
    return (
        <div className="movie-detail3">
            <div className = "movie-title_average3">
                <div className="title">{movieDetailData.title}</div>
                <div className="average">{movieDetailData.vote_average}</div>
            </div>
            <div className = "movie-genres3">
                
                    <ul className="genre-list3">
                        {movieDetailData.genres.map(el=>
                            <li className="genre3" key={el.id}> {el.name}</li>
                        )}
                    </ul>
                    
            </div>
            <div className = "movie-overview3">
                줄거리 : {movieDetailData.overview}
            </div>
        </div>
    )
}
export default MoviePanda;