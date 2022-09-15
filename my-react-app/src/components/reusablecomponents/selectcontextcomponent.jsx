// 1. Import 'useContext' to subscribe to the Context object
import React, {useContext} from "react";
// 2. import the DataContext
import { DataContext } from "../datacontext";


const SelectContextComponent=()=>{

     // 3. Subscribe to DataContext and get the Data

     let dataSource = useContext(DataContext);

     if(dataSource === undefined || dataSource.lenght === 0){
        return (
            <div className="container">
                <strong>
                    No Data to Display
                </strong>
            </div>
        );
     } else {

        return (
            <select className="form-control">
                {
                    dataSource.map((entry,idx)=>(
                        <option key={idx} value={entry}>{entry}</option>
                    ))
                }
            </select>
        );
     }


     
 

    
};

export default SelectContextComponent;