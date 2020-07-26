import React from 'react';
import Button from '../UI/Button/Button';

const OrderSummary= (props) => {
        const product = props.products.map(pro => {
            if (pro.TotalQuantity > 0) {
                return <li key={pro.Brandname}>{pro.Brandname} : {pro.TotalQuantity}</li>
            }
            return 0;
        })

        return (
            <div>
                <p>Your Order</p>
                <p>Here is Your Bucket:</p>
                <ul>
                    {product}
                </ul>
                <p><strong>Total Price: {props.totalPrice}</strong></p>
                <p>Transaction has been Successfull!</p>
                <Button btnType="Success" clicked={props.Success}>Suceessfull</Button>
            </div>
        );
    
}

export default OrderSummary;