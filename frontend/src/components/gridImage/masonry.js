import React, { useState } from 'react';
import { ImageContainer, ImagesCont, Button, Location, ImageSrc } from "./gridIndex.element"


const Masonry = (props) => {
    return (
        <>
            <ImageContainer >
                {props.imageUrls.map((img, i) =>
                    <>
                        <ImagesCont>
                            <ImageSrc src={img.image} alt='gallery' key={i} className="image" style={{ padding: props.gap / 1 }} />
                            <Location>
                                <h2>{img.title}</h2>
                                <p>{img.location}</p>
                            </Location>
                        </ImagesCont>
                    </>
                )}

            </ImageContainer>


        </>
    )
}

export default Masonry