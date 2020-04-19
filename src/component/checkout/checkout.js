import React from 'react';
import './checkout.css';

const checkout = (props) => {
    let quantity =0;
    if(props.products){
        quantity = props.products.map(pro=>{
            return pro.TotalQuantity;
        }).reduce((sum,el)=>{
            return sum+el;
        })
    }
    return (
        <div className="fixed-footer">
            <div className="tag"><div className="qty">QTY: {quantity}</div>
                <div className="qty"> Total Price: {props.totalPrice}</div>
            </div>
            <div className="OrderButton">
                <button className="Button"
                    disabled={!props.purchasable} onClick={props.ordernow}>CheckOut</button>
            </div>
        </div>
    )
}

export default checkout;