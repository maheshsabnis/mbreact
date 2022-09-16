import React, { useState, Fragment } from "react";
import MouseMoveComponent from "./MouseMoveComponent";

// if 'show' is true then only the MouseMoveComponent will be Displayed
const ToggleComponent=()=>{
    const [show, canShow] = useState(true);

    return (
        <Fragment>
            <h2>Toggle based on Button Click</h2>
            <button onClick={()=>{
                canShow(!show)
            }}>Toggle</button>
            {
                    show && <MouseMoveComponent></MouseMoveComponent> 
            }
            <Fragment>
                <strong>
                    The Current Component in Load is ToggleComponent
                </strong>
            </Fragment>
        </Fragment>
    );
};

export default ToggleComponent;