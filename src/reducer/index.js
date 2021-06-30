import DishListing from './dishReducer';
import DishQty from './dishQtyReducer';
import DishCount from './dishCount';

import { combineReducers } from 'redux'


const AllReducer = combineReducers({
    DishListing,
    DishQty,
    DishCount,
})

export default  AllReducer