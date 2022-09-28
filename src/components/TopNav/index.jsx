import { Swiper, SwiperSlide } from "swiper/react";
import { TopNavWrapper } from "./styles";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function TopNav() {
    return(
        <TopNavWrapper>
            <Button href="/movies" className="button-see-all">
                See all
                <ArrowForwardIosIcon fontSize="small"/>
            </Button>
            <Swiper
                slidesPerView={5}
                spaceBetween={50}
                slidesPerGroup={5}
                >
                <SwiperSlide>
                    <Link href="/movies/category/comedy">
                        <a>
                            <div>😂</div>
                            <span>Comedy</span>
                        </a>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="/movies/category/horror">
                        <a>
                            <div>👻</div>
                            <span>Horror</span>
                        </a>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="/movies/category/romance">
                        <a>
                            <div>😍</div>
                            <span>Romance</span>
                        </a>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="/movies/category/family">
                        <a>
                            <div>👨‍👩‍👧</div>
                            <span>Family</span>
                        </a>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="/movies/category/fantasy">
                        <a>
                            <div>🧚‍♀️</div>
                            <span>Fantasy</span>
                        </a>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="/movies/category/drama">
                        <a>
                            <div>🥺</div>
                            <span>Drama</span>
                        </a>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="/movies/category/crime">
                        <a>
                            <div>🚔</div>
                            <span>Crime</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="/movies/category/history">
                        <a>
                            <div>🤴</div>
                            <span>History</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="/movies/category/war">
                        <a>
                            <div>💥</div>
                            <span>War</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="/movies/category/animation">
                        <a>
                            <div>🧸</div>
                            <span>Animation</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="/movies/category/thriller">
                        <a>
                            <div>😱</div>
                            <span>Thriller</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="/movies/category/action">
                        <a>
                            <div>🤵</div>
                            <span>Action</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="/movies/category/music">
                        <a>
                            <div>👯</div>
                            <span>Music</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="/movies/category/western">
                        <a>
                            <div>🤠</div>
                            <span>Western</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="/movies/category/adventure">
                        <a>
                            <div>🦸‍♂️</div>
                            <span>Adventure</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="/movies/category/science fiction">
                        <a>
                            <div>👨‍🚀</div>
                            <span>Science Fiction</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
            </Swiper>
        </TopNavWrapper>
    )
}