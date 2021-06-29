const DishQty = (state = [], action ) => {


    switch(action.type){
        case "ADD_DISH_QTY" :
            return [...state,state.map((prod) => prod.id === action.payload.id ? { ...prod , qty : prod.qty+1 } : action.payload )]
        default :
            return state;
    }
}

export default DishQty
