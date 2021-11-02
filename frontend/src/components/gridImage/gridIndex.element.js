import { style } from "@mui/system";
import styled from "styled-components";

export const Container = styled.section`

color: #4d4d4dde;

width: 100%;
max-width: 1040px;
margin: 0 auto;
@media screen and (max-width:876px){
width: 100%;
color: white;
background-color: black;

}

`;

export const ImageSrc = styled.img`
    max-width: 400px;
    z-index: 0;
    max-height: 400px;
    object-fit: cover;
    transition: transform 0.3s;
  &:hover{
    transform:scale(1.1); 
  }
    @media screen and (max-width:768px){
    margin:0;



}
`;



export const Location = styled.section`
z-index:1;
width: 80%;
height: 100%;
max-height: 200px;
color: white;
background-color: #84695A;
h2{

    padding: 12px;

}
p{
    padding: 14px 0;
    margin-left: 24px;
}

@media screen and (max-width:768px){
    width: 100%;

    
}


`;

export const ImageContainer = styled.div`
position: relative;
@media screen and (max-width:769px){
    
};
`;

export const ImagesCont = styled.div`

`;

export const TittleImage = styled.h2`
font-size:45px;
position: absolute;
bottom: 1rem;
font-family: 'Arima Madurai', cursive;
right: 0;

@media screen and (max-width:812px){
    font-size:28px;
    width: 90%;
    margin: 0 auto;
    backdrop-filter: blur(1px);
    color:white;
};
`;

export const TitleContainer = styled.div`

h1{
    font-size: 40px;
    padding: 20px;
    margin-left: 2rem;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    @media screen and (max-width:812px){
        font-size: 40px;
        font-weight: 200;
        text-align: center;
        padding: 4px;
        margin:0;
}
};
p{
    width: 650px;
    padding: 14px;
    margin-left: 2rem;
    font-size:30px;
    font-family: 'Yanone Kaffeesatz', sans-serif;

    @media screen and (max-width:769px){
        width: 300px;
        font-size: 14px;
    /* display: none; */
}
};
@media screen and (max-width:769px){
       color:white
    /* display: none; */}

`;
export const WrapperImages = styled.div`
column-gap: 12;
columns:1;
width: 100%;
margin-top:10px;
@media screen and (max-width:768px){
    height: 100% ;
    columns:1;
}
`;