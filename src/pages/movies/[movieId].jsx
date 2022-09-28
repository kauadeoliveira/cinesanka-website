import { Button, IconButton } from '@mui/material';
import Image from 'next/image';
import ApiKey from'../../shared/utils/ApiKey'
import { PlayButton, WrapperDetails, WrapperPoster } from './styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Details from '../../components/Details';



export async function getStaticProps(context) {
    const{ params } = context;
    const topRatedMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1 `);
    const popularMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`);

    const [topRatedMovies, popularMovies] = await Promise.all([
        topRatedMoviesResponse.json(),
        popularMoviesResponse.json()
    ])
    const dataMovies = topRatedMovies.results.concat(popularMovies.results)
    
    const movieDetails = await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${ApiKey}&language=en-US`).then(response => response.json())

    const movieVideos = await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}/videos?api_key=${ApiKey}&language=en-US`).then(response => response.json())

    return {
        props: {movieDetails, movieVideos, params}
    }
}


export async function getStaticPaths() {
    // GET MOVIES
    const topRatedMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1/`);
    const popularMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1/`);

    const [topRatedMovies, popularMovies] = await Promise.all([
        topRatedMoviesResponse.json(),
        popularMoviesResponse.json()
    ]);

    const dataMovies = topRatedMovies.results.concat(popularMovies.results);

    // GET DETAILS MOVIES
    const detailsFetch = await dataMovies.map(movie => {
        return fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${ApiKey}&language=en-US/`
        ).then(response => response.json())
    })
    const detailsPromise = await Promise.all(detailsFetch);
    const detailsResponse = detailsPromise

    const paths = detailsResponse.map(detailsMovie => {
        return{
            params: {
                movieId: `${detailsMovie.id}`
            }
        }
    })

    return{paths, fallback: false}
}


export default function Movie({ movieDetails, movieVideos, params}) {
    console.log(movieDetails)
    return(
        <>
        <Details details={movieDetails} videos={movieVideos.results} params={params}/>
        </>
    )
}


// 10 = 5
// 9 = 4.5
// 8 = 4
// 7 = 3.5
// 6 = 3
// 5 = 2.5
// 4 = 2
// 3 = 1.5
// 2 = 1
// 1 = 0