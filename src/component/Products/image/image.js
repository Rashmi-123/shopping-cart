import React from 'react';
import './image.css';

const image = (props) => {
    return (
        <>
            <div className="image">
                <img src={props.src} alt="iamge" />
                <p className="offer"> OFFER {props.offerText}</p>
            </div>
        </>
    )
}

export default image;