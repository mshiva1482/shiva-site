import React from 'react'
import './Section.css'

const Section = (props) => {
    const imageStyle = {
        width: props.width,
        height: props.height,
    };

    return (
        <div className="container">
            <div className="image-container">
                <img src={props.imageSrc} alt="Section Image" style={imageStyle}/>
            </div>
            <div className="text-container">
                <h2>{props.header}</h2>
                <p>{props.paragraph}</p>
                <a href={props.link} target="_blank">{props.linkName}</a>
            </div>
        </div>
    )
}

export default Section