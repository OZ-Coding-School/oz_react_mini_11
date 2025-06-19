import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css'

function MovieDetail() {
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);

    useEffect(() => {
        const fetchMovieDetail = async () => {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
            },
            });

            const data = await res.json();
            setMovieDetail(data);
        } catch (error) {
            console.error('영화 상세 정보 로드 실패:', error);
        }};

        fetchMovieDetail();
    }, [id]);

    if (!movieDetail) return <div>로딩 중...</div>;

    return (
        <div className='movie_page'>
        <img
            className='movie_img'
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt={movieDetail.title}
        />
        <div className='movie_info'>
            <div className='title_vote'>
            <h2 className='movie_title'>{movieDetail.title}</h2>
            <p className='movie_vote'>{movieDetail.vote_average}</p>
            </div>
            <p className='movie_genre'>
            {movieDetail.genres.map((g) => g.name).join(', ')}
            </p>
            <p className='movie_overview'>{movieDetail.overview}</p>
        </div>
        </div>
    );
}

export default MovieDetail;