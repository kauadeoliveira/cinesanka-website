import Image from "next/image";
import Link from "next/link";
import { LinkStyle, MovieDetailsContainer } from "./styles";
import StarIcon from '@mui/icons-material/Star';

export default function TicketMovie({ data, details }) {
    const movieTest = data[0]
    const movieDetails = details[0]

    const imageUrl = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    return(
        <Link href="https://www.google.com/search?client=opera-gx&q=how+to+style+nextjs+Link+component&sourceid=opera&ie=UTF-8&oe=UTF-8">
            <a style={{textDecoration: 'none'}}>
                <MovieDetailsContainer>
                    <div>
                        <Image src={imageUrl} width="100" height="150"/>
                    </div>
                    <div></div>
                    <div>
                        <h1>{movieDetails.title}</h1>
                        
                        <span>
                            <StarIcon fontSize="small"/>
                            {movieDetails.vote_average}
                        </span>
                        <ul>
                            {movieDetails.genres.map(genre => {
                                return(
                                    <li key={genre.id}>{genre.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                </MovieDetailsContainer>
            </a>
        </Link>

    )
}