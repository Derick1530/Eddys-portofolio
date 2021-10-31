import React from 'react';

import {
    Container, WrappeElement, ElementContainer, Element, Title, Log, Image, ElementCom, Detail
} from "./service.element"

const Services = ({ names, title, titleDesc }) => {
    return (
        <Container>
            <ElementCom>
                <Title>
                    <p>{title}</p>
                    <h1>Service that we provide</h1>

                </Title>
                <WrappeElement>



                    {names.map((item, index) => (
                        <ElementContainer key={index}>
                            <Element >
                                <Log>
                                    <Image src={item.image} alt={item.alt} />
                                </Log>
                                <Detail>
                                    <h1>{item.elementTitle}</h1>
                                    <p>{item.description}</p>
                                </Detail>
                            </Element>
                        </ElementContainer>
                    ))}

                </WrappeElement>
            </ElementCom>

        </Container>
    )
}

export default Services
