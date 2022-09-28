import { FormControl, IconButton, OutlinedInput } from '@mui/material';
import Header from '../components/Header'


import { Button, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { EffectCoverflow, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'


import "swiper/css";
import "swiper/css/effect-coverflow";
import styled from '@emotion/styled';
import Link from 'next/link';
import ApiKey from '../shared/utils/ApiKey'
import { CarouselContainer, LabelHoverEffect, MaskHoverEffect, Title } from './styles';
import TopNav from '../components/TopNav';
// Fetching data
export async function getServerSideProps() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US&page=1
  `)
  const data = await response.json()
  const results = await data.results

  return{
    props: {
      results: results
    }
  }
}

export default function Home({ results }) {
  const theme = useTheme()
  return (
  <>
    <Header size="large"/>
    <TopNav />
    <CarouselContainer>
        <Title>Em cartaz</Title>
        <Swiper 
            effect={"coverflow"}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectCoverflow]}
            className="mySwiper"
        >
            {results.map(movie => {
                const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                return(
                    <SwiperSlide key={movie.id} style={{textAlign: 'center'}}>
                      <MaskHoverEffect>
                        <LabelHoverEffect>Ver Detalhes</LabelHoverEffect>
                          <Link href={`/movies/${movie.id}`}>
                            <a>
                              <Image
                                src={imageUrl}
                                width='270'
                                height='330'
                                alt={`Capa do filme: ${movie.title}`
                              }
                              />
                            </a>
                          </Link>
                      </MaskHoverEffect>
                    </SwiperSlide>
                )
            })}

        </Swiper>

    </CarouselContainer>



  </>
)
}
