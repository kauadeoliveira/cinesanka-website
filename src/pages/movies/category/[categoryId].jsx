import ApiKey from "../../../shared/utils/ApiKey";

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
   const detailsResponse = detailsPromise

   const categoryMovies = []
   return {
      props: {detailsResponse}
   }
}

export async function getStaticPaths() {

}


export default function Category({ detailsResponse }) {
 return(
    <h1>Category</h1>
 )
}