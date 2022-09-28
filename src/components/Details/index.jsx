import Image from "next/image"
import { WrapperDetails, WrapperPoster } from "./styles"
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

// Icons import
import EventIcon from '@mui/icons-material/Event';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';



import Link from "next/link";
import { Backdrop, Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export default function Details({ details, videos, params }) {
    // console.log(details)
    // console.log(videos)

    const [urlTrailer, setUrlTrailer] = useState(false)
    const [open, setOpen] = useState(false);
    const [playing, setPlaying] = useState()
    
    function handleUrlTrailer(videos) {
        const trailer = videos.find(video => video.type === 'Trailer' ? video : false)
        setUrlTrailer(`http//www.youtube.com/watch?v=${trailer.key}`)
    }
    useEffect(() => handleUrlTrailer(videos), [videos])

    function handleClose() {
        setOpen(false);
    }
    
    function handleToggle() {
        setOpen(!open)
    }


    function handleNumbersOfStars(scoreMovie) {
        const stars = parseInt(scoreMovie)/2;
        const numbersOfStarsCompleted = parseInt(stars);
        const numbersOfStarsEmpty = parseInt(5 - stars);
        const numbersOfStarsHalf = !Number.isInteger(stars) ? 1 : 0;

        return {stars, numbersOfStarsCompleted, numbersOfStarsHalf, numbersOfStarsEmpty}
    }

    function handleStarIcon(score, callback) {
        const numbersOfStars = callback(score);
        const starsCompleted = [];
        const starsHalf = [];
        const starsEmpty = [];

        for(let i = 0; i < numbersOfStars.numbersOfStarsCompleted; i++){
           starsCompleted.push(<li><StarIcon fontSize="52px"/></li>)
        }

        for(let i = 0; i < numbersOfStars.numbersOfStarsHalf; i++){
            starsHalf.push(<li><StarHalfIcon fontSize="12"/></li>)
        }

        for(let i = 0; i < numbersOfStars.numbersOfStarsEmpty; i++){
            starsEmpty.push(<li><StarOutlineIcon fontSize="12"/></li>)
        }

        return starsCompleted.concat(starsHalf).concat(starsEmpty)
    }

    return(

        <>
        <WrapperPoster>
            <div>
                <Image src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} width="200" height="270" />
            </div>
        </WrapperPoster>
        <WrapperDetails>
            <h1 title="Nome do Filme">{details.title}</h1>
            <ul className="information">
                <li title="Release">
                    <EventIcon />
                    {details.release_date.split('-')[0]}
                </li>
                <li title="Runtime">
                    <AccessTimeOutlinedIcon />
                    {details.runtime} min
                </li>
                <li title="IMDB">
                    {(details.vote_average).toFixed(1)}
                    <i>/10</i>
                </li>
                <li title={`IMDB: ${(details.vote_average).toFixed(1)}`}>
                    <ul>
                        {handleStarIcon(details.vote_average, handleNumbersOfStars)}
                    </ul>
                </li>
            </ul>

            <ul className="genres">
                <span>Genres:</span> 
                {details.genres.map(genre => {
                    return(
                        <li key={genre.id}>
                            <Link href="#">
                            <a>{genre.name}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <ul className="production-companies">
                <span>Production Companies: </span>
                {details.production_companies.map(companie => {
                    return(
                        <li key={companie.id}>{companie.name}</li>
                    )
                })}
            </ul>
            <p>{details.overview}</p>
            <Button variant="contained" onClick={handleToggle}>
                Trailer
                <PlayCircleOutlineIcon />
            </Button>

            <Backdrop open={open} onClick={handleClose}>
                <ReactPlayer
                    url={urlTrailer}
                    width="450px"
                    height="300px"   
                    controls={true}
                    loop={true}
                    playing={open ? true : false}
                    config={{
                        youtube: {
                            playerVars: {
                                origin: `http://localhost:3000/movies/${params.movieId}`,
                                enablejsapi: 1
                            }
                        }
                    }}
                />
            </Backdrop>
        </WrapperDetails>
        </>

    )
}