import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.section`
width: 80%;
position: relative;
margin: 0 auto;
color:#474747;

@media screen and (max-width:768px){
width: 100%;
color: white;
background-color: black;
}

`;
export const HeroName = styled(Link)`
z-index:100;
text-decoration: none;
user-select:none;
position: absolute;
top:3rem;
color:black;
font-family: 'Arima Madurai', cursive;
text-decoration: none;
right: 3rem;
padding: 20px;
h3{
    font-size: clamp(1.5rem, 2.5vw,3rem);
    font-weight: 400;
    text-transform:uppercase;

   
};

p{
    font-size: clamp(0.3rem, 2.5vw,1rem);
    font-weight: 400;
    margin-top:-0.5rem;
    text-transform:uppercase;
    letter-spacing: 12px;
    text-align: center;
};
@media screen and (max-width:779px){
    color:white;
    top:0;
    right:0;
    }
`;
export const ImageContainer = styled.div`
column-gap: 0;
columns:3;

img{
    width: 100%;
}
@media screen and (max-width:982px){
    columns:2;
};
@media screen and (max-width:600px){
    columns:1;
}
`;
export const Button = styled.button`
width: 100%;
cursor:pointer;
display: ${({ primary }) => (primary ? 'none' : '')};
margin:20px auto;
color: white ;
padding: 12px;
background-color: black;
@media screen and (max-width:600px){
    display: ${({ primary }) => (primary ? 'none' : '')};
    /* display: none; */
}
`;

export const TitleContainer = styled.div`
display: flex;
justify-content: start;
flex-direction: column;

h1{
    font-size: 50px;
    margin-top:4rem;
    padding: 12px;
    font-family: 'Cinzel', serif;
font-family: 'Josefin Sans', sans-serif;
    @media screen and (max-width:600px){
        font-size: 20px;
}
}
p{
    padding: 14px;
    font-size:24px;
    max-width: 700px;
    font-family: 'Questrial', sans-serif;
    @media screen and (max-width:600px){
        font-size: 18px;
    /* display: none; */
}
}
`;
