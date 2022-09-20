import React,{Component, useState} from "react";

class ErrorBoundaryComponent extends Component {
    constructor(props){
        super(props);

        // define a state object
        this.state = {
            errorMessage: '' // the state property
        };
    }
    // the 'error' is the data received from child component
    
     static getDerivedStateFromError(error) {
        return {
            // Update the state property
            errorMessage: error.toString()    
        };
     }

     // implement the componentDidCatch()
     // error: The Error  Message 
     // log: Used for creating Stach Trace with Error Details in
     // the browser
     componentDidCatch=(error, log)=>{
        console.log(`Error is ${error.toString(), log.componentStack}`);
     };



    // the render method to show HTML UI for the class component
    render(){
        if(this.state.errorMessage) {
            // return a fallback UI
           return(  <div className="container">
            <h3>Error Occurred in Child Component!!</h3>
             <strong>
                 {this.state.errorMessage}
             </strong>
             
         </div>);
        } else {
            // continue returning the child component
            return this.props.children;
        }
    }
}

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

//    const fallbackUI=(error)=>{

//     return (
//         <div className="container">
//             <h3>The Counter Child Component</h3>
//             <strong>
//                  Error Ocurred: {error.message}
//             </strong>
             
//         </div>
//     );
//    };

   
    if(counter > 10) {
        throw new Error('You exceeds Max counts.....');
    } else {
        return updateCounterUI();
    }
    

};


const ContainerErrorBoundaryComponent=()=>{
    const click=()=>{
        alert('Container');
    }
    return (
        <div className="container">
            <h2>The Container Component with Error Boundary</h2>
            <div className="form-group">
                <ErrorBoundaryComponent>
                    <CounterChildComponent></CounterChildComponent>
                </ErrorBoundaryComponent>
            </div>
            <hr/>
            <h3>
                Still In The COntainer Component
             </h3>
             <button onClick={click}>Click Me</button>
        </div>
    );
};

export default  ContainerErrorBoundaryComponent;