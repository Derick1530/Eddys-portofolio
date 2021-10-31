import React from 'react'
import Slider from "react-slick";
import { SliderContainer, Container, Image, ContainerElement, Foward, Next } from "./projectBuild.element"

const ProjectBuilt = ({ derick, data }) => {

    const NextBtn = (props) => {
        const { className, onClick } = props
        return (
            <Foward className={className} onClick={onClick} />
        )
    }
    const PrevBtn = (props) => {
        const { className, onClick } = props
        return (
            <Next className={className} onClick={onClick} />
        )
    }
    const settings = {
        dots: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "1px",
        dotsClass: "slick-dots custom-indictor",
        infinite: true,
        speed: 500,
        slidesToShow: 3,

    };
    return (
        <Container>



            <ContainerElement>

                <h2>Custom Paging</h2>
                <Slider {...settings}
                    prevArrow={<PrevBtn />}
                    nextArrow={<NextBtn />}
                >
                    {derick.map((item, index) => {
                        return (
                            <SliderContainer key={index}>
                                <Image src={item.image} alt={item.alt} />
                            </SliderContainer>
                        )
                    })}
                </Slider>
            </ContainerElement>
        </Container>
    )
}

export default ProjectBuilt
