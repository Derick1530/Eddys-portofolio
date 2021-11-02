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

.slick-prev::before,
.slick-next::before{
    display: none;
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

.image0 {
  clip-path: polygon(46% 20%, 100% 0, 100% 100%, 0 77%, 11% 41%);

  
}
.image1 {
  clip-path: polygon(51% 16%, 100% 44%, 100% 93%, 35% 71%, 0 98%, 0 51%, 0 0);

  
}
.image2 {
  clip-path: polygon(60% 12%, 100% 0, 100% 100%, 44% 70%, 0 85%, 0 36%, 24% 36%);
  
}
.image3 {
  clip-path: polygon(59% 25%, 100% 28%, 100% 100%, 43% 61%, 0 64%, 0 13%, 26% 1%);
  
}
.image4 {
  clip-path: polygon(0 0, 70% 15%, 100% 59%, 0 90%);

}
.image5 {
  clip-path: polygon(52% 29%, 100% 11%, 100% 70%, 71% 57%, 0 75%, 0 38%, 17% 19%);
  
}
.image6 {
  clip-path: polygon(61% 25%, 100% 11%, 100% 84%, 43% 56%, 0 66%, 0 6%, 23% 16%);
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