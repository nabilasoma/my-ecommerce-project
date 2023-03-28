import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    

    useEffect( ()=> {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect( ()=> {
        const savedCart = [];
        const storedCart = getShoppingCart();
        // step one: get the id by using for loop
        for(const id in storedCart){
            // step two: get the product by using id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                // step three: add quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step four: add the addedProduct to the savedCart
                savedCart.push(addedProduct)
                
            }
            console.log(addedProduct)
            
            

        }
        // step five: set the cart
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;