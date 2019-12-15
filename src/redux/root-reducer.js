import {combineReducers} from "redux";
import userReducer from './user/user.reducer';

export default combineReducers ({
    user : userReducer // change each state by their reducer
});