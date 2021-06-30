const DishQty = (state = [], action ) => {


    switch(action.type){

        //increament qty

        case "ADD_DISH_QTY" :

            if(state.length > 0){
                const index = state.find(DishQty => DishQty.id === action.payload.id); 
                
                if(index){
                    return state.map(itm => { 
                        if(itm.id === action.payload.id){
                            return {...itm, qty : itm.qty+1 }
                        }else{
                            return itm;
                        }
                    })
                }else{

                    return [...state,action.payload];
                }
            }else{
                return [...state,action.payload];
            }

        //decreament qty

        case "REMOVE_DISH_QTY" :
            if(state.length > 0){
                const index = state.find(DishQty => DishQty.id === action.payload.id); 
                
                if(index){
                    return state.map(itm => { 
                        if(itm.id === action.payload.id){
                            if(itm.qty > 0){
                                return {...itm, qty : itm.qty - 1 }
                            }else{
                                return itm;
                            }
                        }else{
                            return itm;
                        }
                    })
                }else{
                    return state;
                }
            }else{
                return state;
            }

        //Default
        default :
            return state;
    }
}

export default DishQty
