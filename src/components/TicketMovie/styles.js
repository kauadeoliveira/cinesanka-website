import styled from "@emotion/styled";
import Link from "next/link";

export const MovieDetailsContainer = styled.div`
    display: flex;
    margin: auto;
    width: 85%;
    height: 170px;
    justify-content: space-between;
    align-items: center;
    transition: all .3s;
    font-weight: bold;
    &:hover{
        scale: calc(1.05);

    div:nth-of-type(1), div:nth-of-type(3){
        box-shadow: 1px 2px 20px 0px #ff000038;
    }
    }

    
    div:nth-of-type(1){
        height: 100%;
        width: 30%;
        border-radius: 30px;
        img{
            border-radius: 15px;
        }
    }
    
    div:nth-of-type(2){
        right: 10px;
        width: 5%;
        height: 85%;
        z-index: 2;
    }
    
    div:nth-of-type(3){
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 30px;
        width: 65%;
        height: 100%;
        right: 25px;
        
        h1{
            color: white;
            font-size: 24px
        }
        span{
            display: inline-flex;
            color: #F5AC08;
            font-size: 16px;
            gap: 3px;
        }
        ul li{
            font-size: 12px;
            color: rgba(224,224,224,0.53)
        }

        h1, ul{
            margin: 5px
        }

    }
    div{
        position: relative;
        background-color: #414141;
        padding: 10px 15px;
        transition: all .3s;
    }

    ul{
        display: flex;
        gap: 5px;
        list-style: none;
        padding-inline-start: 0;
    }
`

export const LinkStyle = styled.a`
    text-decoration: none;
    color: #fff
`