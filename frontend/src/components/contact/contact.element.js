import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    &::before{
    content:'';
    position:absolute;
    width:100%;
    height:100vh;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity:0.9;
background: linear-gradient(3deg, rgba(255,255,255,0) 60%, rgba(0,0,0,1) 100%);

};
`;

export const FooterSubscribe = styled.section`
display:flex;
height: 100vh;
margin:0 auto;
left: 0;
bottom: 0;
right: 0;
top: 0;
justify-content: center;
backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.125);
position: absolute;
flex-direction: column;
color:#fff;
@media screen and (max-width: 960px){
    width:100%;
    margin:0 auto;

}
`;

export const FooterSubHeading = styled.div`
font-size:14px;
padding: 20px;
text-align: center;
h1{
    color: white;
    font-family: 'Noto Serif', serif;
    margin-bottom: 12px;
}
p{
    font-family: 'Questrial', sans-serif;
    font-size: 20px;
    margin: 0 auto;
    max-width: 700px;
}
`
    ;
export const FooterSubText = styled.div`
font-size:16px;
`;
export const Button = styled.button`
background:${({ primary }) => (primary ? '#0D121B' : '#212D45')};
border-radius:4px;
white-space:nowrap;
padding:${({ big }) => (big ? '12px 64px' : '10px 20px')};
color:#fff;
font-size:${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor:pointer;
margin-top:12px;
&:hover{
    transition: all 0.3s ease-out;
    background: #0D121B;
    background: ${({ primary }) => (primary ? '#0467FB' : '#0D121B')};
}
@media screen and (max-width: 960px){
    width:70%;
    margin:0 auto;

}
`;
export const ImageCont = styled.img`
    width: 100%;
    object-fit: cover;
    height: 100%;
`;

export const HeroName = styled(Link)`
z-index:100;
text-decoration: none;
user-select:none;
position: absolute;
top:3rem;
color:white;
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
    top:0;
    right:0;
    }
`;

export const TextArea = styled.textarea`
max-height:300px; 
min-height:50px; 
max-width: 400px;
min-width: 400px;
padding:10px 20px;
border-radius:2px;
margin-right:10px;
outline:none;
border:none;
font-size:20px;

&::placeholder{
    color:#242424;
}
@media screen and (max-width: 820px){
    margin: 0 0 16px 0;

}
`;
export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
margin: 12px auto;
max-width: 400px;
`
export const FormInput = styled.input`
padding:18px 20px;
border-radius:2px;
width: 100%;
font-size:20px;
max-width: 388px;
margin:12px auto;

outline:none;
border:none;
&::placeholder{
    color:#242424;
}
@media screen and (max-width: 780px){
    max-width: 400px;
    font-size:15px;

    /* width:100%; */
    /* margin: 0 0 16px 0; */

}
`