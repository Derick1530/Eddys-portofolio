import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
export const Nav = styled.nav`
    height:90px;
    display: flex;
    transition:0.4s;
    background:${({ isScroll }) => (isScroll ? '#2C271C' : 'transparent')};
    justify-content:left;
    padding:1rem 2rem;
    z-index:100;
    position:${({ primary }) => (primary ? 'inline' : 'fixed')};
    width:100%;
    @media screen and (max-width:768px){
        justify-content: right;
        height:60px;
        background:${({ isScroll }) => (isScroll ? '#2C271C' : 'transparent')};
    }
`;

export const NavLink = css`
color:white;
display:flex;
align-items:center;
height:100%;
cursor:pointer;
text-decoration:none;
padding: 0 10px;
`

export const NavMenuLinks = styled(Link)`
${NavLink};

font-size: 20px;
margin-top: ${({ isScroll }) => (isScroll ? '0' : '3rem')};
margin-left: ${({ isScroll }) => (isScroll ? '0' : '3rem')};
font-family: 'Arima Madurai', cursive;
&:hover{
    color:black;
    transition: 0.20s ease-in-out;

};

`;

export const MenuBars = styled(FaBars)`
display:none;
cursor:pointer;

@media screen and (max-width:768px){
    font-size:25px;
    color:white;
    display:block;
}
`;
export const NavMenu = styled.div`
display:flex;

@media screen and (max-width:768px){
    display:none;
}
`;