export const DishesListing = (payload) => {
    return{
        type : 'ADD_LIST',
        payload : payload,
    }
} 

export const CartCount = () => {
    return{
        type : 'ADD_CARD',
    }
}

export const CartRemoveCount = () => {
    return{
        type : 'REMOVE_CARD',
    }
}

export const Add_Dishes_qty = (payload) => {
    return{
        type : 'ADD_DISH_QTY',
        payload : payload
    }
}

export const Remove_Dishes_qty = (payload) => {
    return{
        type : 'REMOVE_DISH_QTY',
        payload : payload
    }
}