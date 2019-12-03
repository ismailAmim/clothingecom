import React from 'react';
import SHOP_DATA from './shop.data.js';

import CollectionPreview from  '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {


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


}
export default ShopPage;