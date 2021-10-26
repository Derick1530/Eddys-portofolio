import styled from "styled-components";
export const FooterSubscribe = styled.section`
display:flex;
width: 80%;
margin:0 auto;
justify-content: center;
background-color:  #bdb8b2;
border-radius:20px;
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
p{
    
}
`
    ;
export const FooterSubText = styled.div`
font-size:20px;
`;
export const Button = styled.button`
background:${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
border-radius:4px;
white-space:nowrap;
padding:${({ big }) => (big ? '12px 64px' : '10px 20px')};
color:#fff;
font-size:${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor:pointer;
&:hover{
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
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
padding:10px 20px;
border-radius:2px;
margin:12px;
outline:none;
border:none;
&::placeholder{
    color:#242424;
}
@media screen and (max-width: 820px){
    /* width:100%; */
    /* margin: 0 0 16px 0; */

}
`