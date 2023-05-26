import React, { useState } from "react"
import "../Components/Header.css"
import chick from "../Image/logo.png"
import {Link} from "react-router-dom"
import {RxHamburgerMenu} from 'react-icons/rx'
import {GrClose} from 'react-icons/gr'
// import open from '../Image/open.svg'
import close from '../Image/close.svg'

const Header = ()=>{
    const [navigation ,setNavigation] = useState(false)
    const handleClick=()=>{
        setNavigation(!navigation)
    }
    return(
        <div className="header">
            <img src={chick} alt="" />
            <div className="desk-nav">
                <ol>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={"./about"}>About Us</Link></li>
                    <li><Link to={'./services'}>Our Services</Link></li>
                    <li><Link to={'./contact'}>Contact Us</Link></li>
                    <li><Link to={'./shop'}>Shop</Link></li>
                </ol>
            </div>
            <button className="hamburger" onClick={handleClick}>
                {navigation? <GrClose/>: <RxHamburgerMenu /> }
            </button>
            <div className={`${navigation? "mobile-nav display": "mobile-nav"}`}>
                <ol>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={"./about"}>About Us</Link></li>
                    <li><Link to={'./services'}>Our Services</Link></li>
                    <li><Link to={'./contact'}>Contact Us</Link></li>
                    <li><Link to={'./shop'}>Shop</Link></li>
                </ol>
            </div>
        </div>
    )
}
export default Header;