import Image from "next/image";
import { CardWrapper, ImageCard } from "./styles";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Link from "next/link";


export default function MovieCard({ name, poster, runtime, movieId, release}) {
    return(
        <Link href={`/movies/${movieId}`}>
            <a style={{textDecoration: 'none'}}>
                <CardWrapper>
                    <ImageCard>
                        <Image src={`https://image.tmdb.org/t/p/w500${poster}`} width="230" height="283"/>
                    </ImageCard>
                    <div className="description">
                        <h2>{name}</h2>
                        <ul>
                            <li>{release.split('-')[0]}</li>
                            <li>
                                <AccessTimeOutlinedIcon />
                                {runtime} min
                            </li>
                        </ul>
                    </div>
                </CardWrapper>
            </a>
        </Link>
    )
}