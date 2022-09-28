import styled from "@emotion/styled";

export const TopNavWrapper = styled.div`
    padding: 0 20px;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0px auto 5px auto;
    span:first-child{
        font-weight: bold;
        font-size: 18px;
    }
    a{
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