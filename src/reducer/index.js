import DishListing from './dishReducer';
import DishQty from './dishQtyReducer';

import { combineReducers } from 'redux'


const AllReducer = combineReducers({
    DishListing,
    DishQty
})

export default  AllReducer