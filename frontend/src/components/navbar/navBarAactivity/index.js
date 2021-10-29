import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { menuData } from '../../../data/menuData';
import { Button } from '../../../globalStyles';
import {
    Nav, NavLink, Logo, NavMenuLinks, NavBtn, MenuBars, NavMenu

} from "./navbar.element"


const Navbar = ({ toggle }) => {
    const [isScroll, setisScroll] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 2) {
            setisScroll(true);
        } else {
            setisScroll(false);
        }

    };
    window.addEventListener("scroll", changeBackground);


    return (
        <Nav isScroll={isScroll} >
            <Logo to='/' >PORTFOLIO</Logo>
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
