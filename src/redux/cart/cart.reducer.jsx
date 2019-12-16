import cartActionTypes from "./cart.types";
const INITIIAL_STATE ={
    hidden:true
}
const cartReducer =(state= INITIIAL_STATE,action)=>{

switch(action.type)
{
    case cartActionTypes.TOGGLE_CART_HIDDEN :
        return { ...state, hidden : !state.hidden }
        //change the state ture to false or false to true
    default : 
        return state;
}

}

export default cartReducer;