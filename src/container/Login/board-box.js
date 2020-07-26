import React from 'react'
import './box.css';

// Create Box component
export const Box = (props) => {
    return (
        <button className="board__box" onClick={props.onClick}>
            {props.value}
        </button>
    )
}