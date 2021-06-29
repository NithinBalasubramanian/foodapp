import React , { useState , useEffect } from 'react'
import '../Style.scss';

import axios from 'axios'

const ListDishes = () => {

    //initial state

    let initialState = [];

    //set state

    let [ data , setData ] = useState(initialState);

    //useeffect

    useEffect(() => {
        fetchData();
    },[])

    //fetch data

    const fetchData = async () => {
        await axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
        .then((res) => {
            setData(res.data[0].table_menu_list[0].category_dishes);
            console.log(res.data[0].table_menu_list[0].category_dishes);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    return(
        <div className="container">
            <div className="row">
                {data.map((dish,d_k) => {
                    return(
                        <div className="col-md-6 padnone" key={d_k}>
                            <div className="cardDisp">
                                <div className="cardColm1">
                                    <img src='../../assets/images/veg.png' height="30px" width="30px"></img>
                                </div>
                                <div className="cardColm2">
                                    <h5>{ dish.dish_name }</h5>
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