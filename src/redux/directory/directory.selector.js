import {createSelector} from "reselect";

// get the state cart items
const selectDirect = state => state.directory;
// create the cart selectors
// first arg the collection
// function that return the selectors 
const selectDirectory = createSelector(
   [selectDirect],
    (directory)=>directory.sections
);

export default selectDirectory;