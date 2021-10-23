import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";
export const FooterContainer = styled.div`
background-color:#1015522;
padding:4rem 0 2rem 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const FooterSubscribe = styled.section`
display:flex;
flex-direction:column;
align-items:center;
margin-bottomL24px;
padding:24px;
color:#fff;
`;

export const FooterSubHeading = styled.p`
margin-bottom:24px;
font-size:24px;
color:black;
`
    ;
export const FooterSubText = styled.p`
margin-bottom:24px;
font-size:20px;
`;
export const Button = styled.button`
background:${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
border-radius:4px;
white-space:nowrap;
paddin:${({ big }) => (big ? '12px 64px' : '10px 20px')};
color:#fff;
font-size:${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor:pointer;

$:hover{
    transation: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
}
@media screen and (max-width: 960px){
    width:100%;

}
`;
export const Form = styled.form`
display:flex;
justify-content:center;
align-items:center;
@media screen and (max-widht:828px){
    flex-direction:column;
    width:80%;

}
`
export const FormInput = styled.input`
padding:10px 20px;
border-radius:2px;
margin-right:10px;
outline:none;
border:none;
font-size:16px;
border: 1px solid black;
&::placeholder{
    color:#242424;
}
@media screen and (max-width: 820px){
    width:100%;
    margin: 0 0 16px 0;

}
`
export const FooterLinksContainer = styled.div`
width:100%;
max-whidth:1000px;
display:flex;
justify-content:center;

@media screen and (max-width: 820px){
    padding-top:32px;
}

`

export const FooterLinksWrapper = styled.div`
display:flex;
@media screen and (max-width:820px){
    flex-direction:column;
}
`
    ;

export const FooterLinkItems = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
margin:16px;
text-align:left;
width:160px;
box-sizing:border-box;
color:#fff;

@media screen and (max-width){
    margin:0;
    padding:10px;
    width:100%;
}

`;

export const FooterLinkTitle = styled.h2`
margin-bottom:16px;
color:black;
`

export const FooterLink = styled(Link)`
text-decoration:none;
margin-bottom:0.5rem;
color:#fff
&:hover{
    color:#0467fb;
    transaction:0.3s ease-out;
}
`;

export const SocialMedia = styled.section`
max-widht:1000px;
width:100%;

`
    ;

export const SocialMediaWrapp = styled.div`
display: flex
justify-content:space-between;
align-items:center;
width:90%;
max-width:1000px;
margin:40px auto 0 auto;
@media screen and (max-width:820px){
    flex-direction:column;
}
`;

export const SocialLogo = styled(Link)`
color:black;
justify-self:start;
cursor:pointer;
text-decoration:none;
font-size:2rem;
display:flex;
align-items:center;
margin-bottom:16pxl

`

export const SocialIcon = styled(FaMagento)`
margin-right:10px;


`

export const WebsiteRights = styled.small`
color:black;
margin-right:10px;


`
export const SocialIcons = styled(FaMagento)`
display:flex;
justify-content:space-between;
align-items:center;
margin-right:10px;
width:240px;

`
export const SocialIconLink = styled.a`
color:black;
font-size:24px;

`