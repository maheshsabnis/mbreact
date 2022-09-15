import React, { useState } from "react";
const ChildComponent=(props)=>{

    const [response, setResponse]=useState('');
    const onBtnClick=()=>{
        // emit data from here
        // lets define a method property object for 
        //'props' that will accepot the data

        props.getResponse(response);
    }
    return (
        <div className="container">
            <h2>The Child Component</h2>
            {/* Use the 'props' object to read data from its properties */}
            <div className="container">
                <strong>
                    Data Received from Parent :
                    {props.msg}
                </strong>
            </div>
            <hr/>
            <div className="form-group">
                <label>Enter Data to be emitted to parent</label>
                <input type="text"  
                 value={response}
                 onChange={(evt)=>setResponse(evt.target.value)}
                  className="form-control"/>
                <button className="btn btn-danger"
                onClick={onBtnClick}
                >Emit Data</button>
            </div>
        </div>
    );
};
export default  ChildComponent;