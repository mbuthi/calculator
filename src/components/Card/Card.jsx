import React from "react";
import "./Card.css"

import {IoRefreshSharp} from "react-icons/io5"
import {AiOutlineArrowDown, AiTwotoneSetting, AiOutlineQuestionCircle, AiOutlineDown} from "react-icons/ai"

import Input from "../Input/Input";
import Button from "../Button/Button";
import logoImg from "../../assets/images/logo.png"
import croImg from "../../assets/images/cro.png"
import Popup from "../Popup/Popup";
import { useState } from "react";
const Card = () => {
    const [buttonPopUp, setButtonPopUp] = useState(false)
    const [buttonPopUp2, setButtonPopUp2] = useState(false)
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
                        <AiTwotoneSetting
                        onClick={() => {setButtonPopUp2(true)}}
                         />
                        <IoRefreshSharp />
                    </div>
                    <Popup trigger={buttonPopUp2} setTrigger={setButtonPopUp2}>
                    <div className="popHeading">
                        <h2 className="popHeadingText">Settings</h2>
                    </div>
                    <div className="popBody">
                        <div className="slipCaption">
                            <span>Slippage Tolerance 
                                <span className="question"><AiOutlineQuestionCircle /></span></span>
                        </div>
                        <div className="tolerancePercent">
                            <span>0.1%</span>
                            <span>0.5%</span>
                            <span>1.5%</span>
                            <Input placeholder="0.50" numbersOnly={true} />
                            <span>%</span>
                        </div>
                    </div>
                </Popup>
                <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                    <div className="popHeading">
                        <h2 className="popHeadingText">Select a Token</h2>
                    </div>
                    <div className="popBody">
                        <Input 
                            placeholder="Search name ot paste address"
                        />
                        <div className="tokens">
                            <div className="tokenImgName">
                                <div className="tokenImg">
                                    <img src={croImg} alt="" />
                                </div>
                                <div className="tokenName">
                                    <div className="tokenNonFade">
                                        <span>
                                            CRO
                                        </span>
                                    </div>
                                    <div className="tokenFade">
                                        <span>
                                            CRO
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="tokenPrice">
                                <span>
                                    0.000009
                                </span>
                            </div>
                        </div>
                    </div>
                </Popup>
                </div>
                <div className="cardHeadingSecondary">
                    <div className="secondaryText">
                        Trade tokens in an instant
                    </div>
                </div>
                <div className="label" onClick={() => {setButtonPopUp(true)}}>
                <label htmlFor="inpuText">Select a currency</label>
                <AiOutlineDown />
            </div>
                <Input 
                placeholder="0.0"
                numbersOnly={true}
                />

                <span className="arrow">
                    <AiOutlineArrowDown />
                </span>
                <div className="label" onClick={() => {setButtonPopUp(true)}}>
                <label htmlFor="inpuText">Select a currency</label>
                <AiOutlineDown />
            </div>
                <Input
                placeholder="0.0"
                numbersOnly={true}
                 />

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