import Header from "../../../components/Header";
import MovieCard from "../../../components/MovieCard";
import ApiKey from "../../../shared/utils/ApiKey";
import { CardsWrapper } from "../styles";


export async function getStaticProps(context){
   const{params} = context;

   const topRatedMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1 `);
   const popularMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`);

   const [topRatedMovies, popularMovies] = await Promise.all([
      topRatedMoviesResponse.json(),
      popularMoviesResponse.json()
   ])

   const movies = topRatedMovies.results.concat(popularMovies.results)

   const detailsFetch = movies.map(movie => {
      return fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${ApiKey}&language=en-US`)
      .then(response => response.json());
   })

   const detailsPromise = await Promise.all(detailsFetch); 
   const details = detailsPromise

   const categoryMovie = []
   details.filter(movie => {
      movie.genres.map(genre => {
         if(genre.name.toLowerCase() === params.categoryId){
            categoryMovie.push(movie)
         }
      })
   })

   return {
      props: {categoryMovie, params}
   }
}

export async function getStaticPaths() {
   const topRatedMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1 `);
   const popularMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`);

   const [topRatedMovies, popularMovies] = await Promise.all([
      topRatedMoviesResponse.json(),
      popularMoviesResponse.json()
   ])

   const movies = topRatedMovies.results.concat(popularMovies.results)

   const detailsFetch = movies.map(movie => {
      return fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${ApiKey}&language=en-US`)
      .then(response => response.json());
   })

   const detailsPromise = await Promise.all(detailsFetch); 
   const details = detailsPromise;

   const categories = []

   details.map(movie => {
      movie.genres.map(genre => {
         if(!categories.includes(genre.name.toLowerCase())){
            categories.push(genre.name.toLowerCase())
         }
      })
   })

   const paths = categories.map(category => {
      return{
         params: {
            categoryId: `${category}`
         }
      }
   })

   return{paths, fallback: false}
}


export default function Category({ categoryMovie, params }) {
   function toCapitalize(string){
      const firstLetter = string.charAt(0).toUpperCase()

      return firstLetter + string.slice(1)
   }

   console.log()
 return(
    <>
      <CardsWrapper>
         <h1 style={{margin: 0}}>
            {toCapitalize(params.categoryId)}
         </h1>
         {categoryMovie.map(movie => {
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