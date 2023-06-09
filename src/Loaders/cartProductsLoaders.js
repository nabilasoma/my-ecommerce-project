import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoaders = async () => {
    const loadedProduct = await fetch('products.json');
    const products = await loadedProduct.json();



    // if cart data is in database I have to use async await 
    const storedCart  = getShoppingCart();
    const savedCart = [];
    console.log(storedCart);

    for(const id in storedCart){
        const addedProducts = products.find(pd => pd.id === id)
        if(addedProducts){
            const quantity = storedCart[id]
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts);
        }
    }
    return savedCart;
}

export default cartProductsLoaders;