export const addItemToCart = (cartItems,cartItemToAdd)=> {

    const existingCartItem = cartItems.find(cartItem =>cartItem.id ===cartItemToAdd.id);
    
    
    if (existingCartItem) {
        return cartItems.map(cartItem=>
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity : cartItem.quantity +1 }
            : cartItem
             )
        // map return new array 
        //if id is match we add new prop quantity to cartItem
        // else we return the same cartItem
    }
    //if doesn't exist we return cartItems and the cartItem with his quantity
    return [...cartItems,{...cartItemToAdd,quantity : 1}]
};

export const removeItemChe = (cartItems,cartItemToRev)=> {
    const existingCartItem = cartItems.find(cartItem =>cartItem.id ===cartItemToRev.id);
    
    
    if (existingCartItem.quantity===1) {
        return cartItems.filter(cartItem =>cartItem.id !==cartItemToRev.id)        // map return new array 
        //if id is match we add new prop quantity to cartItem
        // else we return the same cartItem
    }
    //if doesn't exist we return cartItems and the cartItem with his quantity
    return  cartItems.map(cartItem=>
        cartItem.id === cartItemToRev.id 
        ? {...cartItem, quantity : cartItem.quantity -1 }
        : cartItem
         );
};