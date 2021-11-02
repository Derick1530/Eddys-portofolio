import React from 'react'
import Slider from 'react-slick'

import { Container, Title, ImageContainer, Image, Details, ImageStart, ContainerWrapper, Footer, CardWrapper, Card, Foward, Next } from './testimonial.element'
import GetWidth from './getWidth'
const Testimonials = ({ data }) => {


    const getWindowsWidtHeight = GetWidth();
    const settings = {

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
                                    <ImageStart src={item.starts} />
                                </ImageContainer>
                                <p>{item.description}</p>
                                <Footer>
                                    <Details>
                                        <h2>{item.name}</h2>
                                        <p>CEO Innovation Squad</p>
                                    </Details>

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
