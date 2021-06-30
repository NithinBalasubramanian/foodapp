import React , { useState , useEffect } from 'react'
import '../Style.scss';

import axios from 'axios'

//redux
import { useSelector , useDispatch } from 'react-redux'
import { DishesListing , Add_Dishes_qty , Remove_Dishes_qty , CartCount , CartRemoveCount } from '../action';

//icons

import { AiOutlinePlus , AiOutlineMinus } from 'react-icons/ai'

const ListDishes = () => {

    //dispatches

    const Dispatch = useDispatch();


    //useeffect

    useEffect(() => {
        fetchData();
    },[])

    //fetch data

    const fetchData = async () => {
        await axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
        .then((res) => {
           
            //listing in redux using reducer action

            Dispatch(DishesListing(res.data[0].table_menu_list[0].category_dishes));
        })
        .catch((error) => {
            console.log(error);
        })
    }

    //increament

    const addQty = (id) => {
        let qtyIncreament = {
            'id' : id,
            'qty' : 1
        }

        Dispatch(Add_Dishes_qty(qtyIncreament));
        Dispatch(CartCount());

    }

    //decreament

    const removeQty = (id) => {
        let qtyDecreament = {
            'id' : id,
            'qty' : 1
        }

        Dispatch(Remove_Dishes_qty(qtyDecreament));
        Dispatch(CartRemoveCount());
    }

    //collective of dishes from redux state

    let qtyData = useSelector( state => state.DishQty );

    let data = useSelector( state => state.DishListing);

    return(
        <div className="container">
            <div className="row">
                {data.map((dish,d_k) => {
                    let count = 0;
                    let qty = qtyData.filter(({id}) => id === dish.dish_id );
                    if(qty.length > 0){
                        qty.map(quantity => {
                            count = quantity.qty;
                        })
                    }else{
                        count = 0;
                    }

                    return(
                        <div className="col-md-6 padnone" key={d_k}>
                            <div className="cardDisp">
                                <div className="cardColm1">

                                    {/* Dish type 1 is Non Veg and 2 is vegetarian */}

                                    { (dish.dish_Type === 2) ?
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsT4e0RN6IsWAPDRX2etbSZ0vEHSj9dwZ6mxLylkpApzXblEDfu6uzg0Xd6sIK5xwhvok&usqp=CAU" height="15px" width="15px"></img>
                                    :   <img src="data:image/png;base64,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" width="15px" height="15px"></img>
                                    }
                                    </div>
                                <div className="cardColm2">
                                    <h5>{ dish.dish_name }</h5>
                                    <div className="priceDisp">
                                        <small><b>{ dish.dish_currency } {dish.dish_price }</b></small>
                                        <small className="calories"><b>Calories : { dish.dish_calories }</b></small>
                                    </div>
                                    <p>{ dish.dish_description }</p>

                                    {/* Button Count for quantity */}

                                    <div className="count">
                                        <div className="buttonView">
                                            <div className="btnMinus" onClick={() => { removeQty(dish.dish_id) }}>
                                                <AiOutlineMinus  style={{ fontSize : '20px', margin : '5px'}} />
                                            </div>
                                            <div className="btnCount">
                                                { count }
                                            </div>
                                            <div className="btnAdd" onClick={() =>{ addQty(dish.dish_id) }} >
                                                <AiOutlinePlus style={{ fontSize : '20px', margin : '5px'}} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Customization is available if addon is given */}

                                    { ((dish.addonCat).length !== 0) ? <p className="customize">Customization Available</p> : null }
                                </div>
                                <div className="cardColm3">
                                    <div className="cardImg">
                                        <img src={ dish.dish_image } width="100%" height="100%"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListDishes