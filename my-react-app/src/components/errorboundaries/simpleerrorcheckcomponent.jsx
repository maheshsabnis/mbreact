import React,{useState} from "react";

const CounterChildComponent=()=>{
   let [counter,setCounter] = useState(0);

   const updateCounter=()=>{
     setCounter(counter++);
   }

   const updateCounterUI=()=>{
    return (
        <div className="container">
            <h3>The Counter Child Component</h3>
            <strong>
                Current Value of Counter : {counter}
            </strong>
            <br/>
            <button className="btn btn-primary" onClick={updateCounter}>Click</button>
        </div>
    );
   };

   const fallbackUI=(error)=>{

    return (
        <div className="container">
            <h3>The Counter Child Component</h3>
            <strong>
                 Error Ocurred: {error.message}
            </strong>
             
        </div>
    );
   };

   try{
    if(counter > 10) {
        throw new Error('You exceeds Max counts.....');
    } else {
        return updateCounterUI();
    }
   }catch(ex){
     return fallbackUI(ex)
   }

};


const ContainerComponent=()=>{
    const click=()=>{
        alert('Container');
    }
    return (
        <div className="container">
            <h2>The Container Component</h2>
            <div className="form-group">
                <CounterChildComponent></CounterChildComponent>
            </div>
            <hr/>
            <h3>
                Still In The COntainer Component
             </h3>
             <button onClick={click}>Click Me</button>
        </div>
    );
};

export default  ContainerComponent;