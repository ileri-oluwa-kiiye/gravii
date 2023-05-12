import logo from "../img/logo.png"
import { useState } from "react"


const Nav =() => {


    const [menuActive, setMenuActive] = useState(false)


    return(
        <div className="nav">
            <div className="top">
                <img src={logo} alt="" />

                {/* The navigation links */}
                <ul>
                    <li><a href="">Product</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                {/* This is the hamburger menu for the mobile screen */}
                <div className={menuActive? 'close-menu' : 'hamburger-menu'} onClick= {()=>{setMenuActive(!menuActive)}}>
                    <span className="menu-line left"></span>
                    <span className="menu-line hide"></span>
                    <span className="menu-line right"></span>
                </div>
            </div>

            <div className={menuActive? 'mobilenav active' : 'mobilenav non-active'}>
                {/* The navigation links */}
                <ul>
                    <li><a href="">Product</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}


export default Nav