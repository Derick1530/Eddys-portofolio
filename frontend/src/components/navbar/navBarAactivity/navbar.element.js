import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
export const Nav = styled.nav`
    height:90px;
    display: flex;
    transition:0.4s;
    background:${({ isScroll }) => (isScroll ? '#2C271C' : 'transparent')};
    justify-content:space-between;
    padding:1rem 2rem;
    z-index:100;
    position:${({ primary }) => (primary ? 'inline' : 'fixed')};
    width:100%;
    @media screen and (max-width:768px){
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
padding: 0 1rem;
`

export const Logo = styled(Link)`
${NavLink}
color:white;
font-style:italic;
`
export const NavMenuLinks = styled(Link)`
${NavLink};
&:hover{
    border-bottom: 2px solid black;
    transition:0.2s;

};

`;
export const NavBtn = styled.div`
display:flex;
align-items:center;
margin-right:24px;
@media screen and (max-width:768px){
    display:none;
}
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

align-items:center;
margin-right: -48px;


@media screen and (max-width:768px){
    display:none;
}
`;