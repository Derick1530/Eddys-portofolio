import styled from "styled-components";

export const Container = styled.div`
z-index: 100;
width: 80%;
margin: 0 auto;
`;
export const ContainerWrapper = styled.div`

display: flex;
flex-direction: row;
@media screen and (max-width:986px){
  flex-direction: column ;
}
`;

export const CardWrapper = styled.div`

`;

export const Card = styled.div`
margin: 12px;
box-shadow: 1px 1px 7px rgba(0,0,0,0.2);
padding: 33px;

p{ 
    word-wrap: break-word;
    margin-top: 10px;
    font-weight: 200;
    margin-bottom: 20px;

    text-overflow: clip;
   
    
};
@media screen and (max-width:986px){
  padding: 12px;
}

`;
export const ImageContainer = styled.div`
width: 140px;
margin:0 auto;
margin-bottom: 2rem ;
border-bottom: 4px solid rgba(0,0,0,0.2);
@media screen and (max-width:986px){
  width: 80px;
}
`;
export const Image = styled.img`
width: 100%;
height: 9rem;
border-radius: 50%;
object-fit:cover;
@media screen and (max-width:986px){
 height:5rem ;
}
`;
export const Footer = styled.div`
display: flex;

align-items: center;
justify-content:space-between;
width: 100%;
height: 4rem;
`;

export const Details = styled.div`
border-top: rgba(0,0,0,0.2) 2px solid;
padding-top: 12px;
h2{
    white-space: nowrap; 
    font-size: 23px;
    font-weight: 500;
    text-overflow: clip;
    @media screen and (max-width:986px){
        font-size: 14px;
    font-weight: bold;
};    
}
p{
    white-space: nowrap; 
    
    font-weight: 300;
    margin-bottom: 20px;
    text-overflow: clip;
    @media screen and (max-width:986px){
        font-size: 12px;
        font-weight: bold;
    }
    
}
`;
export const ImageStart = styled.img`
width: 100px;
height: 20px;
@media screen and (max-width:986px){
    width:78px;
    height: 16px;
}
`;
