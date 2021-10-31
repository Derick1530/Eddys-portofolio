import React from 'react';
import { AiOutlineInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { CompanyContainer, PhoneNum, SocialIcons, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './footer.elements';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Phone number</LinkTitle>
                    <PhoneNum>+2560000001</PhoneNum>
                    <LinkTitle>Twitter</LinkTitle>
                    <LinkItem href="https://twitter.com/Derickzihalirw5">Derickzihalirw5</LinkItem>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:derickzihalirwa07@gmail.com">derickzihalirwa07@gmail.com</LinkItem>
                </LinkColumn>
                <LinkColumn>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>

                <SocialContainer>


                    <SocialIcons href="https://github.com/Derick1530">
                        <AiOutlineInstagram size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://ug.linkedin.com/in/derick-zihalirwa-0b91691a6">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://github.com/Derick1530">
                        <AiFillFacebook size="3rem" />
                    </SocialIcons>
                </SocialContainer>

            </SocialIconsContainer>
            <CompanyContainer>
                <Slogan>Derick © 2021</Slogan>

            </CompanyContainer>
        </FooterWrapper>
    );
};

export default Footer;
