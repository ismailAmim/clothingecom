import {combineReducer} from "react-redux";
import userReducer from './user/user.reducer';

export default rootReducer =combineReducer ({
    user : userReducer // change each state by their reducer
});