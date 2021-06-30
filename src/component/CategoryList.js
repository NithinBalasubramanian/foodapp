import React , { useEffect , useState } from 'react'
import '../Style.scss';

import axios from 'axios'


const CategoryList = () => {

    //initial category state 

    let initialState = [
        {
            'menu_category' : '',
        }
    ]

    //set usestate

    let [ categories , setCategories ] = useState(initialState);

    //active category based on category selected
    
    let activeCategory = "Salads and Soup";

    //set useEffect

    useEffect(() => {
        getCategories();
    },[])

    //fetch categories

    const getCategories = async () => {
        await axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
        .then((res) => {
            setCategories(res.data[0].table_menu_list);
            //console.log(res.data[0].table_menu_list);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return(
        <div className="container">
            <div className="categoryListing">
            {categories.map((category,k) => {
                    return(
                        <p key={k}  className = {(activeCategory === category.menu_category) ? `activeStyle` : ``}>{ category.menu_category }</p>
                    ) 
                })
            }
            </div>
        </div>
    )
}

export default CategoryList