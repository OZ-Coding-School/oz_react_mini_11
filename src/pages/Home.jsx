import MovieCard from "../components/MovieCard";
import SwiperCard from "../components/SwiperCard";
import MovieListdata from "../data/movieListData.json";
import { fetchMovies } from "../api/tmdb";
import { useEffect, useState } from "react";
import { useOutlet, useOutletContext } from "react-router-dom";

export default function Home() {
    const { allMovies, searchResultMovies, isSearching } = useOutletContext();
    // const moviesRender = searchResultMovies.length > 0 ? searchResultMovies : allMovies; //

    return (
        <>
            {!isSearching && (
                <>
                    <SwiperCard movies={allMovies} />
                    <div className="max-w-5xl mx-auto px-4 py-8">
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {allMovies.map((el) => (
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
            )}

            {isSearching && (
                <div className="max-w-5xl mx-auto px-4 py-8">
                    {searchResultMovies.length > 0 ? (
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {searchResultMovies.map((el) => (
                                <MovieCard
                                    key={el.id}
                                    id={el.id}
                                    movieImg={el.poster_path}
                                    title={el.title}
                                    rating={el.vote_average}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-400">검색 결과가 없습니다.</p>
                    )}
                </div>
            )}
        </>
    );
}
