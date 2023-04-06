import React from 'react';
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {img, price, name, quantity, id} = product;
    console.log(product)
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-info'>
                <h6 className='product-title'>{name}</h6>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>${quantity}</span></p>
            </div>
            <div>
                <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='fontawsome' icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;