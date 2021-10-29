import { style } from "@mui/system";
import styled from "styled-components";

export const Container = styled.section`
width: 80%;
margin: 0 auto;
@media screen and (max-width:876px){
width: 90%;

}

`;

export const ImageSrc = styled.img`

    margin-top:100px;
    max-height: 400px;
    @media screen and (max-width:768px){
    margin:0;


}
`;

export const ImagesCont = styled.div`

margin-top:10px;

@media screen and (max-width:768px){
    height: 100% ;
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
column-gap: 12;
columns:2;

@media screen and (max-width:769px){
    columns:1;
};
`;

export const TitleContainer = styled.div`

color: #4d4d4dde;

h1{
    font-size: 40px;
    padding: 20px;
    margin-left: 2rem;
    font-family: 'Cinzel', serif;
font-family: 'Josefin Sans', sans-serif;
    @media screen and (max-width:769px){
        font-size: 40px;
        text-align: center;
        padding: 4px;
        margin:0;
}
}
p{
    width: 500px;
    padding: 14px;
    margin-left: 2rem;
    font-size:17px;
    font-family: 'Questrial', sans-serif;

    @media screen and (max-width:769px){
        width: 300px;
        font-size: 12px;
    /* display: none; */
}
}
`;
export const WrapperImages = styled.div`
`;