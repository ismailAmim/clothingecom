import React from 'react';
import {BrowserRouter as Router,Route} 
       from "react-router-dom";
//import NestedSwitch, { NestedRouter } from "@kirpa/nested-router-switch";
//import SHOP_DATA from './shop.data.js';

//import CollectionPreview from  '../../components/collection-preview/collection-preview.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage       from '../collection/collection.component';
/* import {connect} from "react-redux";
import selectShop from "../../redux/shop/shop.selector";
import {createStructuredSelector} from "reselect"; */

/* class ShopPage extends React.Component {


    constructor (props){
        super (props);

        this.state ={
            colllections : SHOP_DATA
              
        }
    }

    render () {
        const {colllections}=this.state;
        return (<div className="shop-page">
                      {
                          colllections.map(({id, ...oprps})=>
                            <CollectionPreview key = {id}{...oprps}/>)
                      }
                </div>);
    }


} */

const ShopPage =({match})=>{
console.log("403");  
//let { cat } = useParams();

return (
   <div className="shop-page">
        {/* <CollectionOverview/> */}
        <div>
       <Router>
       
         <Route exact path ={`${match.path}`} 
                 component ={CollectionOverview}/>
         
         <Route       path ={`${match.path}/:collectionId`} 
                 component ={CollectionPage}/>
                   
            
         
        </Router> 
       </div>
    
</div>
);
}

export default ShopPage;