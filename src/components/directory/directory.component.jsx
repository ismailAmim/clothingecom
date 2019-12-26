import React from 'react';

import "./directory.styles.scss";

import {connect}  from "react-redux";
import selectDirectory from "../../redux/directory/directory.selector";
import {createStructuredSelector} from "reselect";

import MenuItem from "../menu-item/menu-item.component";


const  Directory = ({sections}) =>(
    
 <div className="directory-menu">
                 {sections.map( ({ id,...otherSecOps}) => 
                 <MenuItem key  ={id} {...otherSecOps}   />)}</div>
                 );



const mapStateToProps =createStructuredSelector( {
    sections :  selectDirectory
});

export default connect (mapStateToProps)(Directory);