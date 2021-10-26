import styled from "styled-components";
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
export const Foward = styled(IoArrowForward)`
color:white;
width:2rem;
height: 4rem;
`;
export const Next = styled(IoArrowBack)`
color:white;
width: 2rem;
height: 4rem;
`;
export const Container = styled.div`
height: 100vh;
position: relative;
h2{
    font-weight: 300;
    text-align: center;

}
`;
export const BuildinImage = styled.img`
width: 30%;
`;

export const BuildingContainer = styled.div`
width: 90%;
position: relative;
display: flex;


p{
    font-size: 16px;
    font-weight: 300;
}
`;


export const SliderContainer = styled.div`

padding: 12px;
max-width:400px;
min-width: 100px;
`;

export const SliderBtn = styled.div`
padding: 100px;
`;

export const Image = styled.img`
width: 100%;
max-width: 500px;
height: 50vh;

box-shadow: 0px 0px 16px rgba(0,0,0,0.9);
object-fit: cover;
@media screen and (max-width:987px){
    height: 20vh;
}
@media screen and (max-width:1024px){
    height: 20vh;
}
`;
export const ContainerElement = styled.div`
bottom:4rem;
left: 5%;
position: absolute;
width: 90%;
max-width: 100%;

`;
