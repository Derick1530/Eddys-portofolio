import React from 'react'
import Masonry from './masonry'
import { dataGridImage } from '../../data/projectBuilt';
import Container from '@mui/material/Container';
import { TitleContainer } from "./gallery.element";
const Gallery = () => {

    return (
        <Container>
            <TitleContainer>
                <h1>Our  Gallery</h1>
                <p>Our design is translated into comprehensive digital environments built on latest development standards. We treat each project and brand like it was our own.
                </p>
            </TitleContainer>
            <Masonry imageUrls={dataGridImage} columnCount="2" gap="5" >
            </Masonry>
        </Container>
    )
}

export default Gallery
