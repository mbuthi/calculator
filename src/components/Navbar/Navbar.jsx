import React from "react";
import "./Navbar.css"
import logoImg from "../../assets/images/logo.png"

// import {AiTwotoneSetting} from 'react-icons'
import {AiTwotoneSetting} from "react-icons/ai"
import {TbWorld} from "react-icons/tb"
const Navbar = () => {
    return (
        <>
        <nav>
            <div className="logo">
                <img src={logoImg} alt="" />
            </div>
            <div>
                <ul id="navbar">
                    
                    <li>
                        <a className="navIcons world" href=""><TbWorld/></a>
                    </li>
                    <li>
                        <a className="navIcons settings" href=""><AiTwotoneSetting/></a>
                    </li>
                    <li>
                        <a className="navText" href="">connect to wallet</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar