import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";


export const HeaderContainer = styled.div`
    display: flex;
    background-color: transparent;
    z-index: 1;
    justify-content: space-between;
    text-align: center;
    margin: 5px auto;
    width: 100%;
    font-size: ${({ size }) => size === 'large'? '20px' : '12px'};
    h1{
        margin: 0;
        text-align: start;
        font-family: 'Combo', cursive;
    }
`

export const DinamicSearchBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    height: 40px;
    justify-content: flex-end;
    & > button{
        display: ${({ animation }) => animation ? 'none' : 'block'};
        margin: 0;
    }
    .MuiFormControl-root{
        display: ${({ animation }) => animation ? 'block' : 'none'};
        margin: 0;
        width: 50%;
        animation: ${({ animation }) => {
            if(animation){
                return 'searchbar-animation .5s forwards'
            }
        }};
    }

    @keyframes searchbar-animation {
        20%{
            width: 60%;
        }
        40%{
            width: 70%;
        }
        60%{
            width: 80%;
        }
        80%{
            width: 90%;
        }
        100%{
            width: 100%;
        }

    }
`

