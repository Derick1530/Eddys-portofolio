import React from 'react'
import { Title } from '../serviceOffer/service.element'

import { Container, ImageContainer, Image, Details, ImageStart, ContainerWrapper, Footer, CardWrapper, Card } from './testimonial.element'
const Testimonials = ({ data }) => {
    return (
        <Container>
            <Title>
                <p id="derick">TESTIMONIALS</p>
                <h1>What People Say About Us</h1>
            </Title>
            <ContainerWrapper>
                {data.map((item, index) => (
                    <CardWrapper key={index}>
                        <Card>
                            <ImageContainer>
                                <Image src={item.image} />
                            </ImageContainer>
                            <p>{item.description}</p>
                            <Footer>
                                <Details>
                                    <h2>{item.name}</h2>
                                    <p>CEO Innovation Squad</p>
                                </Details>
                                <ImageStart src={item.starts} />
                            </Footer>
                        </Card>
                    </CardWrapper>

                ))}

            </ContainerWrapper>
        </Container>
    )
}

export default Testimonials
