import React from 'react'
import "./Slide.scss"
function Slide({image, alt}) {
    return (
        <div className="slide__container">
            <img src={image} alt={alt}/>
        </div>
    )
}

export default Slide
