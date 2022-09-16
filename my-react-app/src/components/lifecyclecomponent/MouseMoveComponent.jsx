import React, {Fragment, useState, useEffect} from "react";

const MouseMoveComponent=()=>{

    const [x,SetX] = useState(0);
    const [y,SetY] = useState(0);

    // a method that will be executed when the MOUSE-MOVE event takes place
    const detectMousePostion=(evt)=>{
        SetX(evt.clientX);
        SetY(evt.clientY);
        console.log(`X-position: ${x} and Y-position : ${y}`);
    };
    // registration of the MouseMove event

    useEffect(()=>{
        // Mounting
        window.addEventListener('mousemove', detectMousePostion);

        // Kill the Mouse Event when theComponent is unloaded
        return(()=>{
            // Un Mounting
            console.log('Unloading');
            window.removeEventListener('mousemove', detectMousePostion);
        });
    });

    return (
        <div className="container">
            <h3>The Component with Global Mouse Event</h3>
            <Fragment>
                <strong>
                    X-postion : {x} --- Y-postion : {y}
                </strong>
            </Fragment>
        </div>
    );
};

export default MouseMoveComponent;