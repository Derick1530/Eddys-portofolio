import React, { useState } from 'react';
import { ImageContainer, ImagesCont, TittleImage, Button, Location, ImageSrc } from "./gridIndex.element"


const Masonry = (props) => {
    return (
        <>
            {props.imageUrls.map((img, i) =>
                <ImageContainer key={i} s >
                    <ImagesCont className={img.classename} >
                        <ImageSrc src={img.image} alt='gallery' style={{ padding: props.gap / 1 }} />

                    </ImagesCont>
                    <TittleImage>{img.title}</TittleImage>
                </ImageContainer>

            )}



        </>
    )
}

export default Masonry