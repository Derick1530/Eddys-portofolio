import styled from "styled-components";

export const Container = styled.section`
width: 80%;

margin: 0 auto;
@media screen and (max-width:812px){
    background-color: black;
    width: 100%;
    height: 100%;
}

`;
export const WrapperElement = styled.div`
margin:4rem auto; 
width: 100%;
max-width: 1040px;
padding: 12px;
color: #4d4d4dde;
@media screen and (max-width:812px){
    margin:0 auto;
    color:white;
}
`;

export const Elements = styled.div`
display: flex;
@media screen and (max-width:812px){
    width: 100%;
    flex-direction: column;
}

`;

export const ImageContainer = styled.div`


max-width: 700px;
max-height: 700px;
min-width: 300px;
min-height: 200px;
@media screen and (max-width:768px){
    
}


`;

export const Image = styled.img`
width: 100%;
clip-path: polygon(4% 10%, 100% 0%, 75% 100%, 2% 91%);
object-fit: cover;
height: 100%;

`;

export const TextContainer = styled.div`

`;

export const TextElement = styled.div`
width: 100%;
padding:2rem;
h1{
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 44px;
    font-weight: bold;
@media screen and (max-width:812px){
    font-size: 24px;
}
}
p{
    font-family: 'Yanone Kaffeesatz', sans-serif;
    text-align: left;
    font-size: 35px;

    margin: 5rem auto;
    @media screen and (max-width:812px){
    font-size: 14px;
    margin:2rem auto;
}
}
h2{
    font-size: 48px;
    font-family: 'Cinzel', serif;
    @media screen and (max-width:812px){
    font-size: 34px;
    font-weight: 200;
    }
}

`;

