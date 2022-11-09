import styled, { css } from 'styled-components';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';



export const HeroSection = styled.section`
height:100vh;
position:relative;
overflow:hidden;
max-height:1100px;
`
export const HeroWrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content: center;
align-items:center;
overflow:hidden;
position:relative;

`;
export const HeroSlide = styled.div`
z-index:1;
width:100%;
height:100%;
`;
export const HeroSlider = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
transition: cubic-bezier(0.895, 0.03, 0.685, 0.22);
align-items:center;
justify-content:center;

&::before{
    content:'';
    position:absolute;
    z-index:2;
    width:100%;
    height:100vh;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity:0.7;
    background: linear-gradient(207deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.7160390378548895) 58%,rgba(0,0,0,1) 88%);
};
`;
export const HeroImage = styled.img`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
object-fit:cover;
`;

export const HeroName = styled(Link)`
z-index:100;
text-decoration: none;
user-select:none;
position: absolute;
bottom:3rem;
color:white;
font-family: 'Arima Madurai', cursive;
text-decoration: none;
left: 3rem;
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
    left:0;
    bottom: 6rem;
    }
`;
export const TitleImage = styled(Link)`
z-index:100;
text-decoration: none;
font-size: clamp(0.3rem, 6vw,2rem);
position: absolute;
bottom:0;
color:white;
font-family: 'Arima Madurai', cursive;
text-decoration: none;
right: 1rem;
padding: 20px;

`;

export const SliderButtons = styled.div`
position:absolute;
bottom:50px;
right:25px;
display:flex;
z-index:10;
@media screen and (max-width:779px){
    display: none;
    }
`;

export const arrowButtons = css`
opacity:0;
width:100px;
height:50px;
color:#fff;
cursor:pointer;

padding:10px;

margin-right:1rem;
user-select:none;
transition:0.3s ease-in-out;

&:hover{
    opacity: 1;
    color:#cd853f;
    transform:scale(1.78);
}

`;

export const PrevArrow = styled(IoArrowBack)`
${arrowButtons}`;
export const NextArrow = styled(IoArrowForward)`
${arrowButtons}`;