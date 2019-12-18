import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden}     from "../../redux/cart/cart.actions"; 
import {createStructuredSelector} from "reselect";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import './cart-icon.styles.scss';

const CartIcon =({toggleCartHidden,itemCount})=> (

    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>

)
// connect cart action toggleCartHidden to cart icon
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
});


/* const mapStateToProps = ({cart :{cartItems}})=>({
    itemCount : cartItems.reduce((accumalatedQauntity, cartItem)=>accumalatedQauntity+cartItem.quantity,0) }
    ); */

// changed , pass the state using the reslect selector -- state --    
const mapStateToProps =createStructuredSelector({
        itemCount : selectCartItemsCount }
        );    
    // item Count get the sum of accumalated quantities
    // by the reduce function

export default connect (mapStateToProps,mapDispatchToProps)(CartIcon);