import styled from "@emotion/styled";

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 220px;
    height: 330px;
    color: #fff;
    margin-bottom: 10px;
    font-family: 'Jost', sans-serif;
    .description{
        display: flex;
        flex-direction: column;
        width: 100%;
        h2{
            margin: 0;
            font-size: 16px;
        }
        
        ul{
            color: rgba(224,224,224,0.53);
            margin: 0;
            display: flex;
            gap: 15px;
            font-size: 12px;
            margin-block: 0;
            padding-inline: 0;
            li{
                display: flex;
                align-items: center;
                gap: 5px;
            }
            svg{
                font-size: 12px;
            }
        }
    }
`

export const ImageCard = styled.div`
    height: 270px;
    width: 100%;
    img{
        border-radius: 15px;
    }
`