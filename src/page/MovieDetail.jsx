import React, {useState, useEffect} from 'react';
import movieData from '../../data/movieDetailData.json';
import './MovieDetail.css'

function MovieDetail() {
    const [movieDetail, setMovieDetail] = useState()

    useEffect(() => {
        setMovieDetail(movieData)
    }, [])

    if (!movieDetail) return <div>로딩 중...</div>;

    return (
    <div className='movie_page'>
        <img className='movie_img' src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}/>
        <div className='movie_info'>
            <div className='title_vote'>
                <h2 className='movie_title'>{movieDetail.title}</h2>
                <p className='movie_vote'>{movieDetail.vote_average}</p>
            </div>
            <p className='movie_genre'>{movieDetail.genres.map((g) => g.name).join(', ')}</p>
            <p className='movie_overview'>{movieDetail.overview}</p>
        </div>
    </div>
    )
    }

export default MovieDetail;