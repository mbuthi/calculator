import React from "react";
import Button from "../Button/Button";
import "./Nav2.css"
const Nav2 = () => {
    return (
        <>
        <nav className="nav2">
            <div className="logo2">
                <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 169 24" class="h-3 w-[169px]"><g fill="#fff" clip-path="url(#tectonic_svg__a)"><path d="M24.739 0h19.59v6H30.763v12h13.564v6h-19.59V0zm7.75 8.998H44.32V15H32.49V9zM66.929 0v6H53.368v12h13.561v6h-19.59V0h19.59zM94.69 0h19.589v24h-19.59V0zm6.028 18h7.533V6h-7.533v12zM136.88 0v24h-6.025V6h-7.536v18h-6.025V0h19.586zm9.043 0v24h-6.028V0h6.028zm22.601 0v6h-13.561v12h13.561v6h-19.59V0h19.59zM83.873 7.735V24h-6.029V7.735h6.029zM69.943 0h13.954v6H69.943V0zM85.64 6h6.029V0H85.64v6zM13.924 7.735V24H7.901V7.735h6.023zM0 0h13.957v6H0V0zm15.699 6h6.025V0H15.7v6z"></path></g><defs><clipPath id="tectonic_svg__a"><path fill="#fff" d="M0 0h168.775v24H0z"></path></clipPath></defs></svg>
            </div>
            <div>
                <ul id="navbar2">
                    <li>
                        <Button name="Enter App" />
                    </li>
                    {/* <li>
                        <a className="navIcons world" href=""><TbWorld/></a>
                    </li>
                    <li>
                        <a className="navIcons settings" href=""><AiTwotoneSetting/></a>
                    </li>
                    <li>
                        <a className="navText" href="">connect to wallet</a>
                    </li> */}
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Nav2