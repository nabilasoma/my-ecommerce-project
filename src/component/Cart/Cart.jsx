import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

    const Cart = ({cart, handleClearCart, children}) => {
    // const {cart} = props;
    console.log(cart);

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1;
        total= total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order summery</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
            <button onClick={handleClearCart} className='cart-btn'>
                <span className='clear-cart'>Clear Cart</span>
                <FontAwesomeIcon icon={faTrash} />
            </button>
            {children}
        </div>
    );
};

export default Cart;