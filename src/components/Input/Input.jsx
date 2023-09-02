import React, { useState } from "react";
import "./Input.css"
import {AiOutlineDown} from "react-icons/ai"
const Input = (props) => {
    const [val, setVal] = useState("")
    return (
        <>
        <div className="inputs">
            <div className="label">
                <label htmlFor="inpuText">Select a currency</label>
                <AiOutlineDown />
            </div>
            <div className="input">
                <input type="text" id="inpuText" placeholder="0.0" inputMode="decimal"
                autoComplete="off" autoCorrect="off" pattern="^[0-9]*[.,]?[0-9]*$"
                value={val} onChange={(e) => {
                    setVal((v) => (e.target.validity.valid ? e.target.value : v))
                }} />
            </div>            
        </div>
        </>
    )
}

export default Input