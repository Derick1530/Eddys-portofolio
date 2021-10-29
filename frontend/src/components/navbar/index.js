import React, { useState } from 'react'
import Navbar from './navBarAactivity'
import Dropdown from './navBarAactivity/dropdown'
const NavbarActivity = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
        </>
    )
}

export default NavbarActivity
