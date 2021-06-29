export const DishesListing = (payload) => {
    return{
        type : 'ADD_LIST',
        payload : payload,
    }
} 

export const CartCount = (payload) => {
    return{
        type : 'ADD_CARD',
        payload : payload
    }
}

export const Add_Dishes_qty = (payload) => {
    return{
        type : 'ADD_DISH_QTY',
        payload : payload
    }
}