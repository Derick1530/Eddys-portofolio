import styled, { css } from 'styled-components';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';



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
    opacity:0.4;
    background:linear-gradient(0deg,
        rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.2) 50%,
        rgba(0,0,0,0.6) 100%,);
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
export const HeroContent = styled.div`
position:relative;
display: flex;
width: 90%;
justify-content: center;
align-items: center;
z-index:10;
border:1px solid black;
/* height: 40vh; */
max-width:1600px;
width:calc(100%-100px);
color:#fff;
h1 {
    width: 80%;
    font-size: clamp(0.3rem,8vw,4rem);
    font-weight: 400;
    text-transform:uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align:left;
    margin-bottom:0.8rem;

};
p{
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    font-size: clamp(1rem,1vw,2rem);
};
@media screen and (max-width:768px){
    display: inline;
    width: 90%;
}
`;
export const ButtonContact = styled.button`
position: absolute;
bottom: -5rem;
left: 3rem;
padding: 20px;
`;

export const SliderButtons = styled.div`
position:absolute;
bottom:50px;
right:25px;
display:flex;
z-index:10;
`;

export const arrowButtons = css`
width:50px;
height:50px;
color:#fff;
cursor:pointer;
background:#000d1a;
padding:10px;
border-radius:50px;
margin-right:1rem;
user-select:none;
transition:0.3s;

&:hover{
    background:#cd853f;
    transform:scale(1.05);
}

`;
export const PrevArrow = styled(IoArrowBack)`
${arrowButtons}`;
export const NextArrow = styled(IoArrowForward)`
${arrowButtons}`;