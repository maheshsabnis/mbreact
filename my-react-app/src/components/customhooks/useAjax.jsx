import React, {useState, useEffect} from "react";
import EmployeeHttpService from "../../services/employeehttpservice";
// The custom hook
// this is called as Custom hook because, it does not return an HTML
// also this uses a standard Hook 
export const useAjax=(url)=>{
    const serv = new EmployeeHttpService();

    const [response, setResponse] = useState([]);
    // the useEffect() hook will subscribe to Promise
    // and will return data resolved by promise 
    useEffect(()=>{
        serv.getDataDynamic(url)
            .then((resp)=>{
                // Success Promise
                setResponse(resp.data);
            })
            .catch((error)=>{
                console.log(`Error Occured ${error}`);
            });
    },[]);
    return response;
};