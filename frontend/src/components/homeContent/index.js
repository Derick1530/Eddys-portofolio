
import React from 'react';
import { Container, WrapperElement, Elements, ImageContainer, Image, TextElement } from './homeContent.elements.js'
import { motion } from "framer-motion";
const HomeContent = ({ content }) => {
    return (
        <Container>
            <WrapperElement>
                <Elements>
                    <ImageContainer>
                        {content.map((item, index) => (

                            <Image src={item} alt="home" />
                        ))}

                    </ImageContainer>
                    <TextElement>

                        <h1>Make With love All what We Do</h1>
                        <p>As leader in design and construcutral solution of advanced technology facilities, our architectural are a result of collaboration process that empowers our multidisciplinary teams to share knowlge.</p>
                        <h2>15 Years Experience</h2>

                    </TextElement>
                </Elements>
            </WrapperElement>
        </Container>
    )
}

export default HomeContent


