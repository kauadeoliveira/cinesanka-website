import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

export const Title = styled.h2`
    margin: 0;
    line-height: 15px;
    margin-left: 110px;
    font-size: 16px;
`

export const CarouselContainer = styled(Box)`
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