import React, { useState } from 'react';
import { ImageContainer } from "./gallery.element"
import { Button } from "./gallery.element"

const Masonry = (props) => {
    let primary = true
    const [showMore, setShowMore] = useState(6)
    const clickHandler = () => {
        setShowMore(showMore + showMore)
    }


    const slice = props.imageUrls.slice(0, showMore);

    return (
        <>
            <ImageContainer >
                {slice.map((img, i) =>
                    <img src={img.image} alt='gallery' key={i} className="image" style={{ padding: props.gap / 2 }} />

                )}

            </ImageContainer>
            <Button onClick={clickHandler} {...showMore > 11 ? primary = { primary } : ''} >Read More</Button>

        </>
    )
}

export default Masonry