import axios from 'axios';

const popularData = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_ACCESS_KEY}`
    }
});

export default popularData;