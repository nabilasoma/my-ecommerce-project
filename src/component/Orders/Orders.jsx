import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    // console.log(savedCart)

    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem handleRemoveFromCart={handleRemoveFromCart}
                        key={product.id} product={product}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link to="/orders">
                        <button className='review-order'>Review Order</button>
                    </Link>
                  </Cart>
            </div>
        </div>
    );
};

export default Orders;