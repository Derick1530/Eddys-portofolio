import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Montserrat',sans-serif;
}
html,body{
    background-color:#f5f4f2;
    overflow-x:hidden;
}
`;

export default GlobalStyles