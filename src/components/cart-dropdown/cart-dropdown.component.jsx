import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";

import CartItem  from '../../components/cart-item/cart-item.component';

import {selectCartItems} from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/custom-button.component";

import {toggleCartHidden} from "../../redux/cart/cart.actions";
import './cart-dropdown.styles.scss'

// dispatch is default prop connect function
const CartDropdown = ({cartItems, history,dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            { 
            cartItems.length ?( 
            cartItems.map(cartitem=><CartItem key={cartitem.id} item={cartitem}/>)
            // we use cartitem in item object with his props
            ):(<span className="empty-message"> Your cart is empty</span>
            )}
        </div>
        <CustomButton onClick={()=> {
            history.push('/checkout');
            //if we click checkout btn we run togglecartHidden action
            dispatch(toggleCartHidden());
            }}> GO TO CHECKOUT</CustomButton>
    </div>
)
/* const mapStateToProps =({cart:{cartItems}})=> 
         ({cartItems}) */
   const mapStateToProps =createStructuredSelector(
          {
              cartItems: selectCartItems
          });

// withRouter takes components as argument receive props like history cache      
export default withRouter(connect (mapStateToProps)(CartDropdown));