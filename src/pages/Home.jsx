import MovieCard from "../components/MovieCard";
import SwiperCard from "../components/SwiperCard";
import MovieListdata from "../data/movieListData.json";
import { fetchMovies } from "../api/tmdb";
import { useEffect, useState } from "react";
import { useOutlet, useOutletContext } from "react-router-dom";

export default function Home() {
    const { allMoives, setAllMoives } = useOutletContext();

    return (
        <>
            <SwiperCard movies={allMoives} />
            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                    {allMoives.map((el) => (
                        <MovieCard
                            key={el.id}
                            id={el.id}
                            movieImg={el.poster_path}
                            title={el.title}
                            rating={el.vote_average}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
