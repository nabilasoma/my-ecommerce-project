import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    

    useEffect( ()=> {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect( ()=> {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // get Id of the addedProduct
       for(const id in storedCart){
        // get product from products state by using id
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            // step three: find out the quantity 
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // step no four: Add the addedCart to the savedCart
            savedCart.push(addedProduct);
        }
        
       }
    //    step five: set the cart
       setCart(savedCart);
    }, [products]);

    const handleAddToCart = (product) => {
        let newCart = [];
        // const newCart = [...cart, product]
        // if product doesn't exist in the cart then set 1.
        // if product exist update quantity by 1.
        const exist = cart.find(pd => pd.id === product.id)
        if(!exist){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, product];
        }
        setCart(newCart);
        addToDb(product.id);
    }
    
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    return (
        <div className='shop-container'>
            <div className="product-container">
               {
                products.map(product => <Product
                    key={product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                ></Product>)
               }
            </div>
            <div className="cart-container">
                <h2></h2>
                <p></p>
                <Cart cart={cart}
                handleClearCart={handleClearCart}
                >
                <Link to="/checkout">
                    <button className='checkout'>Proceed CheckOut</button>
                </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;