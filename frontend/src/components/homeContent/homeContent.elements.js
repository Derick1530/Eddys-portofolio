import styled from "styled-components";

export const Container = styled.section`

width: 80%;
border:1px solid red;
margin: 0 auto;
@media screen and (max-width:768px){
    width: 95%;
}

`;
export const WrapperElement = styled.div`

border:1px solid black;
padding: 12px;
`;

export const Elements = styled.div`

display: flex;

`;

export const ImageContainer = styled.div`
border:1px solid black;
width: 100%;
max-width: 700px;
max-height: 700px;
min-width: 400px;
min-height: 400px;

`;

export const Image = styled.img`
width: 100%;

height: 100%;
object-fit: cover;
`;

export const TextContainer = styled.div`

`;

export const TextElement = styled.div`
width: 100%;
padding:5rem;
h1{
    font-size: 44px;
}
p{
    
    text-align: left;
    font-size: 20px;
    margin: 5rem auto;
}
h2{
    font-size: 48px;
}

`;

