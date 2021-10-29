import React from 'react';
import img from '../../images/footer.png'
// import { RiTwitterFill } from 'react-icons/ri';
// import { BsInstagram } from 'react-icons/bs';
// import { BsFacebook } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import {
    FooterContainer,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLink,
    FooterLinkTitle,
    FooterLinkItemsContact,
}
    from './footer.elements'



const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinkItems>
                    <FooterLinkTitle>Navigation</FooterLinkTitle>
                    <FooterLink to={'/'}>Home</FooterLink>
                    <FooterLink to={'/about'}>About</FooterLink>
                    <FooterLink to={'/'}>Service</FooterLink>
                    <FooterLink to={'/gallery'}>Gallery</FooterLink>

                </FooterLinkItems>


                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contacts</FooterLinkTitle>
                        <FooterLink to={'/'}>Network</FooterLink>
                        <FooterLink to={'/'}>Our Members</FooterLink>
                        <FooterLink to={'/'}>Communities</FooterLink>
                        <FooterLink to={'/'}>Project</FooterLink>

                    </FooterLinkItems>


                    <FooterLinkItemsContact>
                        <h1>+2567594042</h1>
                        <p>Konge Kalonge Supermaket/Kampala Uganda</p>
                        <p>derickzihalirwa07@gmail.com</p>



                    </FooterLinkItemsContact>
                </FooterLinksWrapper >

            </FooterLinksContainer>
            <img src={img} alt="footer" />
        </FooterContainer>


    )
}

export default Footer;
