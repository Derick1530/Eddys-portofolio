import styled from "styled-components";

export const Container = styled.div`
    position:relative;
`;

export const Hero = styled.section`


`;
export const ImageContainer = styled.img`
width: 100%;
height: 100vh;

object-fit: cover;

`;

export const Item = styled.div`

backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.78);
    border: 1px solid rgba(255, 255, 255, 0.125);

position: absolute;
left:0;
bottom:0;
top:0;
margin:0 auto;
right: 0;

`;
export const Element = styled.div`
h2{
    font-family: 'Arima Madurai', cursive;
    color:white;
    padding: 12px;
}
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 70%;
margin:0 auto;
@media screen and (max-width:779px){
    width: 100%;
    }
`;