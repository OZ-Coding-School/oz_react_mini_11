import React from 'react';
import movieList from '../../data/movieListData.json';
import '../page/Main.css';
import { Link, Route, Routes} from 'react-router-dom';
import MovieDetail from '../page/MovieDetail.jsx'

function MovieCard({movie}) {
    return (
        <div className='moviecard'>      
            <img className='movieimg' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            <h3 className='movietitle'>{movie.title}</h3>
            <p className='movieave'>평점: {movie.vote_average}</p>
        </div>
    )
}

function Main(){
    return (
        <>
        <Link to={'/details'} >
        <div className='moviebox'>
            {movieList.results.map((movie) => (
                <div key={movie.id} >
                <MovieCard movie={movie} />
                </div>
            ))}
        </div>
        </Link>
        </>
    )
}

export default Main