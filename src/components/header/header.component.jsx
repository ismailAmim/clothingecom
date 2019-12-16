import React from 'react';
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import {ReactComponent as Logo}   from "../../assets/crown.svg";
import './header.styles.scss';
import {connect} from "react-redux";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from  "../cart-dropdown/cart-dropdown.component";
// pass the state elements values to the header comonent 
const Header =({currentUser,hidden})=>(
    <div className="header">
        <Link className="logo-container" to ="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to ="/shop">SHOP </Link>
            <Link className="option" to ="/contact">Contact </Link>
            {   
                currentUser ? 
                <div  className="option" onClick={()=>auth.signOut()}>Sign Out</div>
                :
                <Link className="option" to='/signin'>Sign In</Link>
            } 
            <CartIcon/>
            
        </div>
        { hidden ? null : <CartDropdown/>}
        
    </div>

)

/* const mapStateToProps = state => ({currentUser: state.user.currentUser}); */

// destruct state using {}
// state to  { element1:{val1 },...}
// just pass the current state element values
const mapStateToProps = ({user:{currentUser},cart:{hidden} }) => ({currentUser,hidden});

export default connect(mapStateToProps)(Header);