import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";


export const FooterContainer = styled.div`

background-color:#e7e7e7;
position: relative;
padding:2rem 0 1rem 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
img{
position: absolute;
    width: 100%;
    z-index: 0;
    height: 34vh;
    bottom: 0;
    opacity: 0.1;
    object-fit: cover;
}
`;

export const FooterLinksContainer = styled.div`
width:70%;
max-width:1500px;
margin:0 auto;
z-index:11;
display:flex;
justify-content:space-around;

@media screen and (max-width: 820px){
    display: inline;
    bottom: 5rem;
    flex-direction: row-reverse;
    width: 100%;
}

`

export const FooterLinksWrapper = styled.div`
display:flex;
@media screen and (max-width:820px){
    flex-direction:row;
};
`;

export const FooterLinkItems = styled.div`
display:flex;
border:1px solid red;

width: 100%;
flex-direction: column;

align-items: center;
margin:16px;
text-align:left;
box-sizing:border-box;
color:#fff;


@media screen and (max-width:989px){
    margin:0;
    padding:10px;
    width:100%;
}

`;
export const FooterLinkItemsContact = styled.div`
width: 100%;
text-align: right;
/* justify-content: flex-end; */
margin-left: 22px;

h1{
    
    @media screen and (max-width: 820px){
        
        margin-top: 2rem;
        font-size: 20px;
    
};
}
p{
    margin-top: 3rem;
    font-size: 25px;
    @media screen and (max-width: 820px){
        margin-top: 2rem;
        font-size: 16px;
        

    }
}

@media screen and (max-width: 820px){
    display: inline;
    width: 100%;
    text-align:left;
    
}
`

export const FooterLinkTitle = styled.h2`
margin-bottom:16px;
color:black;

font-size: 30px;
@media screen and (max-width:768px){
    font-size:27px;
}
`

export const FooterLink = styled(Link)`
text-decoration:none;
font-size: 34px;
border:1px solid red;
margin-bottom:0.5rem;
color:#fff;
&:hover{
    color:#0467fb;
    transition:0.3s ease-out;
}
@media screen and (max-width:768px){
    font-size:27px;
}
`;

export const SocialMedia = styled.section`
z-index:1;
width:100%;
bottom: 0;
`
    ;

export const SocialMediaWrapp = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
width:90%;

padding-top:9px;
background:#2C271C;
margin:10px auto 0 auto;
@media screen and (max-width:820px){

}
`;

export const SocialLogo = styled(Link)`
color:white;
justify-self:start;
cursor:pointer;
text-decoration:none;
font-size:1rem;
display:flex;

align-items:center;
margin-bottom:16px;
padding: 0 12px 0 12px;

`;

export const SocialIcon = styled(FaMagento)`
margin-right:10px;


`;
export const SocialIcons = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:240px;
padding: 0 12px 0 12px;
border-radius: 12px;
@media screen and (max-width:820px){
    width:100%;
    justify-content:space-around;
    padding: 12px;
 }

`
export const SocialIconLink = styled.a`
color:white;
font-size:24px;
`