import React from 'react';
import './product.css';

const product = (props) => {
    return (
        <div className="product">
            <div className="brand-name">{props.brandName}</div>
            <div >{props.productName}</div>
            <div>{props.quantity}</div>
            <div>MRP {props.mrf}</div>
            <div><b>Rs {props.price}</b></div>
        </div>
    )
}

export default product;