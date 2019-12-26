import {combineReducers} from "redux";
import {persistReducer}  from "redux-persist";
import storage           from "redux-persist/lib/storage";

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from "./directory/directory.reducer";
import shopReducer      from "./shop/shop.reducer";

const persistConfig ={
    key :"root",
    storage,
    whitelist :['cart']//the only reducer we want to persist
}

const rootReducer =combineReducers ({
    user        : userReducer,
    cart        : cartReducer,
    directory   : directoryReducer,
    shop        : shopReducer  
    // change each state by their reducer
});

export default persistReducer(persistConfig,rootReducer); 
// return modified reducer with it persist congfig