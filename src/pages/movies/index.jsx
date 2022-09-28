


import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";
import TopNav from "../../components/TopNav";
// import MovieCard from "../../components/MovieCard";
import ApiKey from "../../shared/utils/ApiKey";
import { CardsWrapper, MoviesContainer } from "./styles";

export async function getServerSideProps() {
    const topRatedMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`);
    const popularMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`);
    const [topRatedMovies, popularMovies] = await Promise.all([
        topRatedMoviesResponse.json(),
        popularMoviesResponse.json()
    ]);
    const dataMovies = topRatedMovies.results.concat(popularMovies.results);
    

    const detailsFetch = await dataMovies.map(movie => {
        return fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${ApiKey}&language=en-US`)
        .then(response => response.json())
    });
    const detailsPromise = Promise.all(detailsFetch);
    const detailsMovies = await detailsPromise;


    return{
        props: {
            dataMovies: dataMovies,
            detailsMovies: detailsMovies
        }
    }
}


export default function Movies({ detailsMovies }) {
    return(
        <>
        <Header size="small" />
        <CardsWrapper>    
            {detailsMovies.map(movie => {
                return(
                    <MovieCard
                        name={movie.title}
                        poster={movie.poster_path}
                        runtime={movie.runtime}
                        movieId={movie.id}
                        release={movie.release_date}
                        key={movie.id}
                    />
                )
                })
            }
        </CardsWrapper>
        </>
    )
}