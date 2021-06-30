import React from 'react'
import '../Style.scss';

//redux
import { useSelector  } from 'react-redux'

// icon

import { IoMdArrowRoundBack } from 'react-icons/io'
import { ImCart } from 'react-icons/im'

const Header = () => {

    let count = useSelector( state => state.DishCount);

    return(
        <div className="headerParent">
            <div className="headerContainer">
                <div className="headerColm1">
                    <IoMdArrowRoundBack className="backicon" />
                    <h2>UNI Resto Cafe</h2>
                </div>
                <div className="headerColm2">
                    <p>My Order</p>
                    <ImCart  style={{ margin : '0px 40px 0px 15px' , fontSize : '25px' }} />
                    <div className="countDisp">{ count }</div>
                </div>
            </div>
        </div>
    )
}

export default Header