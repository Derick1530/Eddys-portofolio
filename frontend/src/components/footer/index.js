import React from 'react';

// import { RiTwitterFill } from 'react-icons/ri';
// import { BsInstagram } from 'react-icons/bs';
// import { BsFacebook } from 'react-icons/bs';

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
    Button
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
        </FooterContainer>

    )
}

export default Footer;
