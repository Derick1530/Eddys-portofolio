import styled from "styled-components";



export const Container = styled.div`
z-index: 100;
width: 100%;
margin: 0 auto 3rem;
box-sizing: content-box;

background-color: #F1EFEE;
`;
export const ContainerWrapper = styled.div`
width: 100% ;
margin:0 auto;
max-width: 1040px;
@media screen and (max-width:768px){
  margin: 0 auto 1rem;
}
`;

export const CardWrapper = styled.div`
padding-left: 2rem;
@media screen and (max-width:768px){
  padding-left: 1rem;
}
`;

export const Card = styled.div`
width: 100%;
height: 100%;
margin: 12px;
box-shadow: 1px 1px 7px rgba(0,0,0,0.2);
padding: 33px;

p{ 
  font-family: 'Noto Serif', serif;
    word-wrap: break-word;
    margin-top: 10px;
    margin-bottom: 20px;

    text-overflow: clip;
   
    
};
@media screen and (max-width:768px){
  padding: 12px;

}

`;
export const ImageContainer = styled.div`
width: 80px;
margin:0 auto;
margin-bottom: 2rem ;
border-bottom: 4px solid rgba(0,0,0,0.2);
@media screen and (max-width:768px){
  width: 80px;
}
`;
export const Image = styled.img`
width: 100%;
height: 5rem;
border-radius: 50%;
object-fit:cover;
@media screen and (max-width:768px){
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

padding-top: 12px;
h2{
  font-family: 'Cinzel', serif;
    white-space: nowrap; 
    font-size: 19px;
    font-weight: 500;
    text-overflow: clip;
    @media screen and (max-width:768px){
        font-size: 14px;
    font-weight: bold;
};    
}
p{
    white-space: nowrap; 
    font-family: 'Noto Serif', serif;
    margin-bottom: 18px;
    font-size:14px;
    text-overflow: clip;
    @media screen and (max-width:768px){
        font-size: 12px;
        font-weight: bold;
    }
    
}
`;
export const ImageStart = styled.img`
width: 70px;
height: 17px;
margin-top: 20px;
@media screen and (max-width:768px){
    width:80px;
    height: 22px;

    border:1px solid black;
    margin-right: 3rem;
}
`;
