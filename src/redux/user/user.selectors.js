import {createSelector} from "reselect";

// get the state cart items
const selectUser = state => state.user;


export const selectCurrentUser = createSelector(
    [selectUser],//input selectors
    (user)=>user.currentUser // output selector
);
 
