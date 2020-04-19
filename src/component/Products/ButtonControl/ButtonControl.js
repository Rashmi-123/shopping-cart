import React from 'react';
import './ButtonControl.css';

const buildControl = (props) => {
    return (<div className="BuildControl">
        <button className="addTocontrol" onClick={props.addToCart}>ADD CART</button>
        <button className="increment calculate-button" onClick={props.addItem}>+</button>
        <div className="quantity">{props.quantity}</div>
        <button className="decrement calculate-button" onClick={props.removeItem}>-</button>
    </div>
    )
}

export default buildControl;