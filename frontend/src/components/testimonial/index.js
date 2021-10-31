import React from 'react'
import { Title } from '../serviceOffer/service.element'
import Slider from 'react-slick'

import { Container, ImageContainer, Image, Details, ImageStart, ContainerWrapper, Footer, CardWrapper, Card, Foward, Next } from './testimonial.element'
import GetWidth from './getWidth'
const Testimonials = ({ data }) => {


    const getWindowsWidtHeight = GetWidth();
    const settings = {
        dots: true,
        autoplay: true,
        dotsClass: "slick-dots custom-indictor",
        infinite: true,
        speed: 500,
        slidesToShow: getWindowsWidtHeight.innerWidth < 769 ? 1 : 3,

    };
    return (
        <Container>
            <Title>
                <p >TESTIMONIALS</p>
                <h1>What People Say About my Work</h1>
            </Title>
            <ContainerWrapper>

                <Slider {...settings}>

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
                </Slider>


            </ContainerWrapper>
        </Container>
    )
}

export default Testimonials
