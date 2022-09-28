import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { CarouselContainer } from "./styles";


export default function Carousel({ data, title }) {
    return(
        <CarouselContainer>
            <h1>{title}</h1>
            <Swiper
            slidesPerView={3}
            spaceBetween={15}
            loop={true}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
                {data.map(movie => {
                    return(
                        <SwiperSlide key={movie.id}>
                            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width="200px" height="250px"/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </CarouselContainer>
    )
}