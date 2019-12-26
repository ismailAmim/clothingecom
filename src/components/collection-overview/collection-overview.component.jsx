//libs 
import React from 'react'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
//selectors
import selectCollectionPrev from "../../redux/shop/shop.selector";
// custom components
import CollectionPreview from "../collection-preview/collection-preview.component";
//styles
import './collection-overview.styles.scss';

const CollectionOverview = ({col} )=>(
    <div className="collection-overview">
      { console.log(col)
         /* col.map(({id, ...oprps})=>(
         <CollectionPreview key = {id}{...oprps}/>)) */ 
                      }
    </div>
);

const mapStateToProps = createStructuredSelector({
    col : selectCollectionPrev
});

export default connect (mapStateToProps)(CollectionOverview)