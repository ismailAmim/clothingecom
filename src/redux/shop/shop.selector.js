import {createSelector} from "reselect";

/* const COLLECTION_ID_MAP  ={
    hats :1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
};
 */
const selectSh= state=>state.shop;

const selectShop = createSelector(
    [selectSh],
     (shop)=>shop.collections
 ); 
export default selectShop;

export const selectCollectionPrev =createSelector (
    [selectShop],
    collections => Object.keys(collections).map(key => [key, collections[key],1])
    // Object.keys(collections).map(key=>collections[key])
    /* 
        collections.find (
            collection => collection.id ===COLLECTION_ID_MAP[collectionUrlParam]
         */);

export const selectCollection = collectionUrlParam =>
createSelector (
    [selectShop],
    collections => collections[collectionUrlParam]/* 
        collections.find (
            collection => collection.id ===COLLECTION_ID_MAP[collectionUrlParam]
         */);