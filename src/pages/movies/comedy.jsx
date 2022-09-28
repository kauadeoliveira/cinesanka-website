import Header from "../../components/Header";
import MovieCard from "../../components/MovieCard";
import ApiKey from "../../shared/utils/ApiKey";
import { CardsWrapper } from "./styles";

export async function getServerSideProps(){
    const topRatedMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`);
    const popularMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`);

    const [topRatedMovies, popularMovies] = await Promise.all([
        topRatedMoviesResponse.json(),
        popularMoviesResponse.json()
    ])

    const movies = topRatedMovies.results.concat(popularMovies.results)

    const detailsFetch = await movies.map(movie => {
        return fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${ApiKey}&language=en-US/`)
        .then(response => response.json())
    })

    const detailsPromise = await Promise.all(detailsFetch)
    const details = detailsPromise;

    return {
        props: { movies, details }
    }
}

export function handleCategoryMovies(movies, category){
    const categoryMovies = [];
    movies.map(movie => {
        movie.genres.map(genre => {
            if(genre.name === category){
                categoryMovies.push(movie)
            }
        })
    })

    return categoryMovies
}

export default function Comedy({ movies, details }){
    const comedies = handleCategoryMovies(details, 'Comedy')
    console.log(comedies)
    return(
        <>
            <Header size="small"/>
            <CardsWrapper>
                {comedies.map(movie => {
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
