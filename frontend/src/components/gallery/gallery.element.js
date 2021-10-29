import styled from "styled-components";


export const Container = styled.section`
width: 80%;
margin: 0 auto;
@media screen and (max-width:768px){
width: 90%;

}

`;

export const ImageContainer = styled.div`
column-gap: 0;
columns:3;

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
color:#474747;
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
    margin: 24px auto;
    font-family: 'Questrial', sans-serif;
    @media screen and (max-width:600px){
        font-size: 18px;
    /* display: none; */
}
}
`;
