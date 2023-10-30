import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const {img, name, seller, price, quantity, ratings} = props.product

    const handleAddtoCart = props.handleAddtoCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Quantity: {quantity}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddtoCart(props.product)} className="btn-cart">
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;