// 1. Import 'useContext' to subscribe to the Context object
import React, {useContext} from "react";
// 2. import the DataContext
import { DataContext } from "../datacontext";


const SelectContextEventComponent=()=>{

     // 3. Subscribe to DataContext and get the Data

     let subscription = useContext(DataContext);

     // 4. Get the Data Part from the subscription
     let dataSource = subscription[Object.keys(subscription)[0]];

     // 5. Get the CallBack from the subscription
     let callback =   subscription[Object.keys(subscription)[1]];  

      

     if(dataSource === undefined || dataSource.lenght === 0){
        return (
            <div className="container">
                <strong>
                    No Data to Display
                </strong>
            </div>
        );
     } else {
          // Bind the callback to onChange event to
          // pass data to Provider Component
        return (
            <select className="form-control"
              onChange={(evt)=>callback(evt.target.value)}
            >
                {
                    dataSource.map((entry,idx)=>(
                        <option key={idx} value={entry}>{entry}</option>
                    ))
                }
            </select>
        );
     }


     
 

    
};

export default SelectContextEventComponent;