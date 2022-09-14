import {useState} from 'react';
import './App.css';


function App() {
  // lets define a 'state' using 'useState'

  const [x, setX] = useState(0);


  return (
    <div className="App">
        <h1>The First Component</h1> 
        {/* the state property x is bound to 'value' property of input element 
           onChange={(evt)=> setX(parseInt(evt.target.value))}
           this event will be raised when the value is entered in input element
           and using the evt.target.value, the value will be passed to setX() method 
           which is dispatched by React and hence this will update the state for 
           'x' to next value
        */}
        <input type="text" value={x}
          onChange={(evt)=> setX(parseInt(evt.target.value))}/>
          <br/>
        <div>
          <strong>
            Value of x : {x}
          </strong>  
        </div>  
    </div>
  );
}

export default App;
