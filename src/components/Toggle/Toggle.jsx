import React from "react";
import "./Toggle.css"
const Toggle = () => {
    return (
        <div>
            <input type="checkbox" id="check1" class="toggle" />
            <label for="check1"></label>
            {/* <br />
            <input type="checkbox" id="check2" class="toggle" />
            <label for="check2">Checked?</label>
            <br />
            <input disabled checked type="checkbox" id="check3" class="toggle" />
            <label for="check3">Checked?</label> */}
        </div>
        
    )
}

export default Toggle