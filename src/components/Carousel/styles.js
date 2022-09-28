import styled from "@emotion/styled";

export const CarouselContainer = styled.div`
    padding: 0 15px;
    height: 220px;
    margin-bottom: 30px;
    h1{
        margin: 0;
        font-size: 16px;
    }
    .swiper{
        height: 100%;
        &:hover{
            .swiper-pagination{
                visibility: visible;
            }
        }
    }

    .swiper-button-prev, .swiper-button-next{
        color: white;
        font-size: 5px;
        font-weight: bolder;
        transition: all .3s;
        &::after{
            font-size: 20px;
        }

        &:hover{
            scale: calc(1.5);
        }
    }

    .swiper-pagination{
        bottom: 0;
        visibility: hidden;

        .swiper-pagination-bullet{
            background-color: #fff;
        }
        .swiper-pagination-bullet-active{
            background-color: red;
        }
    }
`