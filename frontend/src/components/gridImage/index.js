import React from 'react'
import Masonry from './masonry'
import { HomeGrid } from '../../data/projectBuilt';
// import Container from '@mui/material/Container';
import { TitleContainer, Container, WrapperImages } from "./gridIndex.element";
const GridImage = () => {

    return (
        <Container>
            <TitleContainer>
                <h1>Recents Projects </h1>
                <p>​SPACE is a broadly diversified architecture company working in great variety of spheres to provide people with quality architect services on the highest level.
                </p>
            </TitleContainer>


            <WrapperImages>

                <Masonry imageUrls={HomeGrid} columnCount="2" gap="1" >
                </Masonry>
            </WrapperImages>

        </Container>
    )
}

export default GridImage;
