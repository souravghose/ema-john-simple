import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([])
    const handleAddtoCart = (product) => {
       const newCart = [...cart, product]
       setCart(newCart)
    }
    return (
      <div className="shop-container">
        <div className="product-container">
           {products.map(product => <Product 
           key={product.id}
           product={product}
           handleAddtoCart={handleAddtoCart}>
           
           </Product>)}
        </div>
        <div className="order-container">
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
        </div>
      </div>
    );
};

export default Shop;