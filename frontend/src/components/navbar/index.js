import React, { useState } from 'react';
import styled, { css } from "styled-components/macro";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom"
import { menuData } from '../../data/menuData';
import { Button } from '../Button';
import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
    height:60px;
    display: flex;
    transition:0.4s;
    background:${({ isScroll }) => (isScroll ? '#0467FB' : 'transparent')};
    justify-content:space-between;
    padding:1rem 2rem;
    z-index:100;
    position:fixed;
    width:100%;
    @media screen and (max-width:768px){
        background:${({ isScroll }) => (isScroll ? '#0467FB' : 'transparent')};
    }
`;

const NavLink = css`
color:white;
display:flex;
align-items:center;
height:100%;
cursor:pointer;
text-decoration:none;
padding: 0 1rem;
`

const Logo = styled(Link)`
${NavLink}
color:white;
font-style:italic;
`
const NavMenuLinks = styled(Link)`
${NavLink}

`;
const NavBtn = styled.div`
display:flex;
align-items:center;
margin-right:24px;
@media screen and (max-width:768px){
    display:none;
`;
const MenuBars = styled(FaBars)`
display:none;
cursor:pointer;

@media screen and (max-width:768px){
    display:block;
}
`;
const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right: -48px;

@media screen and (max-width:768px){
    display:none;
}
`;
const Navbar = ({ toggle }) => {
    const [isScroll, setisScroll] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 300) {
            console.log("Big size:", window.scrollY);
            setisScroll(true);
        } else {
            setisScroll(false);
        }

    };
    window.addEventListener("scroll", changeBackground);


    return (
        <Nav isScroll={isScroll}>
            <Logo>PORTFOLIO</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary='true'>
                    <Fade bottom>

                        Contact Us
                    </Fade>

                </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
