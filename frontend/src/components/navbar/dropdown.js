import React from 'react'
import styled from 'styled-components'
import { menuData } from '../../data/menuData';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";

const DropdownContainer = styled.div`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#cd853f;
display:${({ isOpen }) => (isOpen ? 'grid' : 'none')};
align-items:center;
top:0;
left:0;
transaction:0.10s ease-in-out;
opacity:${({ isOpen }) => (isOpen ? '1' : '0')};
top:0
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
color:#000dla;
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
display:grid; 
grid-template-columns:1fr;
grid-template-rows: repeat(4,80px);
text-align:center;
margin-bottom:4rem;
@media screen and (max-width:480px){
    grid-template-rows: repeat(4,60px);
    
}
`;
const DropdownLink = styled(Link)`
display:flex,
color: #fff;
justify-content:center;
aligns-items:center;
text-decoration:none;
list-style:none;
color:#fff;
cursor:pointer;
transaction:0.2s ease-in-out;

&:hover {
    color: #000d1a;
}
`;
const BtnWrap = styled.div`
display:flex;
justify-content:center;
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
                <BtnWrap>
                    <Button primary="true" round="true" big="true" to="/contact">
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWrapper>

        </DropdownContainer>
    )
}

export default Dropdown
