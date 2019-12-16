import cartActionTypes from "./cart.types";
import { addItemToCart} from './cart.utils';

const INITIIAL_STATE ={
    hidden:true, 
    cartItems :[]

}
const cartReducer =(state= INITIIAL_STATE,action)=>{

switch(action.type)
{
    case cartActionTypes.TOGGLE_CART_HIDDEN :
        return { ...state, hidden : !state.hidden };
        //change the state ture to false or false to true
    case cartActionTypes.ADD_ITEM :
        return { ...state,
                cartItems: addItemToCart(state.cartItems ,
                                  action.payload)
                };
    default : 
        return state;
}

}

export default cartReducer;