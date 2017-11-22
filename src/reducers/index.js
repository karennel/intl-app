import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './reduceritems';
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});