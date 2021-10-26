import React from 'react'
import styled from 'styled-components'
import { menuData } from '../../data/menuData';
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";

const DropdownContainer = styled.div`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#333333;
display:grid;
align-items:center;
top:0;
left:${({ isOpen }) => (isOpen ? '0' : '-100%')};
transition: all 0.1s ease;
opacity:1;
top:0;
`;

const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
outline: none;
cursor:pointer;
outline:none;
`;

const CloseIcon = styled(FaTimes)`
color:#000d1a;
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
display:grid; 
grid-template-columns:1fr;
grid-template-rows: repeat(5,80px);
text-align:center;
margin-bottom:4rem;
@media screen and (max-width:480px){
    grid-template-rows: repeat(5,60px);
    
}
`;
const DropdownLink = styled(Link)`
display:flex;
width: 50%;
margin:0 auto;
padding-top:12px;
color: #fff;
justify-content:center;
align-items:center;
text-decoration:none;
list-style:none;
color:#fff;
cursor:pointer;
transition:0.9s ease-in-out;

&:hover {
    color: #000d1a;
}
`;



const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>

            </DropdownWrapper>

        </DropdownContainer>
    )
}

export default Dropdown
