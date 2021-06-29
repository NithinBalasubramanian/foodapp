import React from 'react'
import '../Style.scss';

// icon

import { IoMdArrowRoundBack } from 'react-icons/io'
import { ImCart } from 'react-icons/im'

const Header = () => {

    return(
        <div className="headerParent">
            <div className="headerContainer">
                <div className="headerColm1">
                    <IoMdArrowRoundBack className="backicon" />
                    <h2>UNI Resto Cafe</h2>
                </div>
                <div className="headerColm2">
                    <p>My Order</p>
                    <ImCart  style={{ margin : '0px 20px' , fontSize : '25px' }} />
                </div>
            </div>
        </div>
    )
}

export default Header