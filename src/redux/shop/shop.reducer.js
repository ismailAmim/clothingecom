import SHOP_DATA from "../../pages/shop/shop.data";
const INITIIAL_STATE ={
    collections :SHOP_DATA
};

const shopReducer =(state = INITIIAL_STATE, action)=>{
    switch (action.type) {
        default :
            return state;
        }
      };
export default shopReducer;