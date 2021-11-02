import React from 'react'
import Masonry from './masonry'
import { dataGridImage } from '../../data/projectBuilt';
import { TitleContainer, ImageCont, Container, HeroName } from "./gallery.element";
const Gallery = ({ content }) => {

    return (
        <Container>
            <TitleContainer>
                <h1>Our  Gallery</h1>
                <p>Our design is translated into comprehensive digital environments built on latest development standards. We treat each project and brand like it was our own.
                </p>
            </TitleContainer>
            <Masonry imageUrls={dataGridImage} columnCount="2" gap="5" />
            <HeroName to="/">
                <h3 >Derick Zihalirwa</h3>
                <p>Architect</p>
            </HeroName>

        </Container>
    )
}

export default Gallery
