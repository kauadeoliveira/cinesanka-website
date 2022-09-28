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
            <span>Category</span>
            <Button href="/movies">
                See all
                <ArrowForwardIosIcon fontSize="small"/>
            </Button>
            <Swiper
                slidesPerView={5}
                spaceBetween={50}
                slidesPerGroup={5}
                >
                <SwiperSlide>
                    <Link href="a">
                        <a>
                            <div>😂</div>
                            <span>Comedy</span>
                        </a>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="a">
                        <a>
                            <div>👻</div>
                            <span>Horror</span>
                        </a>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="a">
                        <a>
                            <div>😍</div>
                            <span>Romance</span>
                        </a>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="a">
                        <a>
                            <div>👨‍👩‍👧</div>
                            <span>Family</span>
                        </a>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="#">
                        <a>
                            <div>🧚‍♀️</div>
                            <span>Fantasy</span>
                        </a>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="#">
                        <a>
                            <div>🥺</div>
                            <span>Drama</span>
                        </a>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link href="#">
                        <a>
                            <div>🚔</div>
                            <span>Crime</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="#">
                        <a>
                            <div>🤴</div>
                            <span>History</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="#">
                        <a>
                            <div>💥</div>
                            <span>War</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="a">
                        <a>
                            <div>🧸</div>
                            <span>Animation</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="#">
                        <a>
                            <div>😱</div>
                            <span>Thriller</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="#">
                        <a>
                            <div>🤵</div>
                            <span>Action</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="#">
                        <a>
                            <div>👯</div>
                            <span>Music</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="#">
                        <a>
                            <div>🤠</div>
                            <span>Western</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="#">
                        <a>
                            <div>🦸‍♂️</div>
                            <span>Adventure</span>
                        </a>
                    </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Link href="#">
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