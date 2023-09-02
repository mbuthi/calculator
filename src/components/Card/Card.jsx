import React from "react";
import "./Card.css"
import {AiTwotoneSetting} from "react-icons/ai"
import {IoRefreshSharp} from "react-icons/io5"
import {AiOutlineArrowDown} from "react-icons/ai"
import Input from "../Input/Input";
import Button from "../Button/Button";
import logoImg from "../../assets/images/logo.png"

const Card = () => {
    return (
        <>
        <div className="card">
            <div className="coinImg">
                <img src={logoImg} alt="" />
            </div>
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
                        <span>
                            Slippage Tolerance
                        </span>
                    </div>
                    <div className="slipPercent">
                        <span>
                            0.5%
                        </span>
                    </div>
                </div>
                <Button />
            </div>
        </div>
        </>
    )
}

export default Card