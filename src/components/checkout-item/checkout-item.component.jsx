import React from 'react';
import "./checkout-item.styles.scss"; 
import {clearItem,removeItem,addItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";
 
// we just pass cartItem  as a porp
const CheckoutItem =({cartItem,clItem,revItem,addItem})=>{
// destruct cartItem props and 
// pass the removeItem, clear and add actions as a prop
const  {name, imageUrl, price, quantity}=cartItem;

return (
 
 <div className="checkout-item">
            <div className="image-container">
                <img  src ={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            
            <span className="quantity">
                <div className="arrow" onClick={()=>revItem(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>clItem(cartItem)}>&#10005;</div>
        
    </div>

);
}

const mapDispacthToPprops = dispatch =>({
    clItem  : item=>dispatch(clearItem(item)),
    revItem : item=>dispatch(removeItem(item)),
    addItem : item=>dispatch(addItem(item))
})
export default connect(null,mapDispacthToPprops)(CheckoutItem);