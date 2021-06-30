const DishListing = (state = [], action ) => {
    switch(action.type){
        case "ADD_LIST" :
            return action.payload;
        default :
            return state;
    }
}

export default DishListing