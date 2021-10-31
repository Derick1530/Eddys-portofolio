import styled from "styled-components";
export const FooterSubscribe = styled.section`
display:flex;
width: 80%;
margin:0 auto;
max-width: 1040px;

justify-content: center;
background-color:  #bdb8b2;

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
    color: #0D121B;
    font-family: 'Noto Serif', serif;
    margin-bottom: 12px;
}
p{
    font-family: 'Noto Serif', serif;
    font-size: 20px;
    margin: 0 auto;
    max-width: 700px;
}
`
    ;
export const FooterSubText = styled.div`
font-size:20px;
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