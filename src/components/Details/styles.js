import styled from "@emotion/styled";

export const WrapperPoster = styled.div`
    width: 100%;
    height: 270px;
    div{
        text-align: center;
        margin: auto;
        box-shadow: 0px 5px 15px 0px rgb(255 0 0);
        width: 200px;
        height: 270px;
    }
`

export const WrapperDetails = styled.div`
    margin: 30px 0;
    padding: 0 20px;
    width: 100%;

    h1{
        margin: 0;
    }

    .information{
        color: rgba(224,224,224,0.53);
        margin: 0;
        display: flex;
        list-style: none;
        gap: 20px;
        padding-inline-start: 0;
        font-size: 16px;
        
        & > li:nth-of-type(1), & > li:nth-of-type(2) {
            gap: 5px;
        }
        li{
            display: flex;
            align-items: center;
        }
        li > i {
            font-size: 12px;
            opacity: .8;
        }
        li > ul {
            color: #FFBA20;
            display: flex;
            list-style: none;
            padding-inline-start: 0;
        }
        svg{
            font-size: 16px
        }
    }
    .genres, .production-companies{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        font-size: 12px;
        padding-inline-start: 0;
        gap: 5px;
        margin: 0;
        span{
            color: #FFBA20;
            font-weight: bold;
        }

        & > li:not(:nth-last-of-type(1))::after{
            content: ',';
        }
        
    }

    .genres{
        a{
            text-decoration: none;
            color: white;
        }
    }

    button{
        gap: 5px;
        transition: all .2s;
        width: 150px;
    }
`