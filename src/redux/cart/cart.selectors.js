import {createSelector} from "reselect";

// get the state cart items
const selectCart = state => state.cart;
// create the cart selectors
// first arg the collection
// function that return the selectors 
export const selectCartItems = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart)=>cart.hidden
);
 
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems=>  cartItems.reduce((accumalatedQauntity, cartItem)=>accumalatedQauntity+cartItem.quantity,0) 
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems=>  cartItems.reduce((accumalatedQauntity, cartItem)=>accumalatedQauntity+(cartItem.quantity*cartItem.price),0) 
);