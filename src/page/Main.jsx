import React, { useEffect } from 'react';
import '../page/Main.css';
import { Link, Route, Routes} from 'react-router-dom';
import MovieDetail from '../page/MovieDetail.jsx'
import { useState } from 'react';


function MovieCard({ movie }) {
    return (
        <div className='moviecard'>      
            <img className='movieimg' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3 className='movietitle'>{movie.title}</h3>
            <p className='movieave'>평점: {movie.vote_average}</p>
        </div>
    );
}

function Main() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/popular', {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
                    }
                });

                const data = await response.json();
                const filtered = data.results.filter(movie => movie.adult === false);
                setMovies(filtered);
            } catch (error) {
                console.error('영화 데이터를 불러오는 데 실패했습니다:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <>
            <div className='moviebox'>
                {movies.map((movie) => (
                    <Link to={`/details/${movie.id}`} key={movie.id}>
                        <MovieCard movie={movie} />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Main;