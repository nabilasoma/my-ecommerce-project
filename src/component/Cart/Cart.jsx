import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total= total + product.price;
        totalShipping = totalShipping + product.price;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order summery</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;