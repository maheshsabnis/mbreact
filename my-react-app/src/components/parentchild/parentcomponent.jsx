import React, { useState } from "react";
// import the Component
import ChildComponent from "./childcomponent";


const ParentComponent=()=>{
    const [message, setMessage] = useState('');
    const [acknowledment, setAck] = useState('');

    return(
        <div className="container">
            <h1>The Parent Component</h1>
            <div className="form-group">
                <label>Enter Message Here</label>
                <input type="text" className="form-control"
                value={message}
                onChange={(evt)=>setMessage(evt.target.value)}/>
            </div>
            <br/>
            <div className="form-group">
                <strong>
                    Response received from Child:
                    {acknowledment}
                </strong>
            </div>
            <hr/>
            {/* Using the Child COmponent 
              the 'msg' will be a custom JSX attribute property
              created by React.js in 'props' object at compile-time
              and its value will be set at run-time  
              also receive data from child using  props method property
              getResponse={(ack)=>setAck(ack)}, binds the 'setAck' with
              getResponse, internally this uses function.bind()
              the 'ack' is the parameter that holds the reference of
              the value(s) contaied by the getResponse function
              and these values will be passed to setAck() function
            */}
            <ChildComponent msg={message}
             getResponse={(ack)=>setAck(ack)}></ChildComponent>
            
        </div>
    );    

};

export default  ParentComponent;