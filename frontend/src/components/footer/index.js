import React from 'react';

// import { RiTwitterFill } from 'react-icons/ri';
// import { BsInstagram } from 'react-icons/bs';
// import { BsFacebook } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLink, FaLinkedin } from "react-icons/fa";

import {
    FooterContainer,
    FooterSubHeading,
    FooterSubscribe,
    FooterSubText,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    Form,
    FooterLinkItems,
    FooterLink,
    FooterLinkTitle,
    Button,
    SocialMedia,
    SocialIconLink,
    SocialMediaWrapp,
    SocialIcons,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
}
    from './footer.elements'



const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscribe>
                <FooterSubHeading>
                    The following is the stress test for the chosen effect. A 100 paragraphs of lorem ipsum text will be revealed as you scroll down. To reset the test select an option from the button toolbar above. The following whitespace is intentionally left blank. Scroll down to begin stress test.
                </FooterSubHeading>
                <FooterSubText>
                    <Form>
                        <FormInput name="email" type="email" placeholder="Your Email" />
                        <Button fontBig>Subscribe</Button>

                    </Form>
                </FooterSubText>
            </FooterSubscribe>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to={'/'}>Testimal</FooterLink>
                        <FooterLink to={'/'}></FooterLink>
                        <FooterLink to={'/'}>Carres</FooterLink>
                        <FooterLink to={'/'}>Investors</FooterLink>

                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to={'/'}>Testimal</FooterLink>
                        <FooterLink to={'/'}></FooterLink>
                        <FooterLink to={'/'}>Carres</FooterLink>
                        <FooterLink to={'/'}>Investors</FooterLink>

                    </FooterLinkItems>
                </FooterLinksWrapper >
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to={'/'}>Testimal</FooterLink>
                        <FooterLink to={'/'}></FooterLink>
                        <FooterLink to={'/'}>Carres</FooterLink>
                        <FooterLink to={'/'}>Investors</FooterLink>

                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to={'/'}>Testimal</FooterLink>
                        <FooterLink to={'/'}></FooterLink>
                        <FooterLink to={'/'}>Carres</FooterLink>
                        <FooterLink to={'/'}>Investors</FooterLink>

                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrapp>
                    <SocialLogo to="/">
                        <SocialIcon />
                        DERICK
                    </SocialLogo>
                    <WebsiteRights>Derick 2021 </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" arial-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" arial-label="Instagram">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" arial-label="youtube">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" arial-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" arial-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrapp>
            </SocialMedia>
        </FooterContainer>


    )
}

export default Footer;
