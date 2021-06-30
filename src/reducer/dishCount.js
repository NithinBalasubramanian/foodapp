const DishCount = (count = 0, action ) => {


    switch(action.type){

        //increament total

        case 'ADD_CARD':
            return count+1;
        
        //decrement total

        case 'REMOVE_CARD':
            if(count > 0){
                return count-1;
            }

        default :
            return count
    }

}

export default DishCount