import React from "react";
import "./Popup.css"
import {AiOutlineClose} from "react-icons/ai"

const Popup = (props) => {
    return (props.trigger) ? (
        <>
        <div className="popup">
            <div className="popupInner">
                <span className="closeBtn">
                    <AiOutlineClose 
                    onClick={() => {props.setTrigger(false)}}
                    />
                </span>                
                {props.children}
            </div>
        </div>
        </>
    ) : ""
}

export default Popup