import styled from "@emotion/styled";

export const CarouselContainer = styled.div`
    .title{
        margin: auto;
        width: 270px;
    }
    
    h2{
        margin: 0px 0px 5px 0px;
        line-height: 15px;
        font-size: 16px;
    }
`
        
export const MaskHoverEffect = styled.div`
    width: 270px;
    height: 355px;
    background-color: transparent;
    margin: auto;
    position: relative;
    bottom: 32px;
    
    &:hover{
        background-color: black;
        img{
            opacity: .3;
        }

        &, img{
            transition: all .3s;
        }
    }
`

export const LabelHoverEffect = styled.span`
    display: block;
    border: 1px solid #fff;
    width: 100px;
    padding: 0 5px;
    margin: auto;
    font-size: 16px;

    position: relative;
    top: 175px;
`

export const WrapperComponent = styled.div`
    padding: 10px;

`