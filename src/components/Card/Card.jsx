import React from "react";
import "./Card.css"
import {AiTwotoneSetting} from "react-icons/ai"
import {IoRefreshSharp} from "react-icons/io5"
import {AiOutlineArrowDown} from "react-icons/ai"
import Input from "../Input/Input";

const Card = () => {
    return (
        <>
        <div className="card">
            <div className="cardHeading">
                <div className="cardHeadingPrimary">
                    <div className="Primary1">
                        <h2>Trollswap</h2>
                    </div>
                    <div className="Primary2">
                        <AiTwotoneSetting />
                        <IoRefreshSharp />
                    </div>

                </div>
                <div className="cardHeadingSecondary">
                    <div className="secondaryText">
                        Trade tokens in an instant
                    </div>
                </div>
                <Input />

                <span className="arrow">
                    <AiOutlineArrowDown />
                </span>

                <Input />

                <div className="slipTolerance">
                    <div className="slipText">

                    </div>
                    <div className="slipPercent">
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card