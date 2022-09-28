import styled from "@emotion/styled";

export const TopNavWrapper = styled.div`
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin: 10px auto 5px auto;
    .button-see-all{
        height: 30px;
        font-size: 12px;
        vertical-align: 40px;
        gap: 2px;
        transition: all .3s;
        &:hover{
            gap: 4px;
        }
        svg{
        font-size: 12px;
        }
    }
    .swiper-slide{
        text-align: center;
        height:80px;
        width: 130px;
        line-height: 12px;

        a{
            text-decoration: none;
            color: white;
        }
        div{
            line-height: 30px;
            font-size: 20px;
            padding: 5px;
            border-radius: 10px;
            margin: 5px auto;
            height: 30px;
            width: 30px;
            background-color: rgba(255, 255, 255, 0.07);
        }
        span{
            font-size: 12px;
        }
    }
`