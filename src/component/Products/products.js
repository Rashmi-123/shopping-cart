import React from 'react';
import './products.css';
import Image from './image/image';
import Product from './Product/product';
import ButtonControl from './ButtonControl/ButtonControl'

const product = (props) => {

    let products = props.product.map(pro => {
        return <div className="content">
                <Image src={pro.ImageURL}
                offerText={pro.OfferText} />
                <div className="sidebar">
                    <Product
                        brandName={pro.Brandname}
                        productName={pro.Productname}
                        quantity={pro.Quantity}
                        price={pro.Price}
                        mrf={pro.MRF}
                    />
                    <ButtonControl addItem={() => props.addItem(pro.Productname)}
                        removeItem={() => props.removeItem(pro.Productname)}
                        addToCart={() => props.addToCart(pro.Productname)}
                        quantity={pro.TotalQuantity}
                    />
                </div>
        </div>
    })
    return (
        <div className="container">
            {products}
        </div>
    )
}

export default product;