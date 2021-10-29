import styled from "styled-components";

export const Container = styled.section`
width: 100%;
padding:30px;


`;

export const WrappeElement = styled.div`
display: grid;
align-content: center;
grid-template-columns: repeat(2,1fr);
@media screen and (max-width:768px){
       display: block;
    }

`;
export const ElementContainer = styled.div`
align-items: center;
margin: 12px auto;
width: 99%;



@media screen and (max-width:668px){
    width:85%;
    }

`;

export const Title = styled.div`
text-align: center;
color:#4d4d4dde;
h1{
    font-family: 'Cinzel', serif;
font-family: 'Josefin Sans', sans-serif;
    font-size: 60px;
    margin-top: 12px;
    font-weight: 800;
    margin-bottom: 20px;
    @media screen and (max-width:768px){
    font-size: 24px;
    };
    
};
p{
    font-family: 'Hind Siliguri', sans-serif;
};


`;

export const Element = styled.div`

padding:12px;
display: flex;
@media screen and (max-width:768px){
    padding:9px;
    }
`;

export const Log = styled.div`

width: 50px;
min-height: 30px;
min-width: 30px;
height: 50px;

`;
export const Detail = styled.div`
width: 100%;
color:#4d4d4dde;

padding:9px;

h1{
    
    font-family: 'Cinzel', serif;

    @media screen and (max-width:768px){
        font-size: 16px;
        font-weight:300;
    }
};
p{
    font-family: 'Hind Siliguri', sans-serif;
    font-size: 14px;
    padding-top: 22px;

    @media screen and (max-width:768px){      
font-size: 12px;
font-weight:300;
}
}
`;
export const Image = styled.img`
border-radius: 5px;
width: 100%;
object-fit: cover;
`;

export const ElementCom = styled.div`

padding:5px;
@media screen and (min-width:768px){     
    margin:0 auto;
width: 70%;

}

`;