import React from 'react';
import {connect} from "react-redux";
import CartItem  from '../../components/cart-item/cart-item.component';

import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            { cartItems.map(cartitem=><CartItem key={cartitem.id} item={cartitem}/>)
            // we use cartitem in item object with his props
            }
        </div>
        <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps =({cart:{cartItems}})=> 
         ({cartItems})

export default connect (mapStateToProps)(CartDropdown);