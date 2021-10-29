import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html,body{
    background-color:#f5f4f2;
    overflow-x:hidden;
}

.slick-prev,.slick-next{
    display: flex;
    width: 70px;
    height: 100px;
    align-items: center;
    justify-content: center;
    z-index: 2;

    @media screen and (max-width:786px){
        width: 20px;
        height: 50px;
    };
}

.slick-next{
    right: 0;
    border-radius: 20px 0px 0px 20px ;
}
.slick-next:hover{
    background-color: black;
}
.slick-prev{
    border-radius: 0px 20px 20px 0px ;
    left: 0;
}
.slick-prev:hover{
    background-color: black;
}
.slick-prev::before,
.slick-next::before{
    display: none;
}
.custom-indictor {
    bottom: -45px;

}
.custom-indictor:hover{
border:1px solid black;
}

.my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 30px; /* gutter size */
  background-clip: padding-box;
}

/* Style your items */
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
  background: grey;
  margin-bottom: 30px;
}

.image {
  display: block;
  width: 100%;
}


`;


// export const Container = styled.div`
// width:100%;
// max-width:1000px;
// z-index:1;
// margin-right:50px;
// margin-left:auto;
// padding-right:50px;
// padding-left:50px;

// @media screen and(max-width:991px){
//     padding-right:20px;
//     padding-left:30px;
// }
// `;

export const Button = styled(Link)`
background: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')};
white-space:non-wrap;
outline:none;
border:none;
border-radius:15px;
min-width:100px;
max-width:200px;
cursor:pointer;
text-decoration:none;
transition:0.3s;
display:flex;
justify-content:center;
padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
color: ${({ primary }) => (primary ? '#fff' : "#000d1a")};
font-size: ${({ big }) => (big ? ' 20px' : '14px')};
&:hover {
    transform:translateY(-2px);
}
`;


export default GlobalStyles