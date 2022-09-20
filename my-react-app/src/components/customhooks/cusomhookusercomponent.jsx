import React from "react";
import { useAjax } from "./useAjax";

const CustomHookUserComponent=()=>{
   const response = useAjax("http://localhost:47962/api/Employee");

   if(response === undefined){
     return (
        <div className="container">
            <strong>No Records Received.....</strong>
        </div>
     );
   }else{
     return (
        <div className="container">
            <ul>
                {
                    response.map((record,index)=>(
                        <li key={index}>
                            {JSON.stringify(record)}
                        </li>
                    ))
                }
            </ul>
        </div> 
     );
   }
};

 export default CustomHookUserComponent;