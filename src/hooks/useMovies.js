import { useEffect, useState } from "react";
import apiToken from "../../CallToken";

export default function useMovies() {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiToken}`
            }
        }

        fetch("https://api.themoviedb.org/3/movie/popular?language=ko-KR", options)
            .then(res => res.json())
            .then(data => {
                const filtered = data.results
                    ? data.results.filter(movie => movie.adult === false)
                    : []
                setMovies(filtered)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err)
                setIsLoading(false)
            })
    }, [])

    return { movies, isLoading, error }
}