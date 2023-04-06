import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {

    const { img, name, price, seller, ratings } = props.product;

    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="" />
                <div className='info'>
                    <h6 className='product-name'>{name}</h6>
                    <p>Price: ${price}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings} stars</p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(props.product)}
                className='btn-cart'>
                    Add To Cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
        </div>

    );
};

export default Product;